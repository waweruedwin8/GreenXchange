// SPDX-License-Identifier: MIT
/**
 * @custom:dev-run-script ./scripts/run.js
 */

pragma solidity ^0.8.0;
contract Analytics {
    uint256 public totalMinted;
    uint256 public totalRetired;

    event Minted(address indexed user, uint256 amount);
    event Retired(address indexed user, uint256 amount);

    function recordMint(uint256 amount) public {
        totalMinted += amount;
        emit Minted(msg.sender, amount);
    }

    function recordRetirement(uint256 amount) public {
        totalRetired += amount;
        emit Retired(msg.sender, amount);
    }
}
