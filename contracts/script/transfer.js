const Transfer = require("../build/contracts/Transfer.json");
const Web3 = require("web3");
const { init } = require("./contrInit");

const send = async () => {
    let web3 = new Web3();
    let contr = await init(Transfer);
    try {
        let cosmosWallet = "bal bal bla";
        let amount = web3.utils.toWei("0.001", "ether");
        console.log(amount);
        let gasEstimate = await contr.methods.transferETH(cosmosWallet).estimateGas({
            value: amount
        });
        let tx = await contr.methods.transferETH(cosmosWallet).send({
            gas: gasEstimate,
            value: amount
        });
        console.log(tx);
    } catch (err) {
        console.log(err);
    }
}

send();