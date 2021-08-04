const keys = require("./keys");

let maticMumbai = "wss://ws-matic-mumbai.chainstacklabs.com",
    maticMumbaiId = 80001,
    maticMain = "wss://wispy-spring-star.matic.quiknode.pro/63e582ed6c17529d98cc064ba97cad1d95650da5/",
    maticMainId = 137,
    goerli = `wss://goerli.infura.io/ws/v3/${keys.infura}`,
    goerliId = 5,
    etherMain = `wss://mainnet.infura.io/ws/v3/${keys.infura}`,
    etherMainId = 1


module.exports = {
    maticMumbai,
    maticMumbaiId,
    maticMain,
    maticMainId,
    goerli,
    goerliId,
    etherMainId,
    etherMain
}