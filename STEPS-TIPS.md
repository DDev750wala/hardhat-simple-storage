1. ``` yarn init ```
2. ``` yarn add --dev hardhat ```
3. ``` yarn hardhat ```
    - basic simple project
4. ``` yarn hardhat ``` to run the available tasks. 
5. ``` yarn hardhat node ``` starts a JSON rpc server. in which the accounts are provided by hardhat locally


### Hardhat network by default comes with the built-in network akin to Ganache. so If we want to specify our own RPC url and Private keys, then We have to do it in ```hardhat.config.js``` file

### The network we see while running ``` yarn hardhat run ignition/modules/deploy.js``` without specifying network. that network is other than hardhat. it is live only till the command itself being executed. if we want to use hardhat actual network, then do the following:
- ```yarn hardhat node``` - the localhost server will start. add that RPC url as network in ```hardhat.config.js``` file. and then use that network.

### ```test/test-deploy.js``` in this file. running all the tests
- ```yarn hardhat test``` runs all the tasks
- ```yarn hardhat test --grep [task-description-matching-word]``` to run the specific task. 
- if we write ```it.only``` instead of ```it``` in that test code. then it will run onoly that test. ```yarn hardhat test```



### solidity-coverage
- ONE MORE ADDITION TO CONTRACT TESTING
- in order to check if every line of the contract is checked. then package is used.
- ```yarn add --dev solidity-converage```
- add it to the require in ```hardhat.config.js```.
- ```yarn hardhat coverage``` - gives which line are not tested yet.