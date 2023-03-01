import { Fragment, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import Link from 'next/link';
import contractAbi from '../../artifacts/contracts/user.sol/UserData.json';
import rolesContractAbi from '../../artifacts/contracts/roles.sol/UserRoles.json';
import NavbarLogin from '../../components/navbar/login';
import Footer from '../../components/footer/index';
import User from '../../components/profil/user';
import Data from '../../components/profil/data';
import Button from '../../components/button/index';
import withAuth from '../../lib/withAuth';
import TambahData from '../../components/profil/tambah-data';

const contractAddress = '0xE587868dB2eF7a6114029C703756894b00741b75';
const rolesContractAddress = '0x143Cab622c54a7537841779b79856DD58bE584A8';

function Profil() {
  const [user, setUser] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [ttl, setTtl] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
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

  const getData = async () => {
    // Buatlah sebuah provider yang terhubung ke Alchemy
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
    // Mendapatkan data registrasi
    try {
      const data = await contract.getUser(address);
      setWalletAddress(data[0]);
      setNama(data[1]);
      setTelepon(data[2]);
      setEmail(data[3]);
      setTtl(data[4]);
      setGender(data[5]);
      setUser(true);
    } catch (error) {
      setUser(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin profil />
      </nav>
      {user
        ? (
          <main className="px-4 lg:px-16 my-28">
            <User name={nama} role="pasien" walletAddress={walletAddress} />
            <div className="flex justify-end mt-4 lg:mt-6">
              <Link href="/profil/update" className="w-32 lg:w-60 text-xs lg:text-base">
                <Button type="btn-normal" title="perbarui profil" />
              </Link>
            </div>
            <Data name={nama} gender={gender} ttl={ttl} email={email} phone={telepon} />
          </main>
        )
        : (
          <main className="px-4 lg:px-16 my-40">
            <User name="No data" />
            <TambahData
              name={nama}
              gender={gender}
              ttl={ttl}
              email={email}
              phone={telepon}
              nameChange={(e) => setNama(e.target.value)}
              genderChange={(e) => setGender(e.target.value)}
              ttlChange={(e) => setTtl(e.target.value)}
              emailChange={(e) => setEmail(e.target.value)}
              phoneChange={(e) => setTelepon(e.target.value)}
              nameName="nama"
              genderName="gender"
              ttlName="ttl"
              emailName="email"
              phoneName="telepon"
              maleValue="laki-laki"
              femaleValue="perempuan"
            />
            <div className="mt-4">
              <Button type="btn-normal" title="Tambah data" onClick={handleSubmit} />
            </div>
          </main>
        )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default withAuth(Profil);
