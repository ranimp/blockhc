/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractAbi from '../../artifacts/contracts/registrasi.sol/ConsultationRegist.json';
import addRegist from '../../lib/connect';

const contractAddress = '0x498A449eB161561C2EBcFeF162cB2C41e42D2cA5';

export default function MyForm() {
  const sendData = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Alchemy
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);

    // Panggil fungsi addRegistration pada kontrak
    // Memanggil fungsi addRegistration
    const walletAddress = '0x1234567890123456789012345678901234567890'; // Alamat dompet
    const nama = 'riki';
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
  };

  const getData = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Alchemy
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
    // Mendapatkan data registrasi
    const registrations = await contract.getAllRegistrations(0);
    console.log(registrations);
  };

  return (
    <form>
      <button type="submit" onClick={sendData}>Kirim</button>
      <button type="submit" onClick={getData}>Ambil</button>
    </form>
  );
}
