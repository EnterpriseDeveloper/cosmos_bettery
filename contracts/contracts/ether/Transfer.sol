// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Transfer is Initializable {
    address public owner;
    event transferETHEvent(string cosmosWallet, uint amount, address sender);
    event transferERC20Event(string cosmosWallet, uint amount, address sender, string token);

    function TransferInit() public initializer {
       owner = msg.sender;
    }

    function transferETH(string memory cosmosWallet) public payable {
       require(msg.value > 0, "Amount must be more at 0");
       payable(owner).transfer(msg.value);
       emit transferETHEvent(cosmosWallet, msg.value, msg.sender);
    }

    function transferERC20(uint amount) public {

    }
}
