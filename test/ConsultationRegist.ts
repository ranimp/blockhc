// eslint-disable-next-line import/no-extraneous-dependencies
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('ConsultationRegist', () => {
  it("Should return the new value once it's changed", async () => {
    const ConsultationRegist = await ethers.getContractFactory('ConsultationRegist');
    const regist = await ConsultationRegist.deploy('Hello, world!');
    await regist.deployed();

    expect(await regist.greet()).to.equal('Hello, world!');

    const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal('Hola, mundo!');
  });
});
