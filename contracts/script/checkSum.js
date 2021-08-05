const Web3 = require("web3");

const getCheckSum = () => {
    let web3 = new Web3();
    let addr = web3.utils.toChecksumAddress('0x5e7186ac0c12da2c4caf58147e2f68798f3099c0');
    console.log(addr);
}

getCheckSum();