import {
  Fragment, useState, useContext, useEffect,
} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavbarLogin from '../../../../components/navbar/login';
import Profil from '../../../../components/dashboard/profil';
import Sidebar from '../../../../components/dashboard/sidebar';
import HasilKonsultasiAdmin from '../../../../components/dashboard-admin/manajemen-hasil-konsultasi/adm-hasil-konsultasi';
import DaftarDokterAdmin from '../../../../components/dashboard-admin/manajemen-dokter/adm-daftar-dokter';
import Footer from '../../../../components/footer/index';
import RiwayatKonsultasiAdmin from '../../../../components/dashboard-admin/manajemen-pasien/adm-riwayat-pasien';
import Button from '../../../../components/button/index';
import withAuth from '../../../../lib/withAuth';
import { ContractContext } from '../../../../lib/contractProvider';

function RiwayatKonsultasiAdminPage() {
  const [active, setActive] = useState('manajemen-pasien');
  const router = useRouter();
  const { walletAddress } = router.query;
  const {
    getAllConsultation,
    allConsultation,
  } = useContext(ContractContext);

  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    getAllConsultation();
  }, []);

  useEffect(() => {
    setRiwayat(allConsultation?.filter((item) => item.some((data) => data
      .wallet === walletAddress)));
  }, [allConsultation, walletAddress]);

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
              <Profil name="Admin" role="admin" />
            </div>
            <Sidebar menu3Show onClickMenu1={() => router.push('/dashboard-admin')} menu1={active === 'manajemen-pasien' && true} title1="manajemen pasien" onClickMenu2={() => setActive('hasil-konsultasi')} menu2={active === 'hasil-konsultasi' && true} title2="manajemen hasil konsultasi" onClickMenu3={() => setActive('manajemen-dokter')} menu3={active === 'manajemen-dokter' && true} title3="manajemen dokter" />
          </div>
          <div className="w-full pl-6 sm:pl-8 lg::pl-12 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 border-2 border-slate-300 w-full p-2 text-xs md:text-base rounded-md">
                <figure>
                  <Image src="/icons/search.svg" alt="search" width={20} height={20} />
                </figure>
                <input type="text" placeholder="Pencarian" className="w-full focus:outline-none" />
              </div>
              {active === 'manajemen-pasien' && (
              <Link href="/dashboard-admin/manajemen-pasien/tambah-pasien" className="text-xs lg:text-base w-56 md:w-64">
                <Button type="btn-normal" title="+ tambah pasien" />
              </Link>
              )}
              {active === 'manajemen-dokter' && (
              <Link href="/dashboard-admin/manajemen-dokter/tambah-dokter" className="text-xs lg:text-base w-56 md:w-64">
                <Button type="btn-normal" title="+ tambah dokter" />
              </Link>
              )}
            </div>
            <div>
              {active === 'manajemen-pasien' && <RiwayatKonsultasiAdmin datas={riwayat ? riwayat[0] : null} />}
              {active === 'hasil-konsultasi' && <HasilKonsultasiAdmin />}
              {active === 'manajemen-dokter' && <DaftarDokterAdmin />}
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

export default withAuth(RiwayatKonsultasiAdminPage);
