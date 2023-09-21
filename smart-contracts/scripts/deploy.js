const { ethers } = require("hardhat");

async function main() {
  //CMA
  console.log("Deploying CMA Contract...");
  const CMAFactory = await ethers.getContractFactory("CMA");
  const cma = await CMAFactory.deploy();

  console.log("Deployed CMA:", cma.address);

  //CMAICO
  console.log("Deploying cmaICO Contract...");
  const CmaICOFactory = await ethers.getContractFactory("CmaICO");
  const cmaICO = await CmaICOFactory.deploy(
    "0xAA0965Ea7CC830C0fBb1a5458f9C4bBC79BC1a57",
    cma.address
  );

  console.log("Deployed cmaICO:", cmaICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
