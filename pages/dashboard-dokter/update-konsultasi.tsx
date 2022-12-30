import { Fragment, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Image from 'next/image';
import NavbarLogin from './../../components/navbar/login';
import Profil from './../../components/dashboard/profil';
import Footer from './../../components/footer/index';
import Sidebar from './../../components/dashboard/sidebar';
import DaftarPasienDokter from './../../components/dashboard-dokter/dok-daftar-pasien';
import UpdateKonsultasiDokter from './../../components/dashboard-dokter/dok-update-konsultasi';

export default function UpdateKonsultasi() {
  const router = useRouter()
  const [active, setActive] = useState('hasil-konsultasi');
  return (
    <Fragment>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin dashboard={true} />
      </nav>
      <main className="px-4 lg:px-16 mt-28 flex flex-col min-h-screen justify-between">
        <div className="flex justify-start">
          <div className="w-1/9 md:w-1/3">
            <div className="hidden md:block">
              <Profil name="Rani Meliyana Putri" role="dokter" />
            </div>
            <Sidebar menu2={active === 'hasil-konsultasi' && true} onClickMenu1={() => router.push('/dashboard-dokter')} onClickMenu2={() => setActive('hasil-konsultasi')} menu1={active === 'daftar-pasien' && true} title2="manajemen hasil konsultasi" title1="daftar pasien" />
          </div>
          <div className="w-full pl-6 sm:pl-8 lg::pl-12 flex flex-col gap-4">
            <div className="flex gap-4 border-2 border-slate-300 w-full p-2 md:p-3 text-xs md:text-base rounded-md">
              <figure>
                <Image src="/icons/search.svg" alt="search" width={20} height={20} />
              </figure>
              <input type="text" placeholder="Pencarian" className="w-full focus:outline-none"/>
            </div>
            <div>
              {active === 'daftar-pasien' && <DaftarPasienDokter />} 
              {active === 'hasil-konsultasi' && <UpdateKonsultasiDokter /> }
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  )
}