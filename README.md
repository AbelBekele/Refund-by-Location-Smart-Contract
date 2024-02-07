
# Revolutionizing Logistics with GPS and Blockchain

<div align="center">
<br></br>
  <strong><h3>Tech-Driven Logistics</h3></strong><br>
  Built on Ethereum <br> <br>
</div>
<hr>

<details>

<summary>Table of Contents</summary>

- [Overview](#overview)
- [Expected Outcomes](#expected-outcomes)
- [Skills Required](#skills-required)
- [Description](#description)
- [Links](#links)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Usage](#usage)

</details>

## Overview

Revolutionizing the logistics and delivery industry with state-of-the-art GPS and blockchain technology. This pioneering solution ensures timely deliveries within designated zones through an Ethereum-based dApp, automatically rewarding drivers for geographical compliance. Setting a new benchmark in efficiency, reliability, and transparency, leading the way in tech-driven logistics solutions.

Utilizing a location-based smart contract to facilitate automatic payments for drivers who remain within specified geographic zones for set durations. This system involves drivers' smartphones transmitting GPS data to an Ethereum smart contract at predetermined intervals. When a driver meets the conditions outlined in the contract, a cryptocurrency transaction is processed as payment.

Should GPS tracking reveal a driver straying from the assigned area, the smart contract updates to reflect non-compliance, impacting the driver's internal rating. This rating system evaluates drivers, penalizing deviations with lower scores, while rewarding adherence with higher ratings. An ERC20 token is integrated into the smart contract, serving as the basis for a rewards system. Drivers who consistently meet compliance criteria receive these tokens as additional incentives, enhancing their performance. These tokens can be utilized within the ecosystem or converted into other cryptocurrencies or goods.


## Expected Outcomes

- Set up toolchains to build and deploy Ethereum-based smart contracts
- Program in Solidity using Brownie or Hardhat
- Test and debug smart contracts

## Description

Currently, most carpooling systems are in the control of the industry giants like Ola, Uber and several others. Thave all the data of drivers as well as of riders and this can lead to major privacy issues.
This project therefore aims to move ride-sharing and car hire are to blockchain in order to build a much more secure and reliable carpooling system that would connect the rider and driver directly using "smart contracts" without the intervention of any third party.

1. **Decentralized Network**: A peer-to-peer carpooling platform based on blockchain operates on a decentralized network, eliminating the need for intermediaries.
2. **Secure Transactions**: The platform uses blockchain technology to secure and track transactions between users, ensuring the safety and transparency of financial transactions.
3. **Smart Contracts**: The platform can be powered by smart contracts, automatically executing the terms of a carpooling agreement without intermediaries.
4. **Data Privacy**: User data is protected by the immutable and secure nature of blockchain technology, ensuring privacy and security.

## Links

- [GitHub Repository](https://github.com/GeoLogix-Solutions)
- [Demo Video](https://example.com/demo_video)
- [Screenshots](https://example.com/screenshots)

## Tech Stack

#### Front-end
- HTML/CSS
- JavaScript
- ReactJS
- web3.js [Documentation](https://web3py.readthedocs.io/en/v5/)

#### Back-end
- Node.js [Documentation](https://nodejs.org/en/docs/)
- Express.js [Documentation](https://devdocs.io/express/)
- web3storage/IPFS [Documentation](https://web3.storage/docs/)
- socket.io [Documentation](https://socket.io/docs/v4/)

#### Mobile Application
- Flutter [Documentation](https://docs.flutter.dev/t/)

#### Database
- MySQL [Documentation](https://www.mysql.com/docs/)

#### Extensions
- Metamask [Documentation](https://docs.metamask.io/guide/)



## Project Setup

> Want to setup this project on your machine? Follow these steps:

* STEP 1: [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm): Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to build server-side applications in JavaScript and run them on the server. It includes a rich library of modules, known as npm (Node Package Manager), that enables developers to add functionality to their applications quickly and easily. It is widely used for web application development, building networked applications, and developing server-side scripts.
* STEP 2: [Install Metamask Extension](https://metamask.io/) MetaMask is a browser extension and mobile app that provides an interface for interacting with decentralized applications (dApps) built on the Ethereum blockchain. It allows users to securely store, manage, and send Ethereum and other Ethereum-based tokens, as well as interact with dApps in a user-friendly way.
* STEP 3: [Configure a Metamask Account](https://docs.metamask.io/guide/#why-metamask)
* STEP 4: Navigate to the repository and clone it: [Clone our GitHub Respository](https://github.com/GeoLogix-Solutions)

## Usage

In the root directory, install all the dependencies of the frontend by running the command:
### `npm install`

Navigate to the \backend directory, and then install the dependencies of the backend by running the command:
### `npm install`

Navigate back to the root directory, and then execute the frontend by running the command:
### `npm start`

Execute the backend by running the command:
### `nodemon index.js` ``