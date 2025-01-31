// SPDX-License-Identifier: MIT
/**
 * @custom:dev-run-script ./scripts/run.js
 */

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./CarbonCreditToken.sol";

contract PaymentGateway {
    address public owner;
    CarbonCreditToken public carbonToken;
    uint256 public platformFee = 2; // 2% platform fee

    // Supported ERC20 tokens (like USDT, USDC, etc.)
    mapping(address => bool) public supportedTokens;

    event PaymentReceived(
        address indexed buyer,
        address indexed seller,
        uint256 amount,
        uint256 tokens,
        string paymentMethod
    );
    event Withdrawal(address indexed user, uint256 amount);
    event TokenSupportUpdated(address token, bool isSupported);

    mapping(address => uint256) public balances; // Track sellers' balances

    constructor(address carbonTokenAddress) {
        owner = msg.sender;
        carbonToken = CarbonCreditToken(carbonTokenAddress);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    // Update platform fee
    function setPlatformFee(uint256 feePercentage) external onlyOwner {
        require(feePercentage < 100, "Invalid fee percentage");
        platformFee = feePercentage;
    }

    // Add or remove supported ERC20 tokens
    function updateTokenSupport(address token, bool isSupported)
        external
        onlyOwner
    {
        supportedTokens[token] = isSupported;
        emit TokenSupportUpdated(token, isSupported);
    }

    // Buyer pays with AVAX
    function payWithAVAX(
        address seller,
        uint256 tokenAmount,
        uint256 pricePerToken
    ) external payable {
        uint256 totalCost = tokenAmount * pricePerToken;
        require(msg.value >= totalCost, "Insufficient AVAX payment");

        uint256 fee = (totalCost * platformFee) / 100;
        balances[seller] += (totalCost - fee);
        payable(owner).transfer(fee);

        // Transfer Carbon Credit tokens
        require(
            carbonToken.transferFrom(seller, msg.sender, tokenAmount),
            "Token transfer failed"
        );

        emit PaymentReceived(msg.sender, seller, msg.value, tokenAmount, "AVAX");
    }

    // Buyer pays with ERC20 tokens
    function payWithToken(
        address token,
        address seller,
        uint256 tokenAmount,
        uint256 pricePerToken
    ) external {
        require(supportedTokens[token], "Unsupported token");

        uint256 totalCost = tokenAmount * pricePerToken;
        uint256 fee = (totalCost * platformFee) / 100;

        IERC20 erc20 = IERC20(token);
        require(
            erc20.transferFrom(msg.sender, seller, totalCost - fee),
            "Token transfer to seller failed"
        );
        require(
            erc20.transferFrom(msg.sender, owner, fee),
            "Fee transfer to platform failed"
        );

        // Transfer Carbon Credit tokens
        require(
            carbonToken.transferFrom(seller, msg.sender, tokenAmount),
            "Token transfer failed"
        );

        emit PaymentReceived(msg.sender, seller, totalCost, tokenAmount, "ERC20");
    }

    // Record off-chain payments (e.g., Bitcoin)
    function recordOffChainPayment(
        address buyer,
        address seller,
        uint256 tokenAmount,
        string memory paymentMethod
    ) external onlyOwner {
        // Assume off-chain payment validation is already done
        require(
            carbonToken.transferFrom(seller, buyer, tokenAmount),
            "Token transfer failed"
        );

        emit PaymentReceived(buyer, seller, 0, tokenAmount, paymentMethod);
    }

    // Sellers withdraw their earnings
    function withdrawFunds() external {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "No funds available");

        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);

        emit Withdrawal(msg.sender, amount);
    }

    receive() external payable {}
}
