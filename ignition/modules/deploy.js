const { ethers, run, network } = require("hardhat")
require("dotenv").config()

// async main
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.waitForDeployment()

    const contractAddress = await simpleStorage.getAddress()
    const transactionHash = simpleStorage.deploymentTransaction().hash
    console.log("SimpleStorage deployed to:", contractAddress);
    console.log("Transaction hash:", transactionHash);

    // good concept here: if we want to verify the contract, we can do it here
    // we have to scan the network first on which contract is deployed
    // if it is deployed on hardhat local netowork, then no need to verify
    // but if it is deployed on mainnet or remote testnet, we have to verify it.
    console.log(`Network used: ${network.name}`);
    console.log(`Network chainId: ${network.config.chainId}`);
    console.log(`Network URL: ${network.config.url}`);
    
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deploymentTransaction().wait(6);
        await verify(contractAddress, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log("Current value is: ", currentValue.toString());
    
    const transactionResponse = await simpleStorage.store(750)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log("Updated value is: ", updatedValue.toString());
}

async function verify(contractAddress, args) {
    try {
        await run("verify: verify", {
            address: contractAddress,
            constructorArguments: args
        })
    } catch (error) {
        if (error.message.includes("already") || error.message.includes("verified")) {
            console.log("Contract source code already verified")
        } else {
            console.log(error)
        }
    }
}

// main()
main()
    .then(() => console.log("DONE!"))
    .catch(err => console.log(err))
