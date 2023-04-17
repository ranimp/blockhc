/* eslint-disable no-plusplus */
import React, { createContext, useState, ReactNode } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import contractAbi from '../artifacts/contracts/user.sol/UserData.json';
import rolesContractAbi from '../artifacts/contracts/roles.sol/UserRoles.json';
import registContractAbi from '../artifacts/contracts/registration.sol/ConsultationRegist.json';
import consultContractAbi from '../artifacts/contracts/consultation.sol/ConsultationResult.json';
import validation from './validation';

type ContractProviderProps = {
  children: ReactNode;
};

type ContextValues = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  role: string | null;
  setRole: any;
  slot: any;
  isRegist: boolean;
  walletAddress: string;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
  nama: string;
  setNama: React.Dispatch<React.SetStateAction<string>>;
  telepon: string;
  setTelepon: React.Dispatch<React.SetStateAction<string>>;
  ttl: string;
  setTtl: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  namaDokter: string;
  setNamaDokter: React.Dispatch<React.SetStateAction<string>>;
  sesi: string;
  setSesi: React.Dispatch<React.SetStateAction<string>>;
  tanggal: string;
  setTanggal: React.Dispatch<React.SetStateAction<string>>;
  keluhan: string;
  setKeluhan: React.Dispatch<React.SetStateAction<string>>;
  pendidikan: string;
  setPendidikan: React.Dispatch<React.SetStateAction<string>>;
  status: any;
  setStatus: any;
  strNumber: string;
  setStrNumber: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  img: string | null;
  setImg: any;
  diagnosa: string;
  setDiagnosa: React.Dispatch<React.SetStateAction<string>>;
  tensi: string;
  setTensi: React.Dispatch<React.SetStateAction<string>>;
  gula: string;
  setGula: React.Dispatch<React.SetStateAction<string>>;
  index: any;
  setIndex: React.Dispatch<React.SetStateAction<any>>;
  checkRoles: () => Promise<void>;
  handleAddUser: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  handleUpdateUser: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  getDataUser: () => Promise<void>;
  getAllDataUser: () => Promise<void>;
  handleAddRegistration: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  getEvidanceRegistration: () => Promise<void>;
  getAllRegistration: () => Promise<void>;
  getRegistrationDoctor: () => Promise<void>;
  getAllSession: () => Promise<void>;
  handleAddUserAdmin: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  handleUpdateUserAdmin: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  handleAddDoctor: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  handleUpdateDoctor: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  getAllDoctor: () => Promise<void>;
  handleAddConsultation: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  handleUpdateConsultation: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  getConsultationPasien: () => Promise<void>;
  getAllConsultation: () => Promise<void>;
  allDoctor: any;
  setAllDoctor: React.Dispatch<React.SetStateAction<any | null>>;
  allUser: any;
  setAllUser: React.Dispatch<React.SetStateAction<any | null>>
  allRegistration: any,
  setAllRegistration: any,
  allConsultation: any,
  setAllConsultation: any,
  allPasien: any,
  setAllPasien : any,
  errors: any,
};

export const ContractContext = createContext<ContextValues>({} as ContextValues);

export const ContractProvider = ({ children }: ContractProviderProps) => {
  const router = useRouter();
  // contract address
  // const rolesAddress = '0x2c161963073Ba0d9f3930563d4E7B8C081a09d37';
  const rolesAddress = '0x61b213Cf581159A208a1D2DF8e98C5eAdc4DFbf6';
  // const userAddress = '0xf8Aa18d6620Cd256d4105862a7aBb73Ad843Afe1';
  const userAddress = '0xCBa94Ed3ecFb9Ab70C053a90BAfD637914D93903';
  // const registrationAddress = '0xcb13ecEc525796f8736446Ffc9206ddf9c083a58';
  const registrationAddress = '0x5210b961E215422C29C28a3dcE26FbE2f48e2830';
  // const consultationAddress = '0xecDbb16A89F61dFddc54a3bd0623D8458FcE91D4';
  const consultationAddress = '0x72F2dA42A6fe101D1E723232cDd47BE4213141bc';

  // getAllData
  const [allDoctor, setAllDoctor] = useState<any>();
  const [allUser, setAllUser] = useState<any>();
  const [allRegistration, setAllRegistration] = useState<any>();
  const [allConsultation, setAllConsultation] = useState<any>();
  const [allPasien, setAllPasien] = useState<any>();

  // condition
  const [user, setUser] = useState<boolean>(true);
  const [role, setRole] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isRegist, setIsRegist] = useState<boolean>(false);
  const [slot, setSlot] = useState<string>('');
  const [index, setIndex] = useState<string>('');
  const [errors, setErrors] = useState<any>({});

  // data user
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [nama, setNama] = useState<string>('');
  const [telepon, setTelepon] = useState<string>('');
  const [ttl, setTtl] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  // data dokter
  const [pendidikan, setPendidikan] = useState<string>('');
  const [strNumber, setStrNumber] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('');
  const [img, setImg] = useState<string>('');

  // data registrasi
  const [namaDokter, setNamaDokter] = useState<string>('');
  const [sesi, setSesi] = useState<string>('');
  const [tanggal, setTanggal] = useState<string>('');
  const [keluhan, setKeluhan] = useState<string>('');

  // data konsultasi
  const [diagnosa, setDiagnosa] = useState<string>('');
  const [tensi, setTensi] = useState<string>('');
  const [gula, setGula] = useState<string>('');

  // roles contract
  const checkRoles = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
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
  const handleAddUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      nama, email, telepon, gender, ttl,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
      const contractRoles = new ethers.Contract(rolesAddress, rolesContractAbi.abi, signer);
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();

      if (signerAddress === address) {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        const tx = await Promise.all([
          contract.addUser(nama, email, telepon, gender, ttl, true),
          contractRoles.setDefaultRole(),
        ]);
        alert('Transaksi anda sedang diproses');
        await tx[0].wait();
        await tx[1].wait();
        alert('Transaksi anda berhasil');
        router.back();
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      console.log(error);
      alert('Transaksi dibatalkan oleh pengguna');
    }
  };

  const handleUpdateUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      nama, email, telepon, gender, ttl,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();

      if (signerAddress === address) {
        const tx = await Promise.all([
          contract.updateUser(nama, email, telepon, gender, ttl, true),
        ]);
        alert('transaksi anda sedang diproses');
        await tx[0].wait();
        alert('transaksi anda berhasil');
        router.back();
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
    // setErrors(validation(values));
  };
  const getDataUser = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
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
  const handleAddUserAdmin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      walletAddress,
      nama,
      email,
      telepon,
      gender,
      ttl,
      status,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
      const contractRoles = new ethers.Contract(rolesAddress, rolesContractAbi.abi, signer);
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();
      checkRoles();
      if ((signerAddress === address) && role === 'admin') {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        const tx = await Promise.all([
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
        alert('transaksi anda sedang diproses');
        await tx[0].wait();
        await tx[1].wait();
        alert('transaksi anda berhasil');
        router.push('/profil');
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
    // setErrors(validation(values));
  };
  const handleUpdateUserAdmin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      walletAddress,
      nama,
      email,
      telepon,
      gender,
      ttl,
      status,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();
      checkRoles();
      if ((signerAddress === address) && role === 'admin') {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        const tx = await Promise.all([
          contract.updateUserAdmin(
            walletAddress,
            nama,
            email,
            telepon,
            gender,
            ttl,
            status,
          ),
        ]);
        alert('transaksi anda sedang diproses');
        await tx[0].wait();
        alert('transaksi anda berhasil');
        router.push('/profil');
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
    // setErrors(validation(values));
  };
  const getAllDataUser = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
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
      console.log('getAllDataUser', error);
      alert('terjadi kesalahan');
    }
  };
  const handleAddDoctor = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      namaDokter,
      email,
      telepon,
      pendidikan,
      strNumber,
      category,
      img,
      walletAddress,
      status,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
      const contractRoles = new ethers.Contract(rolesAddress, rolesContractAbi.abi, signer);
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();
      checkRoles();
      if ((signerAddress === address) && role === 'admin') {
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        const [tx1, tx2] = await Promise.all([
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
        alert('transaksi anda sedang diproses');
        await Promise.all([tx1.wait(), tx2.wait()]);
        alert('transaksi anda berhasil');
        router.back();
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      console.log(error);
      alert('Transaksi dibatalkan oleh pengguna');
    }
    // setErrors(validation(values));
  };
  const handleUpdateDoctor = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      namaDokter,
      email,
      telepon,
      pendidikan,
      strNumber,
      category,
      img,
      walletAddress,
      status,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(userAddress, contractAbi.abi, signer);
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();
      checkRoles();
      if ((signerAddress === address) && role === 'admin') {
        console.log('masuk');
        // Kirim dua transaksi sekaligus dan tunggu hingga keduanya selesai dieksekusi
        const tx = await contract.updateDoctor(
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
        );
        alert('transaksi anda sedang diproses');
        await tx.wait();
        alert('transaksi anda berhasil');
        router.back();
      } else {
        alert('Gunakan akun yang digunakan saat login.');
      }
    } catch (error) {
      console.log(error);
      alert('Transaksi dibatalkan oleh pengguna');
    }
    // setErrors(validation(values));
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
      console.log('getAllDoctor', error);
      alert('ada kesalahan');
    }
  };

  // registration contract
  const handleAddRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      nama,
      telepon,
      namaDokter,
      sesi,
      tanggal,
      keluhan,
      gender,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();
      // Panggil fungsi addRegistration pada kontrak
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
          true,
        );
        alert('transaksi anda sedang diproses');
        await tx.wait();
        alert('transaksi anda berhasil');
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
      alert('Transaksi dibatalkan oleh pengguna');
    }
    // setErrors(validation(values));
  };
  const getEvidanceRegistration = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
    const signerAddress = await signer.getAddress();
    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      if (address === signerAddress) {
        const data = await contract.getRegistrationEvidence();
        const latestData = data[data.length - 1];
        if (latestData[8] === true) {
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
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
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
      console.log('getAllSession', error);
      alert('terjadi kesalahan');
    }
  };
  const getAllRegistration = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
    const signerAddress = await signer.getAddress();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      if (address === signerAddress && (role === 'admin')) {
        const data = await contract.getAllRegistrations();
        const filteredData = data.flat().filter((item: any) => item.status === true);
        setAllRegistration(filteredData);
        setAllPasien(data);
      }
    } catch (error) {
      console.log('getAllRegistration', error);
      alert('terjadi kesalahan');
    }
  };
  const getRegistrationDoctor = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
    const signerAddress = await signer.getAddress();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(registrationAddress, registContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      getAllDoctor();
      if (address === signerAddress && (role === 'dokter')) {
        const doctor = allDoctor?.filter((dokter: any) => dokter.wallet === address);
        const filteredDoctor = doctor[0].nama;
        const data = await contract.getAllRegistrations();
        const filteredData = data.filter((pasien: any) => pasien
          .some((item: any) => item.namaDokter === filteredDoctor));
        const displayedData = filteredData.flat().filter((item: any) => item.status === true);
        setAllRegistration(displayedData);
        setAllPasien(filteredData);
      }
    } catch (error) {
      console.log('getRegistrationDoctor', error);
      alert('terjadi kesalahan');
    }
  };

  // consultation contract
  const handleAddConsultation = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      walletAddress,
      nama,
      namaDokter,
      tanggal,
      keluhan,
      diagnosa,
      tensi,
      gula,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(consultationAddress, consultContractAbi.abi, signer);
      const contractRegist = new ethers.Contract(
        registrationAddress,
        registContractAbi.abi,
        signer,
      );
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();
      // Panggil fungsi addRegistration pada kontrak
      checkRoles();
      if (address === signerAddress && (role === 'admin' || role === 'dokter')) {
        const [addConsultationTx, updateRegistrationTx] = await Promise.all([
          contract.addConsultation(
            walletAddress,
            nama,
            namaDokter,
            tanggal,
            keluhan,
            diagnosa,
            tensi,
            gula,
          ),
          contractRegist.updateRegistration(
            walletAddress,
            index,
            nama,
            '',
            namaDokter,
            '',
            tanggal,
            keluhan,
            gender,
            false,
          ),
        ]);
        alert('transaksi anda sedang diproses');
        await Promise.all([addConsultationTx.wait(), updateRegistrationTx.wait()]);
        alert('transaksi anda berhasil');
        router.back();
      }
    } catch (error) {
      console.log(error);
      alert('Transaksi dibatalkan oleh pengguna');
    }
  };
  const handleUpdateConsultation = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errorsMsg = validation({
      walletAddress,
      nama,
      namaDokter,
      tanggal,
      keluhan,
      diagnosa,
      tensi,
      gula,
    });
    if (Object.keys(errorsMsg).length > 0) {
      setErrors(errorsMsg);
      return;
    }
    try {
      // Buatlah sebuah provider yang terhubung ke Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();

      // Buat instance kontrak yang terhubung ke provider
      const contract = new ethers.Contract(consultationAddress, consultContractAbi.abi, signer);
      const loggedInUser = localStorage.getItem('address');
      const address = loggedInUser ? JSON.parse(loggedInUser) : '';
      const signerAddress = await signer.getAddress();
      // Panggil fungsi addRegistration pada kontrak
      checkRoles();
      if (address === signerAddress && (role === 'admin' || role === 'dokter')) {
        const tx = await contract.updateConsultation(
          walletAddress,
          index,
          nama,
          namaDokter,
          tanggal,
          keluhan,
          diagnosa,
          tensi,
          gula,
        );
        alert('transaksi anda sedang diproses');
        await tx.wait();
        alert('transaksi anda berhasil');
        router.back();
      }
    } catch (error) {
      alert('Transaksi dibatalkan oleh pengguna');
    }
    // setErrors(validation(values));
  };
  const getConsultationPasien = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
    const signerAddress = await signer.getAddress();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(consultationAddress, consultContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      if (address === signerAddress) {
        const data = await contract.getConsultationsPasien();
        setAllConsultation(data);
      }
    } catch (error) {
      console.log('getConsultationPasien', error);
      alert('terjadi kesalahan');
    }
  };
  const getAllConsultation = async () => {
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = loggedInUser ? JSON.parse(loggedInUser) : '';
    const signerAddress = await signer.getAddress();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(consultationAddress, consultContractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      checkRoles();
      if (address === signerAddress && (role === 'admin' || role === 'dokter')) {
        const data = await contract.getAllConsultations();
        setAllConsultation(data);
      }
    } catch (error) {
      console.log('getAllConsultation', error);
      alert('terjadi kesalahan');
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
        diagnosa,
        setDiagnosa,
        tensi,
        setTensi,
        gula,
        setGula,
        index,
        setIndex,
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
        handleAddConsultation,
        handleUpdateConsultation,
        getConsultationPasien,
        getAllConsultation,
        allDoctor,
        setAllDoctor,
        allUser,
        setAllUser,
        allRegistration,
        setAllRegistration,
        allConsultation,
        setAllConsultation,
        allPasien,
        setAllPasien,
        errors,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
