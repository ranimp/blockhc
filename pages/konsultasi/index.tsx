import { useState } from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import contractAbi from '../../artifacts/contracts/registration.sol/ConsultationRegist.json';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import NavbarLogin from '../../components/navbar/login';

const contractAddress = '0x44798f719A26DA247c7097D954f7b32340dF0b7F';

export default function MyForm() {
  const [walletAddress, setWalletAddress] = useState('');
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [namaDokter, setNamaDokter] = useState('');
  const [sesi, setSesi] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [keluhan, setKeluhan] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
    const loggedInUser = localStorage.getItem('address');
    const address = JSON.parse(loggedInUser);
    // Panggil fungsi addRegistration pada kontrak
    try {
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

  const getData = async (e) => {
    e.preventDefault();
    // Buatlah sebuah provider yang terhubung ke Alchemy
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    // Buat instance kontrak yang terhubung ke provider
    const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
    // Mendapatkan data registrasi
    const registrations = await contract.getAllRegistrations();
    console.log(registrations);
  };

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <div>
        <nav>
          <NavbarLogin konsultasi />
        </nav>
        <main className="px-4 lg:px-16 my-36 min-h-screen">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-7">
              <div className="lg:col-span-3">
                <div className="mb-4">
                  <h1 className="text-2xl lg:text-4xl font-bold">
                    FORM PENDAFTARAN KONSULTASI
                  </h1>
                  <h3 className="text-base lg:text-lg font-bold mt-5 lg:mt-10">Silahkan isi form singkat di samping dan klik “Kirim”</h3>
                  <p className="text-xs lg:text-sm mt-5">*Privasi dan kerahasiaanmu aman dalam lindungan Kode Etik Kedokteran.</p>
                  <p>
                    Tes tampilkan disini nanti :
                    {' '}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1" />
              <div className="col-span-1 lg:col-span-3 border-4 border-medium-blue rounded-lg">
                <form className="w-full px-4 lg:px-12 py-8">
                  {/* name */}
                  <div>
                    <p className="label text-sm font-bold text-black block">
                      Nama Lengkap
                    </p>
                    <input
                      type="text"
                      name="nama"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Enter Your Name"
                    />
                  </div>

                  {/* gender */}
                  <div className="mt-4">
                    <p className="label text-sm font-bold text-black block">
                      Jenis Kelamin
                    </p>
                    <label className="inline-flex items-center label text-sm font-bold text-black" htmlFor="gender">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="laki-laki"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <p className="ml-2 text-xs">Laki-laki</p>
                    </label>
                    <label className="inline-flex items-center ml-4 label text-sm font-bold text-black" htmlFor="gender">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="perempuan"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <p className="ml-2 text-xs">Perempuan</p>
                    </label>
                  </div>

                  {/* phone number */}
                  <div className="mt-3">
                    <p className="label text-sm font-bold text-black block">
                      Nomor Telepon
                    </p>
                    <input
                      type="tel"
                      name="telepon"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      value={telepon}
                      onChange={(e) => setTelepon(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>

                  {/* Dokter */}
                  <div className="mt-4">
                    <p className="label text-sm font-bold text-black block">
                      Pilih Dokter
                    </p>
                    <select
                      name="dokter"
                      id="dokter"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      onChange={(e) => setNamaDokter(e.target.value)}
                    >
                      <option value="Drg. Rio Dewantara">Drg. Rio Dewantara</option>
                      <option value="Dr. Andini Putri">Dr. Andini Putri</option>
                    </select>
                  </div>

                  {/* Antrian */}
                  <div className="mt-4">
                    <p className="label text-sm font-bold text-black block">
                      Pilih Sesi
                    </p>
                    <select
                      name="sesi"
                      id="sesi"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      onChange={(e) => setSesi(e.target.value)}
                    >
                      <option value="09.00 - 10.00">09.00 - 10.00</option>
                      <option value="10.00 - 11.00">10.00 - 11.00</option>
                    </select>
                  </div>

                  {/* date */}
                  <div className="mt-3">
                    <p className="label text-sm font-bold text-black block">
                      Pilih Tanggal Konsultasi
                    </p>
                    <input
                      type="date"
                      name="tanggal"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      value={tanggal}
                      onChange={(e) => setTanggal(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>

                  {/* keluhan */}
                  <div className="mt-3">
                    <p
                      className="label text-sm lg:text-sm font-bold text-black block font-montserrat"
                    >
                      Keluhan
                    </p>
                    <textarea
                      id="message"
                      name="message"
                      value={keluhan}
                      onChange={(e) => setKeluhan(e.target.value)}
                      placeholder="Write a message..."
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue h-56 text-sm outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  {/* submit */}
                  <div className="w-full">
                    <Button type="btn-normal" title="Kirim" onClick={handleSubmit} />
                  </div>
                  <div className="w-full mt-2">
                    <Button type="btn-normal" title="Ambil" onClick={getData} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
