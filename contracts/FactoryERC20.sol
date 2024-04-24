// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FactoryERC20 is ERC20, Ownable {

    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) Ownable(msg.sender) {
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}