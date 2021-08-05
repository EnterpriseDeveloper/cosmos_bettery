// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TokensAddr {
   function getTokenAddr(string memory symbol) public pure returns (address, bool){
      if(compareStrings(symbol, "USDT")){
          return (address(0xFCf9F99D135D8a78ab60CC59CcCF3108E813bA35), false);
      } else if(compareStrings(symbol, "BTY")){
          return (address(0x5e7186AC0C12dA2c4CAf58147E2F68798f3099C0), false);
      }else{
          return (address(0x00), true);
      }
   }

   function compareStrings(string memory a, string memory b) public pure returns (bool) {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
}
}