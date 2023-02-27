import { ethers } from 'hardhat';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ConsultationRegist } from '../typechain-types/registration.sol/ConsultationRegist';
import { UserRoles } from '../typechain-types/roles.sol/UserRoles';

describe('ConsultationRegist', () => {
  let consultationRegist: ConsultationRegist;
  let userRoles : UserRoles;
  let admin: SignerWithAddress;
  let dokter: SignerWithAddress;
  let pasien1: SignerWithAddress;
  let pasien2: SignerWithAddress;
  let nonUser: SignerWithAddress;

  beforeEach(async () => {
    [admin, dokter, pasien1, pasien2, nonUser] = await ethers.getSigners();

    const UserRolesFactory = await ethers.getContractFactory('UserRoles');
    userRoles = await UserRolesFactory.deploy();
    await userRoles.deployed();

    const consultationRegistFactory = await ethers.getContractFactory('ConsultationRegist');
    consultationRegist = await consultationRegistFactory.deploy(userRoles.address);
    await consultationRegist.deployed();
  });

  describe('add registration & get registration evidence', () => {
    it('should add registration & get evidence from patient', async () => {
      const patientAddress = await pasien1.getAddress();
      const nama = 'John Doe';
      const telepon = '08012345678';
      const namaDokter = 'Dr. Jane Smith';
      const sesi = 'Sesi 1';
      const tanggal = '2022-02-17';
      const keluhan = 'Flu';
      const gender = 'Male';

      await userRoles.connect(admin).setRole(await pasien1.getAddress(), 'pasien');
      await consultationRegist.connect(pasien1).addRegistration(
        patientAddress,
        nama,
        telepon,
        namaDokter,
        sesi,
        tanggal,
        keluhan,
        gender,
      );
      const registrations = await consultationRegist.connect(pasien1)
        .getRegistrationEvidence(pasien1.getAddress());
      expect(registrations).to.have.lengthOf(1);

      const registration = registrations[0];
      expect(registration.nama).to.equal(nama);
      expect(registration.telepon).to.equal(telepon);
      expect(registration.namaDokter).to.equal(namaDokter);
      expect(registration.sesi).to.equal(sesi);
      expect(registration.tanggal).to.equal(tanggal);
      expect(registration.keluhan).to.equal(keluhan);
      expect(registration.gender).to.equal(gender);
      expect(registration.wallet).to.equal(patientAddress);
    });
  });

  describe('get all registrations', () => {
    it('should get all registrations from admin and doctor', async () => {
      const patient1Address = await pasien1.getAddress();
      const patient2Address = await pasien2.getAddress();
      const nama = 'John Doe';
      const nama2 = 'Clarine';
      const telepon = '08012345678';
      const telepon2 = '08012345665';
      const namaDokter = 'Dr. Jane Smith';
      const namaDokter2 = 'Dr. Boyke';
      const sesi = 'Sesi 1';
      const sesi2 = 'Sesi 1';
      const tanggal = '2022-02-17';
      const tanggal2 = '2022-02-18';
      const keluhan = 'Flu';
      const keluhan2 = 'Pusing';
      const gender = 'Male';
      const gender2 = 'Female';

      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');

      await consultationRegist.connect(admin).addRegistration(
        patient1Address,
        nama,
        telepon,
        namaDokter,
        sesi,
        tanggal,
        keluhan,
        gender,
      );

      await consultationRegist.connect(dokter).addRegistration(
        patient2Address,
        nama2,
        telepon2,
        namaDokter2,
        sesi2,
        tanggal2,
        keluhan2,
        gender2,
      );

      const allRegistrations = await consultationRegist.connect(admin).getAllRegistrations();
      expect(allRegistrations).to.have.lengthOf(2);

      expect(allRegistrations[0][0].nama).to.equal(nama);
      expect(allRegistrations[0][0].telepon).to.equal(telepon);
      expect(allRegistrations[0][0].namaDokter).to.equal(namaDokter);
      expect(allRegistrations[0][0].sesi).to.equal(sesi);
      expect(allRegistrations[0][0].tanggal).to.equal(tanggal);
      expect(allRegistrations[0][0].keluhan).to.equal(keluhan);
      expect(allRegistrations[0][0].gender).to.equal(gender);
      expect(allRegistrations[0][0].wallet).to.equal(patient1Address);

      expect(allRegistrations[1][0].nama).to.equal(nama2);
      expect(allRegistrations[1][0].telepon).to.equal(telepon2);
      expect(allRegistrations[1][0].namaDokter).to.equal(namaDokter2);
      expect(allRegistrations[1][0].sesi).to.equal(sesi2);
      expect(allRegistrations[1][0].tanggal).to.equal(tanggal2);
      expect(allRegistrations[1][0].keluhan).to.equal(keluhan2);
      expect(allRegistrations[1][0].gender).to.equal(gender2);
      expect(allRegistrations[1][0].wallet).to.equal(patient2Address);

      const doctorRegistrations = await consultationRegist.connect(dokter).getAllRegistrations();
      expect(doctorRegistrations).to.have.lengthOf(2);

      expect(doctorRegistrations[1][0].nama).to.equal(nama2);
      expect(doctorRegistrations[1][0].telepon).to.equal(telepon2);
      expect(doctorRegistrations[1][0].namaDokter).to.equal(namaDokter2);
      expect(doctorRegistrations[1][0].sesi).to.equal(sesi2);
      expect(doctorRegistrations[1][0].tanggal).to.equal(tanggal2);
      expect(doctorRegistrations[1][0].keluhan).to.equal(keluhan2);
      expect(doctorRegistrations[1][0].gender).to.equal(gender2);
      expect(doctorRegistrations[1][0].wallet).to.equal(patient2Address);
    });
  });

  describe('modifier', () => {
    it('should only existing user can add registration', async () => {
      const patientAddress = await pasien1.getAddress();
      const nama = 'John Doe';
      const telepon = '08012345678';
      const namaDokter = 'Dr. Jane Smith';
      const sesi = 'Sesi 1';
      const tanggal = '2022-02-17';
      const keluhan = 'Flu';
      const gender = 'Male';

      await expect(consultationRegist.connect(nonUser).addRegistration(
        patientAddress,
        nama,
        telepon,
        namaDokter,
        sesi,
        tanggal,
        keluhan,
        gender,
      )).to.be.revertedWith('Hanya pengguna terdaftar yang diizinkan untuk mengakses.');
    });
    it('should only pasien can get evidence', async () => {
      const patientAddress = await pasien1.getAddress();
      const nama = 'John Doe';
      const telepon = '08012345678';
      const namaDokter = 'Dr. Jane Smith';
      const sesi = 'Sesi 1';
      const tanggal = '2022-02-17';
      const keluhan = 'Flu';
      const gender = 'Male';

      await userRoles.connect(admin).setRole(await pasien1.getAddress(), 'pasien');

      await consultationRegist.connect(pasien1).addRegistration(
        patientAddress,
        nama,
        telepon,
        namaDokter,
        sesi,
        tanggal,
        keluhan,
        gender,
      );

      await expect(consultationRegist.connect(admin)
        .getRegistrationEvidence(pasien1.getAddress())).to.be.revertedWith('Hanya pasien yang diizinkan untuk mengakses.');
    });
    it('should only admin or doctor can get all registration', async () => {
      const patientAddress = await pasien1.getAddress();
      const nama = 'John Doe';
      const telepon = '08012345678';
      const namaDokter = 'Dr. Jane Smith';
      const sesi = 'Sesi 1';
      const tanggal = '2022-02-17';
      const keluhan = 'Flu';
      const gender = 'Male';
      await userRoles.connect(admin).setRole(await pasien1.getAddress(), 'pasien');
      await consultationRegist.connect(pasien1).addRegistration(
        patientAddress,
        nama,
        telepon,
        namaDokter,
        sesi,
        tanggal,
        keluhan,
        gender,
      );

      await expect(consultationRegist.connect(pasien1).getAllRegistrations()).to.be.revertedWith('Hanya admin atau dokter yang diizinkan untuk mengakses.');
    });
  });
});
