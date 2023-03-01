/* eslint-disable no-console */
const hre = require('hardhat');

async function main() {
  const MyContract = await hre.ethers.getContractFactory('UserData');
  const myContract = await MyContract.deploy('0x143Cab622c54a7537841779b79856DD58bE584A8');

  await myContract.deployed();

  console.log('Contract deployed to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
