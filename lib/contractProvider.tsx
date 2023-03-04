import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractAbi from '../artifacts/contracts/user.sol/UserData.json';
import rolesContractAbi from '../artifacts/contracts/roles.sol/UserRoles.json';

export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  // contract address
  const userAddress = '0xE587868dB2eF7a6114029C703756894b00741b75';
  const rolesContractAddress = '0x143Cab622c54a7537841779b79856DD58bE584A8';

  // condition
  const [user, setUser] = useState(true);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);

  // data user
  const [walletAddress, setWalletAddress] = useState('');
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [ttl, setTtl] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
    const contractRoles = new ethers.Contract(rolesContractAddress, rolesContractAbi.abi, signer);
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();

    try {
      if (signerAddress === address) {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        await Promise.all([
          contract.addUser(nama, telepon, email, ttl, gender, true),
          contractRoles.setDefaultRole(),
        ]);
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();

    try {
      if (signerAddress === address) {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        await Promise.all([
          contract.updateUser(nama, telepon, email, ttl, gender, true),
        ]);
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
  };

  const getDataUser = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();
    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      const data = await contract.getUser(address);
      setWalletAddress(data[0]);
      setNama(data[1]);
      setTelepon(data[2]);
      setEmail(data[3]);
      setTtl(data[4]);
      setGender(data[5]);
      if (signerAddress === address) {
        setUser(true);
      }
    } catch (error) {
      setUser(false);
    }
  };

  const checkRoles = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const contractRoles = new ethers.Contract(rolesContractAddress, rolesContractAbi.abi, signer);
    try {
      const isPasien = await contractRoles.isPasien(address);
      const isDokter = await contractRoles.isDokter(address);
      const isAdmin = await contractRoles.isAdmin(address);
      if (isPasien === true) {
        setRole('pasien');
      } else if (isDokter === true) {
        setRole('dokter');
      } else if (isAdmin === true) {
        setRole('admin');
      }
    } catch (error) {
      setUser(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      getDataUser();
      checkRoles();
    }, 1500);
  }, []);

  return (
    <ContractContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        loading,
        user,
        role,
        walletAddress,
        nama,
        setNama,
        telepon,
        setTelepon,
        ttl,
        setTtl,
        email,
        setEmail,
        gender,
        setGender,
        handleAddUser,
        handleUpdateUser,
        getDataUser,
        checkRoles,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
