// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CMA is ERC20 {
    constructor() ERC20("CarlosAlvarado Token", "CMA") {
        _mint(msg.sender, 9000 * 1e18);
    }
}
