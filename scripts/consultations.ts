/* eslint-disable no-console */
const hre = require('hardhat');

async function main() {
  const MyContract = await hre.ethers.getContractFactory('ConsultationResult');
  const myContract = await MyContract.deploy('0x61b213Cf581159A208a1D2DF8e98C5eAdc4DFbf6');

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
