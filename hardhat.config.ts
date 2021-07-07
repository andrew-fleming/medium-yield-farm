import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
require('dotenv').config();

export default {
  solidity: {
    version: "0.8.4",
  },
  networks: {
    kovan: {
       url: process.env.KOVAN_KEY,
       accounts: [`0x${process.env.PRIVATE_KEY}`]
   },
    matic: {
        url: process.env.MUMBAI_KEY,
        accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
}

