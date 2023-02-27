/* eslint-disable no-console */
const hre = require('hardhat');

async function main() {
  const MyContract = await hre.ethers.getContractFactory('ConsultationRegist');
  const myContract = await MyContract.deploy('0x49D9E60D722D9e156Fe4a75430758bfA659185d1');

  await myContract.deployed();

  console.log('Contract deployed to:', myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
