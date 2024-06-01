import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import { vars } from "hardhat/config";

// npx hardhat vars set OKLINKS_API_KEY 
// Example Link to one of the contract
// https://www.oklink.com/amoy/address/0x310d27ddd9dc9693b7a98d77d4ff528ffb221c61/contract#category=read
const OKLink_API_KEY = vars.get("OKLink_API_KEY");

const config: HardhatUserConfig = {
 solidity: "0.8.20",
 networks: {
    polygonAmoy: {
      url: process.env.URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
 },
 etherscan: {
    apiKey: {
      polygonAmoy: OKLink_API_KEY,
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/polygonAmoy",
        },
      },
    ],
  },
  sourcify: {
    enabled: false
  },
};

export default config;