import { ethers } from 'hardhat';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ConsultationRegist } from '../typechain-types/registrasi.sol/ConsultationRegist';
import { UserRoles } from '../typechain-types/roles.sol/UserRoles';

describe('ConsultationRegist', () => {
  let consultationRegist: ConsultationRegist;
  let userRoles : UserRoles;
  let admin: SignerWithAddress;
  let dokter: SignerWithAddress;
  let pasien1: SignerWithAddress;
  let pasien2: SignerWithAddress;

  beforeEach(async () => {
    [admin, dokter, pasien1, pasien2] = await ethers.getSigners();

    const UserRolesFactory = await ethers.getContractFactory('UserRoles');
    userRoles = await UserRolesFactory.deploy();
    await userRoles.deployed();

    const consultationRegistFactory = await ethers.getContractFactory('ConsultationRegist');
    consultationRegist = await consultationRegistFactory.deploy(userRoles.address);
    await consultationRegist.deployed();
  });

  describe('addRegistration & getRegistrationEvidence', () => {
    it('should add registration & get evidence for patient', async () => {
      const patientAddress = await pasien1.getAddress();
      const nama = 'John Doe';
      const telepon = '08012345678';
      const namaDokter = 'Dr. Jane Smith';
      const sesi = 'Sesi 1';
      const tanggal = '2022-02-17';
      const keluhan = 'Flu';
      const gender = 'Male';

      await userRoles.connect(admin).setRole(patientAddress, 'pasien');

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

  describe('getAllRegistrations', () => {
    it('should get all registrations for admin or doctor', async () => {
      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');

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

      const allRegistrations = await consultationRegist.connect(admin).getAllRegistrations(0);
      expect(allRegistrations).to.have.lengthOf(100);

      const registration1 = allRegistrations[0];
      expect(registration1.wallet).to.equal(patient1Address);
      expect(registration1.nama).to.equal(nama);
      expect(registration1.telepon).to.equal(telepon);
      expect(registration1.namaDokter).to.equal(namaDokter);
      expect(registration1.sesi).to.equal(sesi);
      expect(registration1.tanggal).to.equal(tanggal);
      expect(registration1.keluhan).to.equal(keluhan);
      expect(registration1.gender).to.equal(gender);

      const registration2 = allRegistrations[1];
      expect(registration2.wallet).to.equal(patient2Address);
      expect(registration2.nama).to.equal(nama2);
      expect(registration2.telepon).to.equal(telepon2);
      expect(registration2.namaDokter).to.equal(namaDokter2);
      expect(registration2.sesi).to.equal(sesi2);
      expect(registration2.tanggal).to.equal(tanggal2);
      expect(registration2.keluhan).to.equal(keluhan2);
      expect(registration2.gender).to.equal(gender2);

      const doctorRegistrations = await consultationRegist.connect(dokter).getAllRegistrations(1);
      expect(doctorRegistrations).to.have.lengthOf(100);

      const doctorRegistration = doctorRegistrations[0];
      expect(doctorRegistration.wallet).to.equal(patient2Address);
      expect(doctorRegistration.nama).to.equal(nama2);
      expect(doctorRegistration.telepon).to.equal(telepon2);
      expect(doctorRegistration.namaDokter).to.equal(namaDokter2);
      expect(doctorRegistration.sesi).to.equal(sesi2);
      expect(doctorRegistration.tanggal).to.equal(tanggal2);
      expect(doctorRegistration.keluhan).to.equal(keluhan2);
      expect(doctorRegistration.gender).to.equal(gender2);
    });
  });
});
