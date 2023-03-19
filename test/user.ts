import { ethers } from 'hardhat';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { UserData } from '../typechain-types/user.sol/UserData';
import { UserRoles } from '../typechain-types/roles.sol/UserRoles';

describe('UserData', () => {
  let userData: UserData;
  let userRoles : UserRoles;
  let admin: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;
  let user3: SignerWithAddress;
  let nonUser: SignerWithAddress;

  before(async () => {
    [admin, user1, user2, user3, nonUser] = await ethers.getSigners();

    const UserRolesFactory = await ethers.getContractFactory('UserRoles');
    userRoles = await UserRolesFactory.deploy();
    await userRoles.deployed();

    const UserDataFactory = await ethers.getContractFactory('UserData');
    userData = await UserDataFactory.deploy(userRoles.address);
    await userData.deployed();
  });

  describe('add & get user', () => {
    const nama = 'Alice';
    const email = 'alice@example.com';
    const telepon = '1234567890';
    const gender = 'female';
    const tanggalLahir = '2000-01-01';
    const status = true;
    it('should add a user', async () => {
      await userRoles.connect(admin).setRole(await user1.getAddress(), 'pasien');
      await userData.connect(user1).addUser(
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      );
    });
    it('should get a user', async () => {
      const user = await userData.connect(user1).getUser(await user1.getAddress());
      expect(user).to.eql([await user1.getAddress(), nama, email, telepon,
        gender, tanggalLahir, status]);
    });
  });

  describe('update & get user', () => {
    const nama = 'Alice Updated';
    const email = 'alice.updated@example.com';
    const telepon = '0987654321';
    const gender = 'male';
    const tanggalLahir = '1990-01-01';
    const status = false;
    it('should update a user', async () => {
      await userData.connect(user1).updateUser(
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      );
    });
    it('should get a updated user', async () => {
      await userData.connect(user1).updateUser(
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      );
      const user = await userData.getUser(await user1.getAddress());
      expect(user).to.eql([await user1.getAddress(), nama, email, telepon,
        gender, tanggalLahir, status]);
    });
  });

  describe('add user from admin', () => {
    const nama = 'Bob';
    const email = 'bob@example.com';
    const telepon = '1234567890';
    const gender = 'male';
    const tanggalLahir = '2000-01-01';
    const status = true;
    it('should add a user from admin', async () => {
      await userData.connect(admin).addUserAdmin(
        await user2.getAddress(),
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      );
    });
    it('should get a user from admin', async () => {
      const user = await userData.connect(admin).getUser(await user2.getAddress());
      expect(user).to.eql([await user2.getAddress(), nama, email, telepon,
        gender, tanggalLahir, status]);
    });
  });

  describe('update user from admin', () => {
    const nama = 'Bob Updated';
    const email = 'bob.updated@example.com';
    const telepon = '0987654321';
    const gender = 'female';
    const tanggalLahir = '1990-01-01';
    const status = false;
    it('should update a user from admin', async () => {
      await userData.connect(admin).updateUserAdmin(
        await user2.getAddress(),
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      );
    });
    it('should get a updated user from admin', async () => {
      const user = await userData.connect(admin).getUser(await user2.getAddress());
      expect(user).to.eql([await user2.getAddress(), nama, email, telepon,
        gender, tanggalLahir, status]);
    });
    it('should only allow update for existing user from admin', async () => {
      await expect(
        userData.connect(admin).updateUserAdmin(
          await nonUser.getAddress(),
          nama,
          email,
          telepon,
          gender,
          tanggalLahir,
          status,
        ),
      ).to.be.revertedWith('User tidak ditemukan.');
    });
  });

  describe('add & get doctor from admin', () => {
    const nama = 'Bob';
    const email = 'bob@example.com';
    const telepon = '1234567890';
    const hari = 'senin - jumat';
    const sesi = '09-00-10.00, 10-00-11.00';
    const pendidikan = 'Universitas Indonesia (2012)';
    const str = '33.1.1.401.4.22.086214';
    const cat = 'Dokter Umum';
    const img = 'image';
    const status = true;
    it('should add a doctor from admin', async () => {
      await userData.connect(admin).addDoctor(
        nama,
        email,
        telepon,
        hari,
        sesi,
        pendidikan,
        str,
        cat,
        img,
        await user3.getAddress(),
        status,
      );
    });
    it('should get all doctors from admin', async () => {
      const doctor = await userData.connect(admin).getDoctors();
      expect(doctor.length).to.eql(1);
    });
  });

  describe('update doctor from admin', () => {
    const nama = 'Bob Updated';
    const email = 'bob@example.com';
    const telepon = '1234567890';
    const hari = 'senin - jumat';
    const sesi = '09-00-10.00, 10-00-11.00';
    const pendidikan = 'Universitas Indonesia (2012)';
    const str = '33.1.1.401.4.22.086214';
    const cat = 'Dokter Umum';
    const img = 'image';
    const status = true;
    it('should update a user from admin', async () => {
      await userData.connect(admin).updateDoctor(
        nama,
        email,
        telepon,
        hari,
        sesi,
        pendidikan,
        str,
        cat,
        img,
        await user3.getAddress(),
        status,
      );
    });
    it('should get all doctors from admin', async () => {
      const doctor = await userData.connect(admin).getDoctors();
      expect(doctor.length).to.eql(1);
    });
    it('should only allow update for existing doctor from admin', async () => {
      await expect(
        userData.connect(admin).updateDoctor(
          nama,
          email,
          telepon,
          hari,
          sesi,
          pendidikan,
          str,
          cat,
          img,
          await nonUser.getAddress(),
          status,
        ),
      ).to.be.revertedWith('Dokter tidak ditemukan.');
    });
  });

  describe('get all user for admin', () => {
    it('should get all users for admin', async () => {
      const users = await userData.connect(admin).getUserAdmin();
      expect(users.length).to.equal(2);
    });
  });

  describe('modifier', () => {
    it('should only allow admin to use addUserAdmin()', async () => {
      const nama = 'Alice';
      const email = 'alice@example.com';
      const telepon = '1234567890';
      const gender = 'female';
      const tanggalLahir = '2000-01-01';
      const status = true;
      await expect(userData.connect(user1).addUserAdmin(
        await user1.getAddress(),
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      )).to.be.revertedWith(
        'Hanya admin yang diizinkan untuk mengakses.',
      );
    });
    it('should only allow admin to use updateUserAdmin()', async () => {
      const nama = 'Alice Updated';
      const email = 'alice@update.com';
      const telepon = '12345670';
      const gender = 'male';
      const tanggalLahir = '2001-01-01';
      const status = true;
      await expect(userData.connect(user1).updateUserAdmin(
        await user1.getAddress(),
        nama,
        email,
        telepon,
        gender,
        tanggalLahir,
        status,
      )).to.be.revertedWith(
        'Hanya admin yang diizinkan untuk mengakses.',
      );
    });
    it('should only allow admin to addDoctor()', async () => {
      const nama = 'Bob';
      const email = 'bob@example.com';
      const telepon = '1234567890';
      const hari = 'senin - jumat';
      const sesi = '09-00-10.00, 10-00-11.00';
      const pendidikan = 'Universitas Indonesia (2012)';
      const str = '33.1.1.401.4.22.086214';
      const cat = 'Dokter Umum';
      const img = 'image';
      const status = true;
      await expect(userData.connect(user1).addDoctor(
        nama,
        email,
        telepon,
        hari,
        sesi,
        pendidikan,
        str,
        cat,
        img,
        await user1.getAddress(),
        status,
      )).to.be.revertedWith(
        'Hanya admin yang diizinkan untuk mengakses.',
      );
    });
    it('should only allow admin to updateDoctor()', async () => {
      const nama = 'Bob Updated';
      const email = 'bob@example.com';
      const telepon = '1234567890';
      const hari = 'senin - jumat';
      const sesi = '09-00-10.00, 10-00-11.00';
      const pendidikan = 'Universitas Indonesia (2012)';
      const str = '33.1.1.401.4.22.086214';
      const cat = 'Dokter Umum';
      const img = 'image';
      const status = true;
      await expect(userData.connect(user1).updateDoctor(
        nama,
        email,
        telepon,
        hari,
        sesi,
        pendidikan,
        str,
        cat,
        img,
        await user3.getAddress(),
        status,
      )).to.be.revertedWith(
        'Hanya admin yang diizinkan untuk mengakses.',
      );
    });
    it('should only allow admin and doctor to use getAllUser()', async () => {
      await expect(
        userData.connect(user1).getUserAdmin(),
      ).to.be.revertedWith('Hanya admin atau dokter yang diizinkan untuk mengakses.');
    });
    it('should only allow pasien to use updateUser()', async () => {
      const nama = 'Alice Updated';
      const email = 'alice.updated@example.com';
      const telepon = '0987654321';
      const gender = 'male';
      const tanggalLahir = '1990-01-01';
      const status = false;
      await expect(
        userData.connect(admin).updateUser(nama, email, telepon, gender, tanggalLahir, status),
      ).to.be.revertedWith('Hanya pasien yang diizinkan untuk mengakses.');
    });
    it('should only allow registered user to use getUser()', async () => {
      await expect(
        userData.connect(nonUser).getUser(await user1.getAddress()),
      ).to.be.revertedWith('Hanya pengguna terdaftar yang diizinkan untuk mengakses.');
    });
  });
});
