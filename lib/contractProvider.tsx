import React, { createContext, useState } from 'react';
import { ethers } from 'ethers';
import contractAbi from '../artifacts/contracts/user.sol/UserData.json';
import rolesContractAbi from '../artifacts/contracts/roles.sol/UserRoles.json';
import registContractAbi from '../artifacts/contracts/registration.sol/ConsultationRegist.json';

export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  // contract address
  const rolesAddress = '0x2c161963073Ba0d9f3930563d4E7B8C081a09d37';
  // const userAddress = '0xCC3300A68739c6A9E6fD29ab0d32E86794eE47F9';
  const userAddress = '0xf8Aa18d6620Cd256d4105862a7aBb73Ad843Afe1';
  const registrationAddress = '0x6b6286E4bcf199b5814A84c189B5A04220BB67BD';

  // getAllData
  const [allDoctor, setAllDoctor] = useState();
  const [allUser, setAllUser] = useState();
  const [allRegistration, setAllRegistration] = useState();

  // condition
  const [user, setUser] = useState(true);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegist, setIsRegist] = useState(false);
  const [slot, setSlot] = useState('');

  // data user
  const [walletAddress, setWalletAddress] = useState('');
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [ttl, setTtl] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  // data dokter
  const [pendidikan, setPendidikan] = useState('');
  const [strNumber, setStrNumber] = useState('');
  const [status, setStatus] = useState(false);
  const [category, setCategory] = useState('');
  const [img, setImg] = useState('');

  // data registrasi
  const [namaDokter, setNamaDokter] = useState('');
  const [sesi, setSesi] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [keluhan, setKeluhan] = useState('');

  // roles contract
  const checkRoles = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const contractRoles = new ethers.Contract(rolesAddress, rolesContractAbi.abi, signer);
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

  // user contract
  const handleAddUser = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
    const contractRoles = new ethers.Contract(rolesAddress, rolesContractAbi.abi, signer);
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();

    try {
      if (signerAddress === address) {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        await Promise.all([
          contract.addUser(nama, email, telepon, gender, ttl, true),
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
        await Promise.all([
          contract.updateUser(nama, email, telepon, gender, ttl, true),
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
      if (signerAddress === address) {
        const data = await contract.getUser(address);
        setWalletAddress(data[0]);
        setNama(data[1]);
        setTelepon(data[2]);
        setEmail(data[3]);
        setTtl(data[4]);
        setGender(data[5]);
        if (!data[1]) {
          setUser(false);
        } else {
          setUser(true);
        }
      }
    } catch (error) {
      setUser(false);
    }
  };

  // user contract for admin
  const handleAddUserAdmin = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
    const contractRoles = new ethers.Contract(rolesAddress, rolesContractAbi.abi, signer);
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();

    try {
      checkRoles();
      if ((signerAddress === address) && role === 'admin') {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        await Promise.all([
          contract.addUserAdmin(
            walletAddress,
            nama,
            email,
            telepon,
            gender,
            ttl,
            status,
          ),
          contractRoles.setRole(walletAddress, 'pasien'),
        ]);
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
  };
  const handleUpdateUserAdmin = async (e) => {
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
      checkRoles();
      if ((signerAddress === address) && role === 'admin') {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        await Promise.all([
          contract.updateUserAdmin(
            walletAddress,
            nama,
            email,
            telepon,
            gender,
            ttl,
            status,
          ),
          contractRoles.setRole(walletAddress, 'pasien'),
        ]);
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
  };
  const getAllDataUser = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();
    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
    // const contractRoles = new ethers.Contract(rolesAddress, rolesContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      if (signerAddress === address && (role === 'admin' || role === 'dokter')) {
        const data = await contract.getUserAdmin();
        setAllUser(data);
      }
    } catch (error) {
      alert('terjadi kesalahan');
    }
  };
  const handleAddDoctor = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
    const contractRoles = new ethers.Contract(rolesAddress, rolesContractAbi.abi, signer);
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();

    try {
      checkRoles();
      if ((signerAddress === address) && role === 'admin') {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        await Promise.all([
          contract.addDoctor(
            namaDokter,
            email,
            telepon,
            '',
            '',
            pendidikan,
            strNumber,
            category,
            img,
            walletAddress,
            status,
          ),
          contractRoles.setRole(walletAddress, 'dokter'),
        ]);
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
  };
  const handleUpdateDoctor = async (e) => {
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
      checkRoles();
      if ((signerAddress === address) && role === 'admin') {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        await Promise.all([
          contract.updateDoctor(
            namaDokter,
            email,
            telepon,
            '',
            '',
            pendidikan,
            strNumber,
            category,
            img,
            walletAddress,
            status,
          ),
        ]);
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
  };
  const getAllDoctor = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      const data = await contract.getDoctors();
      setAllDoctor(data);
    } catch (error) {
      alert('ada kesalahan');
    }
  };

  // registration contract
  const handleAddRegistration = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();
    // Panggil fungsi addRegistration pada kontrak
    try {
      checkRoles();
      if (address === signerAddress && (role === 'admin' || role === 'dokter' || role === 'pasien')) {
        const tx = await contract.addRegistration(
          address,
          nama,
          telepon,
          namaDokter,
          sesi,
          tanggal,
          keluhan,
          gender,
        );
        await tx.wait();
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
    // Setelah transaksi berhasil, reset nilai-nilai pada form
    setWalletAddress('');
    setNama('');
    setTelepon('');
    setNamaDokter('');
    setSesi('');
    setTanggal('');
    setKeluhan('');
    setGender('');
  };
  const getEvidanceRegistration = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();
    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      if (address === signerAddress) {
        const data = await contract.getRegistrationEvidence();
        const latestData = data[data.length - 1];
        setNama(latestData[0]);
        setTelepon(latestData[1]);
        setNamaDokter(latestData[2]);
        setSesi(latestData[3]);
        setTanggal(latestData[4]);
        setKeluhan(latestData[5]);
        setGender(latestData[6]);
        setWalletAddress(latestData[7]);
        if (latestData[5].length > 0) {
          setIsRegist(true);
        }
      }
    } catch (error) {
      setIsRegist(false);
    }
  };
  const getAllSession = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      if (address === signerAddress) {
        const slotBooked = await contract.getAllSesi();
        setSlot(slotBooked);
      }
    } catch (error) {
      alert('terjadi kesalahan');
    }
  };
  const getAllRegistration = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      if (address === signerAddress && (role === 'admin')) {
        const data = await contract.getAllRegistrations();
        setAllRegistration(data);
      }
    } catch (error) {
      setUser(false);
    }
  };
  const getRegistrationDoctor = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    const signerAddress = await signer.getAddress();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      getAllDoctor();
      if (address === signerAddress && (role === 'dokter')) {
        const doctor = allDoctor?.filter((dokter) => dokter.wallet === address);
        const filteredDoctor = doctor[0].nama;
        const data = await contract.getAllRegistrations();
        const filteredData = data.filter((pasien) => pasien
          .some((item) => item.namaDokter === filteredDoctor));
        setAllRegistration(filteredData);
      }
    } catch (error) {
      setUser(false);
    }
  };

  return (
    <ContractContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        loading,
        setLoading,
        user,
        role,
        setRole,
        slot,
        isRegist,
        walletAddress,
        setWalletAddress,
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
        namaDokter,
        setNamaDokter,
        sesi,
        setSesi,
        tanggal,
        setTanggal,
        keluhan,
        setKeluhan,
        pendidikan,
        setPendidikan,
        status,
        setStatus,
        strNumber,
        setStrNumber,
        category,
        setCategory,
        img,
        setImg,
        checkRoles,
        handleAddUser,
        handleUpdateUser,
        getDataUser,
        getAllDataUser,
        handleAddRegistration,
        getEvidanceRegistration,
        getAllRegistration,
        getRegistrationDoctor,
        getAllSession,
        handleAddUserAdmin,
        handleUpdateUserAdmin,
        handleAddDoctor,
        handleUpdateDoctor,
        getAllDoctor,
        allDoctor,
        setAllDoctor,
        allUser,
        setAllUser,
        allRegistration,
        setAllRegistration,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
