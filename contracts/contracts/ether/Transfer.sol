// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./tokensAddr.sol";
import "../@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Transfer is Initializable, TokensAddr {
    address public owner;
    event transferETHEvent(string cosmosWallet, uint256 amount, address sender);
    event transferERC20Event(
        string cosmosWallet,
        uint256 amount,
        address sender,
        string token
    );

    function __TransferInit() public initializer {
        owner = msg.sender;
    }

    function transferETH(string memory _cosmosWallet) public payable {
        require(msg.value > 0, "Amount must be more at 0");
        payable(owner).transfer(msg.value);
        emit transferETHEvent(_cosmosWallet, msg.value, msg.sender);
    }

    function transferERC20(
        uint256 _amount,
        string memory _symbol,
        string memory _cosmosWallet
    ) public payable {
        (address tokenAddr, bool err) = getTokenAddr(_symbol);
        require(err, "symbol is not valid");
        IERC20 token = IERC20(tokenAddr);
        require(
            token.allowance(msg.sender, owner) == _amount,
            "Allowance error"
        );
        require(
            token.transferFrom(msg.sender, owner, _amount),
            "Transfer token error"
        );
        emit transferERC20Event(_cosmosWallet, msg.value, msg.sender, _symbol);
    }
}
