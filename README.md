# How to connect MetaMask using Web3 and TokenABI? 

### Objective:
### 1) Get the ETH Balance of an Ethereum Address
### 2) Get ERC20 Token Balance using ABI
<br>

## Why MetaMask? : Its background and purpose
MetaMask is a popular and established browser extension which functions as a cryptocurrency wallet that connects to the <b>Ethereum blockchain</b>. MetaMask allows users to interact with the Ethereum ecosystem without having to download the entire blockchain on their device. Ethereum wallet allows users to connect multiple wallets and switch between the Ethereum mainnet and other major testnets.
<br><br>

## 1. Installing Web3.js
First, you need to install `web3.js`!

The web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP or IPC connection. The web3.js library interacts with the Ethereum blockchain. It can retrieve user accounts, send transactions, interact with smart contracts, and more.

However, web3.js needs a provider object configured with the information of the wallet that’s going to sign the transaction and send it to the network. Web3.js has its own implementation of the specification and has made it available under `web3.providers`, where you can access the three following providers: `HttpProvider`, `WebsocketProvider`, and `IpcProvider`.

Do note that MetaMask injects the provider object in the browser under `window.ethereum`. Older versions of Metamask used to inject an instance of web3 under `window.web3`.
<br><br>

## 2. Use ABI to access ERC20 Token Balance
Next, download `TokenABI.js`!

An ERC20 token is a standard used for creating and issuing smart contracts on the Ethereum blockchain. In Ethereum, Contract ABI is an interface that defines a standard scheme of how to call functions in a smart contract and get data back. Hence, we will need to use ABI in order to make some calls to ERC-20 token contracts.



