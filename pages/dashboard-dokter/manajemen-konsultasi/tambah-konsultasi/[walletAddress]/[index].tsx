import {
  Fragment, useState, useEffect, useContext,
} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavbarLogin from '../../../../../components/navbar/login';
import Profil from '../../../../../components/dashboard/profil';
import Sidebar from '../../../../../components/dashboard/sidebar';
import Footer from '../../../../../components/footer/index';
import DaftarPasienAdmin from '../../../../../components/dashboard-admin/manajemen-pasien/adm-daftar-pasien';
import withAuth from '../../../../../lib/withAuth';
import { ContractContext } from '../../../../../lib/contractProvider';
import TambahKonsultasiDokter from '../../../../../components/dashboard-dokter/manajemen-hasil-konsultasi/dok-tambah-konsultasi';

function RiwayatKonsultasiDokterPage() {
  const [active, setActive] = useState('hasil-konsultasi');
  const [address, setAddress] = useState('');
  const router = useRouter();
  const { walletAddress, index } = router.query;
  const {
    setWalletAddress,
    nama, setNama,
    namaDokter, setNamaDokter,
    tanggal, setTanggal,
    keluhan, setKeluhan,
    diagnosa, setDiagnosa,
    tensi, setTensi,
    gula, setGula,
    setIndex,
    handleAddConsultation,
    getAllConsultation,
    getAllDoctor,
    allDoctor,
    errors,
  } = useContext(ContractContext);

  useEffect(() => {
    getAllConsultation();
    setIndex(index);
  }, [getAllConsultation]);

  useEffect(() => {
    getAllDoctor();
    const loggedInUser = localStorage.getItem('address');
    const addressStorage = loggedInUser ? JSON.parse(loggedInUser) : '';
    setAddress(addressStorage);
  }, []);

  const doctorData = allDoctor?.filter((dokter: any) => dokter.wallet === address);

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin dashboard />
      </nav>
      <main className="px-4 lg:px-16 mt-28 flex flex-col min-h-screen justify-between">
        <div className="flex justify-start">
          <div className="w-1/9 md:w-1/3">
            <div className="hidden md:block">
              <Profil name={doctorData ? doctorData[0]?.nama : null} role="dokter" />
            </div>
            <Sidebar menu2={active === 'hasil-konsultasi' && true} onClickMenu1={() => router.push('/dashboard-dokter')} onClickMenu2={() => setActive('hasil-konsultasi')} menu1={active === 'daftar-pasien' && true} title2="manajemen hasil konsultasi" title1="daftar pasien" />
          </div>
          <div className="w-full pl-6 sm:pl-8 lg::pl-12 flex flex-col gap-4">
            <div className="flex gap-4 border-2 border-slate-300 w-full p-2 md:p-3 text-xs md:text-base rounded-md">
              <figure>
                <Image src="/icons/search.svg" alt="search" width={20} height={20} />
              </figure>
              <input type="text" placeholder="Pencarian" className="w-full focus:outline-none" />
            </div>
            <div>
              {active === 'manajemen-pasien' && <DaftarPasienAdmin />}
              {active === 'hasil-konsultasi' && (
              <TambahKonsultasiDokter
                wallet={setWalletAddress(walletAddress ? String(walletAddress) : '')}
                walletName="walletAddress"
                name={nama}
                nameName="nama"
                nameChange={(e) => setNama(e.target.value)}
                doctor={namaDokter}
                doctorName="namaDokter"
                doctorChange={(e) => setNamaDokter(e.target.value)}
                date={tanggal}
                dateName="tanggal"
                dateChange={(e) => setTanggal(e.target.value)}
                keluhan={keluhan}
                keluhanName="keluhan"
                keluhanChange={(e) => setKeluhan(e.target.value)}
                diagnosa={diagnosa}
                diagnosaName="diagnosa"
                diagnosaChange={(e) => setDiagnosa(e.target.value)}
                tekanan={tensi}
                tekananName="tensi"
                tekananChange={(e) => setTensi(e.target.value)}
                gula={gula}
                gulaName="gula"
                gulaChange={(e) => setGula(e.target.value)}
                onClick={handleAddConsultation}
                error={errors}
              />
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default withAuth(RiwayatKonsultasiDokterPage);
