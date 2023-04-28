/* eslint-disable no-console */
const hre = require('hardhat');

async function main() {
  const MyContract = await hre.ethers.getContractFactory('ConsultationResult');
  const myContract = await MyContract.deploy('0xB4109e4F3e02b71eFcDCB4Dd34Dd0a3CC996EB2f');

  await myContract.deployed();

  console.log('Contract deployed to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export {};
