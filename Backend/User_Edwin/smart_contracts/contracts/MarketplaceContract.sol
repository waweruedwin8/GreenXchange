// SPDX-License-Identifier: MIT
/**
 * @custom:dev-run-script ./scripts/run.js
 */

pragma solidity ^0.8.0;

import "./CarbonCreditToken.sol";

contract Marketplace {
    struct Listing {
        address seller;
        uint256 amount;
        uint256 price;
    }

    CarbonCreditToken public token;
    uint256 public listingIdCounter;
    mapping(uint256 => Listing) public listings;
    uint256 public marketplaceFee = 2; // 2% fee
    address public owner;

    constructor(address tokenAddress) {
        token = CarbonCreditToken(tokenAddress);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function listTokens(uint256 amount, uint256 price) public {
        require(token.balanceOf(msg.sender) >= amount, "Not enough tokens");
        token.transferFrom(msg.sender, address(this), amount);
        listings[listingIdCounter++] = Listing(msg.sender, amount, price);
    }

    function buyTokens(uint256 listingId) public payable {
        Listing storage listing = listings[listingId];
        require(msg.value >= listing.price, "Insufficient payment");
        uint256 fee = (listing.price * marketplaceFee) / 100;
        payable(owner).transfer(fee);
        payable(listing.seller).transfer(listing.price - fee);
        token.transfer(msg.sender, listing.amount);
        delete listings[listingId];
    }
}
