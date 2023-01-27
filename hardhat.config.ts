import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const ALCHEMY_API_KEY = 'MC7MlRF4HIN4xWImB8OVYoWNop_tUeMR';
const GOERLI_PRIVATE_KEY = '60792f2d3d64d5b77e0979afd4297b4e1ad64c49b33327d3b94db7c40f40a323';

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  paths: {
    artifacts: './hardhat/artifacts',
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
    hardhat: {
      chainId: 1337,
    },
  },
};

export default config;
