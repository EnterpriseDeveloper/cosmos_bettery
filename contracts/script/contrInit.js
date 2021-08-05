const Web3 = require('web3');
const networkConfig = require("../config/networks");


async function connectToNetwork(provider) {
    let web3 = new Web3(provider);
    const prKey = web3.eth.accounts.privateKeyToAccount("0x09c97b7d3aa4e0403dadf6c48797eed740042249e66098132373b7fcbf5dc949");
    await web3.eth.accounts.wallet.add(prKey);
    let accounts = await web3.eth.accounts.wallet;
    let account = accounts[0].address;
    return { web3, account };
}

async function init(contract) {
    let network = networkConfig.goerli,
        networkId = networkConfig.goerliId;

    let { web3, account } = await connectToNetwork(network);
    let abi = contract.abi;
    let address = contract.networks[networkId].address;
    return new web3.eth.Contract(abi, address, { from: account });
}

module.exports = {
    init
}