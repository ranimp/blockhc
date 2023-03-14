import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractAbi from '../artifacts/contracts/user.sol/UserData.json';
import rolesContractAbi from '../artifacts/contracts/roles.sol/UserRoles.json';
import registContractAbi from '../artifacts/contracts/registration.sol/ConsultationRegist.json';

export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  // contract address
  // const userAddress = '0xE587868dB2eF7a6114029C703756894b00741b75';
  // const userAddress = '0xBd5AB6334C3be5aeD025341896d0CC15c14f04f1';
  const userAddress = '0xC5445a305aeD121849D3c162cf04164F5fe930DE';
  const rolesAddress = '0x143Cab622c54a7537841779b79856DD58bE584A8';
  const registrationAddress = '0x514eA966faafF547B700487a7A2Fe47ACB6a92d4';

  // getAllData
  const [allDoctor, setAllDoctor] = useState();

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
      if (!data[1]) {
        setUser(false);
      } else {
        setUser(true);
      }
    } catch (error) {
      setUser(false);
    }
  };

  // user contract for admin
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
    // Mendapatkan data registrasi
    try {
      checkRoles();
      if (signerAddress === address && roles === 'admin') {
        await contract.getUserAdmin();
      }
    } catch (error) {
      setUser(false);
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
      console.log(error);
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

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(contractAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      if (address === signerAddress && (roles === 'admin' || roles === 'dokter')) {
        await contract.getAllRegistrations();
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

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(contractAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      if (address === signerAddress && (roles === 'admin' || roles === 'dokter')) {
        await contract.getAllRegistrations();
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
      getEvidanceRegistration();
      checkRoles();
      getAllSession();
      getAllDoctor();
    }, 1500);
  }, []);

  return (
    <ContractContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        loading,
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
        handleAddDoctor,
        handleUpdateDoctor,
        getAllDoctor,
        allDoctor,
        setAllDoctor,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
