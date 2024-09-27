require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number")
require("hardhat-gas-reporter")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const MNEMNONIC = process.env.MNEMNONIC
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKET_CAP_API_KEY = process.env.COINMARKET_CAP_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",  // default network is hardhat network (local blockchain) 
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: {
                mnemonic: MNEMNONIC
            }
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
            // accounts are internally handled by hardhat
        }
    },
    solidity: "0.8.7",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKET_CAP_API_KEY,
    }
}
