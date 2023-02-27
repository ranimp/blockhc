import { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import { ethers } from 'ethers';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import NavbarLogin from '../../components/navbar/login';
import withAuth from '../../lib/withAuth';

function Konsultasi() {
  const abi = [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_rolesContractAddress',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'accountsWithRegistrations',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_wallet',
          type: 'address',
        },
        {
          internalType: 'string',
          name: '_nama',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_telepon',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_namaDokter',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_sesi',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_tanggal',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_keluhan',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_gender',
          type: 'string',
        },
      ],
      name: 'addRegistration',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'offset',
          type: 'uint256',
        },
      ],
      name: 'getAllRegistrations',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'nama',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'telepon',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'namaDokter',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'sesi',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'tanggal',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'keluhan',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'gender',
              type: 'string',
            },
            {
              internalType: 'address',
              name: 'wallet',
              type: 'address',
            },
          ],
          internalType: 'struct ConsultationRegist.Data[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRegistrationEvidence',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'nama',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'telepon',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'namaDokter',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'sesi',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'tanggal',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'keluhan',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'gender',
              type: 'string',
            },
            {
              internalType: 'address',
              name: 'wallet',
              type: 'address',
            },
          ],
          internalType: 'struct ConsultationRegist.Data[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'registrationCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'registrations',
      outputs: [
        {
          internalType: 'string',
          name: 'nama',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'telepon',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'namaDokter',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'sesi',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'tanggal',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'keluhan',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'gender',
          type: 'string',
        },
        {
          internalType: 'address',
          name: 'wallet',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'roles',
      outputs: [
        {
          internalType: 'contract UserRoles',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ];

  const contractAddress = '0x263B0EB19F6fB1C80741D6B5A9b66Ac4ad8d83cd';

  const [form, setForm] = useState({
    nama: '',
    telepon: '',
    namaDokter: '',
    sesi: '',
    tanggal: '',
    keluhan: '',
    gender: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Memproses data dari form dan membuat objek data
    const data = {
      nama: form.nama,
      telepon: form.telepon,
      namaDokter: 'Dr.rio',
      sesi: 'pagi',
      tanggal: '09-09-2020',
      keluhan: 'pusing',
      gender: 'perempuan',
    };

    const walletAddress = localStorage.getItem('address');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Kirim data ke kontrak
    const contract = new ethers.Contract(contractAddress, abi, signer).connect(
      ethers.provider.getSigner(walletAddress),
    );

    await contract.addRegistration(
      walletAddress,
      data.nama,
      data.telepon,
      data.namaDokter,
      data.sesi,
      data.tanggal,
      data.keluhan,
      data.gender,
    );

    await tx.wait();
    console.log('Transaksi berhasil');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
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
                <form className="w-full px-4 lg:px-12 py-8" onSubmit={handleSubmit}>
                  {/* name */}
                  <div>
                    <p className="label text-sm font-bold text-black block">
                      Nama Lengkap
                    </p>
                    <input
                      type="text"
                      name="nama"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      onChange={handleChange}
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
                      />
                      <p className="ml-2 text-xs">Laki-laki</p>
                    </label>
                    <label className="inline-flex items-center ml-4 label text-sm font-bold text-black" htmlFor="gender">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
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
                      onChange={handleChange}
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
                    >
                      <option value="Drg. Rio Dewantara">Drg. Rio Dewantara</option>
                    </select>
                  </div>

                  {/* Antrian */}
                  <div className="mt-4">
                    <p className="label text-sm font-bold text-black block">
                      Pilih Sesi
                    </p>
                    <select
                      name="dokter"
                      id="dokter"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
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
                      name="date"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      // value={value.date}
                      // onChange={handleChange}
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
                      // value={value.symptom}
                      // onChange={handleChange}
                      placeholder="Write a message..."
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue h-56 text-sm outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  {/* submit */}
                  <div className="w-full">
                    <button type="submit">Kirim</button>
                  </div>
                  <div className="w-full mt-2">
                    <Button type="btn-normal" title="Ambil" />
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

export default withAuth(Konsultasi);
