import { Fragment, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import NavbarLogin from './../../components/navbar/login';
import Footer from './../../components/footer/index';
import Profil from './../../components/dashboard/profil';
import Sidebar from './../../components/dashboard/sidebar';
import Search from './../../components/dokter/search';
import Button from './../../components/button/index';
import Image from 'next/image';
import DetailRiwayat from './../../components/dashboard/detail-riwayat';
import BuktiPendaftaran from './../../components/dashboard/bukti-pendaftaran';

export default function DetailKonsultasi() {
  const router = useRouter()
  const [active, setActive] = useState('riwayat');
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
              <Profil name="Rani Meliyana Putri" role="pasien" />
            </div>
            <Sidebar riwayat={active === 'riwayat' && true} onClickBukti={() => setActive('bukti')} onClickRiwayat={() => router.push('/dashboard')} bukti={active === 'bukti' && true} />
          </div>
          <div className="w-full pl-6 sm:pl-8 lg::pl-12 flex flex-col gap-4">
            <div className="flex gap-4 border-2 border-slate-300 w-full p-2 md:p-3 text-xs md:text-base rounded-md">
              <figure>
                <Image src="/icons/search.svg" alt="search" width={20} height={20} />
              </figure>
              <input type="text" placeholder="Pencarian" className="w-full focus:outline-none"/>
            </div>
            <div>
              {active === 'riwayat' && <DetailRiwayat name="Rani Meliyana Putri" doctor="dr. rani" cat="Umum" keluhan="Batuk, pilek, demam" diagnosa="Pasien terindikasi covid-19. Pasien dirujuk ke rumah sakit x untuk penanganan lebih lanjut." date="12/12/2022" />}
              {active === 'bukti' && <BuktiPendaftaran name="Rani Meliyana Putri" doctor="Dr. Rani" cat="umum" keluhan="batuk, pilek, demam" date="12/12/2022" time="09.00" antri="5" trx="0xadfabb0c86b6523ac4a00ba78ebb04532ff863bd2cd292fa8f6c570e0b57f8b7" />}
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