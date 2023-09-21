require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
      chainId: 11155111,
      accounts: ["03ba7dcba0fa58c15580fd49a40d82cbf08ba639f010e8f801c5af6944d5d880"],
    },
  },
};
