import { ethers } from 'hardhat';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ConsultationResult } from '../typechain-types/consultation.sol/ConsultationResult';
import { UserRoles } from '../typechain-types/roles.sol/UserRoles';

describe('ConsultationResult', () => {
  let consultationResult: ConsultationResult;
  let userRoles : UserRoles;
  let admin: SignerWithAddress;
  let dokter: SignerWithAddress;
  let pasien1: SignerWithAddress;
  let pasien2: SignerWithAddress;
  let initialConsultationCount: number;
  let pasienConsultations: any[];
  let allConsultations: any[];

  beforeEach(async () => {
    [admin, dokter, pasien1, pasien2] = await ethers.getSigners();

    const UserRolesFactory = await ethers.getContractFactory('UserRoles');
    userRoles = await UserRolesFactory.deploy();
    await userRoles.deployed();

    const consultationResultFactory = await ethers.getContractFactory('ConsultationResult');
    consultationResult = await consultationResultFactory.deploy(userRoles.address);
    await consultationResult.deployed();
  });

  describe('add & get consultation', () => {
    it('should add consultation for admin and dokter & get all consultation', async () => {
      const patient1Address = await pasien1.getAddress();
      const patient2Address = await pasien2.getAddress();
      const nama = 'John Doe';
      const namaDokter = 'Dr. Jane Smith';
      const tanggal = '2023-02-17';
      const keluhan = 'Flu';
      const diagnosa = 'Common cold';
      const tensi = '120/80 mmHg';
      const gula = '100 mg/dL';

      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');
      await userRoles.connect(admin).setRole(patient1Address, 'pasien');
      await userRoles.connect(admin).setRole(patient2Address, 'pasien');

      await consultationResult.connect(dokter).addConsultation(
        patient1Address,
        nama,
        namaDokter,
        tanggal,
        keluhan,
        diagnosa,
        tensi,
        gula,
      );

      await consultationResult.connect(admin).addConsultation(
        patient2Address,
        nama,
        namaDokter,
        tanggal,
        keluhan,
        diagnosa,
        tensi,
        gula,
      );

      allConsultations = await consultationResult.connect(admin).getAllConsultations();
      expect(allConsultations.length).to.equal(2);

      expect(allConsultations[0][0].wallet).to.equal(patient1Address);
      expect(allConsultations[0][0].nama).to.equal(nama);
      expect(allConsultations[0][0].namaDokter).to.equal(namaDokter);
      expect(allConsultations[0][0].tanggal).to.equal(tanggal);
      expect(allConsultations[0][0].keluhan).to.equal(keluhan);
      expect(allConsultations[0][0].diagnosa).to.equal(diagnosa);
      expect(allConsultations[0][0].tensi).to.equal(tensi);
      expect(allConsultations[0][0].gula).to.equal(gula);

      expect(allConsultations[1][0].wallet).to.equal(patient2Address);
      expect(allConsultations[1][0].nama).to.equal(nama);
      expect(allConsultations[1][0].namaDokter).to.equal(namaDokter);
      expect(allConsultations[1][0].tanggal).to.equal(tanggal);
      expect(allConsultations[1][0].keluhan).to.equal(keluhan);
      expect(allConsultations[1][0].diagnosa).to.equal(diagnosa);
      expect(allConsultations[1][0].tensi).to.equal(tensi);
      expect(allConsultations[1][0].gula).to.equal(gula);
    });
    it('should get consultation for patient', async () => {
      const patient1Address = await pasien1.getAddress();
      const nama = 'John Doe';
      const namaDokter = 'Dr. Jane Smith';
      const tanggal = '2023-02-17';
      const keluhan = 'Flu';
      const diagnosa = 'Common cold';
      const tensi = '120/80 mmHg';
      const gula = '100 mg/dL';

      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');
      await userRoles.connect(admin).setRole(patient1Address, 'pasien');

      await consultationResult.connect(dokter).addConsultation(
        patient1Address,
        nama,
        namaDokter,
        tanggal,
        keluhan,
        diagnosa,
        tensi,
        gula,
      );

      initialConsultationCount = 1;
      pasienConsultations = await consultationResult.connect(pasien1).getConsultationsPasien();

      expect(pasienConsultations.length).to.equal(initialConsultationCount);
      expect(pasienConsultations[0].wallet).to.equal(patient1Address);
      expect(pasienConsultations[0].nama).to.equal(nama);
      expect(pasienConsultations[0].namaDokter).to.equal(namaDokter);
      expect(pasienConsultations[0].tanggal).to.equal(tanggal);
      expect(pasienConsultations[0].keluhan).to.equal(keluhan);
      expect(pasienConsultations[0].diagnosa).to.equal(diagnosa);
      expect(pasienConsultations[0].tensi).to.equal(tensi);
      expect(pasienConsultations[0].gula).to.equal(gula);
    });
  });

  describe('update consultation', () => {
    it('should update the consultation', async () => {
      const patient1Address = await pasien1.getAddress();
      const nama = 'John Doe';
      const namaDokter = 'Dr. Jane Smith';
      const tanggal = '2023-02-17';
      const keluhan = 'Flu';
      const diagnosa = 'Common cold';
      const tensi = '120/80 mmHg';
      const gula = '100 mg/dL';

      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');
      await userRoles.connect(admin).setRole(patient1Address, 'pasien');

      await consultationResult.connect(dokter).addConsultation(
        patient1Address,
        nama,
        namaDokter,
        tanggal,
        keluhan,
        diagnosa,
        tensi,
        gula,
      );

      const updatedKeluhan = 'Fever';
      const updatedDiagnosa = 'Influenza';
      const updatedTensi = '130/85 mmHg';
      const updatedGula = '110 mg/dL';

      await consultationResult.connect(dokter).updateConsultation(
        patient1Address,
        0,
        nama,
        namaDokter,
        tanggal,
        updatedKeluhan,
        updatedDiagnosa,
        updatedTensi,
        updatedGula,
      );

      pasienConsultations = await consultationResult.connect(pasien1).getConsultationsPasien();
      const consultation = pasienConsultations[0];

      expect(consultation.wallet).to.equal(patient1Address);
      expect(consultation.nama).to.equal(nama);
      expect(consultation.namaDokter).to.equal(namaDokter);
      expect(consultation.tanggal).to.equal(tanggal);
      expect(consultation.keluhan).to.equal(updatedKeluhan);
      expect(consultation.diagnosa).to.equal(updatedDiagnosa);
      expect(consultation.tensi).to.equal(updatedTensi);
      expect(consultation.gula).to.equal(updatedGula);
    });

    it('should only allow update for existing consultations', async () => {
      const patient1Address = await pasien1.getAddress();
      const nama = 'John Doe';
      const namaDokter = 'Dr. Jane Smith';
      const tanggal = '2023-02-17';
      const keluhan = 'Flu';
      const diagnosa = 'Common cold';
      const tensi = '120/80 mmHg';
      const gula = '100 mg/dL';

      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');
      await userRoles.connect(admin).setRole(patient1Address, 'pasien');

      await consultationResult.connect(dokter).addConsultation(
        patient1Address,
        nama,
        namaDokter,
        tanggal,
        keluhan,
        diagnosa,
        tensi,
        gula,
      );

      const updatedKeluhan = 'Headache';
      const updatedDiagnosa = 'Migraine';
      const updatedTensi = '125/80 mmHg';
      const updatedGula = '105 mg/dL';

      await expect(
        consultationResult.updateConsultation(
          patient1Address,
          2,
          nama,
          namaDokter,
          tanggal,
          updatedKeluhan,
          updatedDiagnosa,
          updatedTensi,
          updatedGula,
        ),
      ).to.be.revertedWith('Consultation data not found');

      pasienConsultations = await consultationResult.connect(pasien1).getConsultationsPasien();
      const consultation = pasienConsultations[0];

      expect(consultation.wallet).to.equal(patient1Address);
      expect(consultation.nama).to.equal(nama);
      expect(consultation.namaDokter).to.equal(namaDokter);
      expect(consultation.tanggal).to.equal(tanggal);
      expect(consultation.keluhan).to.not.equal(updatedKeluhan);
      expect(consultation.diagnosa).to.not.equal(updatedDiagnosa);
      expect(consultation.tensi).to.not.equal(updatedTensi);
      expect(consultation.gula).to.not.equal(updatedGula);
    });
  });

  describe('modifier', () => {
    it('should only allow admin or dokter to add consultation', async () => {
      const patient1Address = await pasien1.getAddress();
      const nama = 'John Doe';
      const namaDokter = 'Dr. Jane Smith';
      const tanggal = '2023-02-17';
      const keluhan = 'Flu';
      const diagnosa = 'Common cold';
      const tensi = '120/80 mmHg';
      const gula = '100 mg/dL';

      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');
      await userRoles.connect(admin).setRole(patient1Address, 'pasien');

      await expect(
        consultationResult.connect(pasien1).addConsultation(
          patient1Address,
          nama,
          namaDokter,
          tanggal,
          keluhan,
          diagnosa,
          tensi,
          gula,
        ),
      ).to.be.revertedWith('Hanya admin atau dokter yang diizinkan untuk mengakses.');
    });
    it('should only allow admin or dokter to update the consultation', async () => {
      const patient1Address = await pasien1.getAddress();
      const nama = 'John Doe';
      const namaDokter = 'Dr. Jane Smith';
      const tanggal = '2023-02-17';
      const keluhan = 'Flu';
      const diagnosa = 'Common cold';
      const tensi = '120/80 mmHg';
      const gula = '100 mg/dL';

      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');
      await userRoles.connect(admin).setRole(patient1Address, 'pasien');

      await consultationResult.connect(dokter).addConsultation(
        patient1Address,
        nama,
        namaDokter,
        tanggal,
        keluhan,
        diagnosa,
        tensi,
        gula,
      );

      const updatedKeluhan = 'Headache';
      const updatedDiagnosa = 'Migraine';
      const updatedTensi = '125/80 mmHg';
      const updatedGula = '105 mg/dL';

      await expect(
        consultationResult.connect(pasien1).updateConsultation(
          patient1Address,
          1,
          nama,
          namaDokter,
          tanggal,
          updatedKeluhan,
          updatedDiagnosa,
          updatedTensi,
          updatedGula,
        ),
      ).to.be.revertedWith('Hanya admin atau dokter yang diizinkan untuk mengakses.');

      pasienConsultations = await consultationResult.connect(pasien1).getConsultationsPasien();
      const consultation = pasienConsultations[0];

      expect(consultation.wallet).to.equal(patient1Address);
      expect(consultation.nama).to.equal(nama);
      expect(consultation.namaDokter).to.equal(namaDokter);
      expect(consultation.tanggal).to.equal(tanggal);
      expect(consultation.keluhan).to.not.equal(updatedKeluhan);
      expect(consultation.diagnosa).to.not.equal(updatedDiagnosa);
      expect(consultation.tensi).to.not.equal(updatedTensi);
      expect(consultation.gula).to.not.equal(updatedGula);
    });
    it('should only allow patient to use getConsultationsPasien', async () => {
      const patient1Address = await pasien1.getAddress();
      const nama = 'John Doe';
      const namaDokter = 'Dr. Jane Smith';
      const tanggal = '2023-02-17';
      const keluhan = 'Flu';
      const diagnosa = 'Common cold';
      const tensi = '120/80 mmHg';
      const gula = '100 mg/dL';

      await userRoles.connect(admin).setRole(await dokter.getAddress(), 'dokter');

      await consultationResult.connect(dokter).addConsultation(
        patient1Address,
        nama,
        namaDokter,
        tanggal,
        keluhan,
        diagnosa,
        tensi,
        gula,
      );

      await expect(consultationResult.connect(dokter).getConsultationsPasien()).to.be.revertedWith('Hanya pasien yang diizinkan untuk mengakses.');
    });
  });
});
