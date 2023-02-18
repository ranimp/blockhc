import { ethers } from 'hardhat';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { UserData } from '../typechain-types/user.sol/UserData';

describe('UserData', () => {
  let userData: UserData;
  let admin: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;

  before(async () => {
    [admin, user1, user2] = await ethers.getSigners();

    const UserRolesFactory = await ethers.getContractFactory('UserRoles');
    const userRoles = await UserRolesFactory.deploy();
    await userRoles.deployed();

    const UserDataFactory = await ethers.getContractFactory('UserData');
    userData = await UserDataFactory.deploy(userRoles.address);
    await userData.deployed();
  });

  describe('addUser & getUser', () => {
    const nama = 'Alice';
    const email = 'alice@example.com';
    const telepon = '1234567890';
    const gender = 'female';
    const tanggalLahir = '2000-01-01';
    const status = true;
    it('should add a user', async () => {
      await userData.connect(user1).addUser(nama, email, telepon, gender, tanggalLahir, status);
    });
    it('should get a user', async () => {
      const user = await userData.getUser(await user1.getAddress());
      expect(user).to.eql([nama, email, telepon, gender, tanggalLahir, status]);
    });
  });

  describe('updateUser & getUser', () => {
    const nama = 'Alice Updated';
    const email = 'alice.updated@example.com';
    const telepon = '0987654321';
    const gender = 'male';
    const tanggalLahir = '1990-01-01';
    const status = false;
    it('should update a user', async () => {
      await userData.connect(user1).updateUser(nama, email, telepon, gender, tanggalLahir, status);
    });
    it('should get a updated user', async () => {
      await userData.connect(user1).updateUser(nama, email, telepon, gender, tanggalLahir, status);
      const user = await userData.getUser(await user1.getAddress());
      expect(user).to.eql([nama, email, telepon, gender, tanggalLahir, status]);
    });
  });

  describe('addUserAdmin', () => {
    it('should add a user for admin', async () => {
      const nama = 'Bob';
      const email = 'bob@example.com';
      const telepon = '1234567890';
      const gender = 'male';
      const tanggalLahir = '2000-01-01';
      const status = true;

      await userData.connect(admin).addUserAdmin(
        await user2.getAddress(),
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      );

      const user = await userData.getUser(await user2.getAddress());
      expect(user).to.eql([nama, email, telepon, gender, tanggalLahir, status]);
    });
  });

  describe('updateUserAdmin', () => {
    it('should update a user for admin', async () => {
      const nama = 'Bob Updated';
      const email = 'bob.updated@example.com';
      const telepon = '0987654321';
      const gender = 'female';
      const tanggalLahir = '1990-01-01';
      const status = false;

      await userData.connect(admin).updateUserAdmin(
        await user2.getAddress(),
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      );

      const user = await userData.getUser(await user2.getAddress());
      expect(user).to.eql([nama, email, telepon, gender, tanggalLahir, status]);
    });
  });

  describe('getUserAdmin', () => {
    it('should get all users for admin', async () => {
      const users = await userData.getUserAdmin();
      expect(users.length).to.equal(2);
    });
  });
});
