import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import { vars } from "hardhat/config";

// npx hardhat vars set OKLINKS_API_KEY 
const OKLink_API_KEY = vars.get("OKLink_API_KEY");

const config: HardhatUserConfig = {
 solidity: "0.8.20",
 networks: {
    amoy: {
      url: process.env.URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
 },
 etherscan: {
    apiKey: {
      amoy: OKLink_API_KEY,
    },
    customChains: [
      {
        network: "amoy",
        chainId: 80002,
        urls: {
          apiURL: "https://www.oklink.com/amoy/api",
          browserURL: "https://www.oklink.com/amoy",
        },
      },
    ],
  },
  sourcify: {
    enabled: false
  },
};

export default config;