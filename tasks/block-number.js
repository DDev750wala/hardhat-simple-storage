const { task } = require("hardhat/config")


task("accounts", "All accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

task("block-number", "Prints the current block number")
    .setAction(async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`);
    }
)

module.exports = {} // this is required to export the task.