// SPDX-License-Identifier: MIT
/**
 * @custom:dev-run-script ./scripts/run.js
 */
pragma solidity ^0.8.0;

contract Verifier {
    address public owner;
    mapping(address => bool) public verifiedBusinesses;
    mapping(address => bool) public verifiers;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier onlyVerifier() {
        require(verifiers[msg.sender], "Not a verifier");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addVerifier(address verifier) public onlyOwner {
        verifiers[verifier] = true;
    }

    function removeVerifier(address verifier) public onlyOwner {
        verifiers[verifier] = false;
    }

    function verifyBusiness(address business) public onlyVerifier {
        verifiedBusinesses[business] = true;
    }

    function isVerified(address business) public view returns (bool) {
        return verifiedBusinesses[business];
    }
}