const CarlosCoin = artifacts.require("CarlosCoin");

module.exports = function (deployer) {
  const initialSupply = 10000;
  const tokenPrice = 1.0;

  deployer.deploy(CarlosCoin, initialSupply, tokenPrice);
};
