import { ethers } from 'ethers';
import myContractArtifact from '../artifacts/contracts/registrasi.sol/ConsultationRegist.json';

const ABI = myContractArtifact.abi;

const CONTRACT_ADDRESS = '0xfa3943BD82E9c976021F6e99B673a11dB0C88A00'; // Your contract's address goes here

export default async function addRegist() {
  // Buatlah sebuah provider yang terhubung ke Alchemy
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();

  // Buat instance kontrak yang terhubung ke provider
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  // Panggil fungsi addRegistration pada kontrak
  // Memanggil fungsi addRegistration
  const walletAddress = '0x1234567890123456789012345678901234567890'; // Alamat dompet
  const nama = 'Johny';
  const telepon = '081234567890';
  const namaDokter = 'Dr. Smith';
  const sesi = '09:00 - 11:00';
  const tanggal = '2022-02-16';
  const keluhan = 'Sakit kepala';
  const gender = 'Laki-laki';
  const tx = await contract.addRegistration(
    walletAddress,
    nama,
    telepon,
    namaDokter,
    sesi,
    tanggal,
    keluhan,
    gender,
  );
  await tx.wait(); // Menunggu transaksi selesai

  // Mendapatkan data registrasi
  const registrations = await contract.getAllRegistrations(10);
  return registrations;
}
