import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const ALCHEMY_API_KEY = 's9wzc4a1omhgecgbK_y19WHlfhkINWz_';
const PRIVATE_KEY = '60792f2d3d64d5b77e0979afd4297b4e1ad64c49b33327d3b94db7c40f40a323';

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    polygon: {
      url: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
      accounts: [PRIVATE_KEY],
    },
    hardhat: {},
  },
};

export default config;
