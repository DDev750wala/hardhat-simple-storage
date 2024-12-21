const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// in this section, the tests are used to test the smart contract to assert if they are properly 
// working or not. in the "describe" function, the code block in beforeEach function, should be 
// only executed if it passes the "it" functions written below it.

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("It should start with favourite number 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert
        // expect
        
        // with assert
        assert.equal(currentValue, expectedValue, "Invalid starting value.")

        // with expect
        // expect(currentValue.toString().to.equal(expectedValue))

        // both works the same way.
    })

    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue, expectedValue, "Value is not stored properly through the function")  
    })
})