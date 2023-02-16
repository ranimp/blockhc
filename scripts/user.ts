/* eslint-disable no-console */
const hre = require('hardhat');

async function main() {
  const MyContract = await hre.ethers.getContractFactory('UserData');
  const myContract = await MyContract.deploy('0x2797B92d2C03e880310Ac00a3440e8ef0cDbbE21');

  await myContract.deployed();

  console.log('Contract deployed to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
