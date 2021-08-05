const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const TransferContr = artifacts.require("Transfer.sol");

module.exports = async (deployer, network) => {
    if (network === 'goerli') {
        return deployProxy(TransferContr, { deployer, initializer: '__TransferInit' });
    }
};