// SPDX-License-Identifier: MIT
/**
 * @custom:dev-run-script ./scripts/run.js
 */

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarbonCreditToken is ERC20 {
    address public owner;

    constructor() ERC20("CarbonCredit", "CC") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}