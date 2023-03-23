import { Fragment, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavbarLogin from '../../components/navbar/login';
import Footer from '../../components/footer/index';
import Profil from '../../components/dashboard/profil';
import Sidebar from '../../components/dashboard/sidebar';
import DetailRiwayat from '../../components/dashboard-pasien/detail-riwayat';
import BuktiPendaftaran from '../../components/dashboard-pasien/bukti-pendaftaran';
import withAuth from '../../lib/withAuth';
import Loading from '../../components/loading/index';

function DetailKonsultasi() {
  const [active, setActive] = useState('riwayat');
  const {
    user, loading, role, nama, namaDokter, keluhan, tanggal,
    sesi, getEvidanceRegistration,
  } = useContext(ContractContext);

  useEffect(() => {
    getEvidanceRegistration();
  }, []);
  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <div>
        <nav>
          <NavbarLogin dashboard />
        </nav>
        {loading
          ? <Loading />
          : !user ? (
            <main className="px-4 lg:px-16 my-64">
              <div className="mt-4 flex flex-col items-center justify-center ">
                <p className="text-xl lg:text-3xl text-center">Mohon isi data diri anda terlebih dahulu</p>
              </div>
            </main>
          )
            : (
              <main className="px-4 lg:px-16 mt-28 flex flex-col min-h-screen justify-between">
                <div className="flex justify-start">
                  <div className="w-1/9 md:w-1/3">
                    <div className="hidden md:block">
                      <Profil name={nama} role={role} />
                    </div>
                    <Sidebar menu2={active === 'riwayat' && true} onClickMenu1={() => setActive('bukti')} onClickMenu2={() => router.push('/dashboard')} menu1={active === 'bukti' && true} title2="Riwayat Hasil Konsultasi" title1="Bukti Pendaftaran" />
                  </div>
                  <div className="w-full pl-6 sm:pl-8 lg::pl-12 flex flex-col gap-4">
                    <div className="flex gap-4 border-2 border-slate-300 w-full p-2 md:p-3 text-xs md:text-base rounded-md">
                      <figure>
                        <Image src="/icons/search.svg" alt="search" width={20} height={20} />
                      </figure>
                      <input type="text" placeholder="Pencarian" className="w-full focus:outline-none" />
                    </div>
                    <div>
                      {active === 'riwayat' && <DetailRiwayat name="Rani Meliyana Putri" doctor="dr. rani" cat="Umum" keluhan="Batuk, pilek, demam" diagnosa="Pasien terindikasi covid-19. Pasien dirujuk ke rumah sakit x untuk penanganan lebih lanjut." date="12/12/2022" />}
                      {active === 'bukti' && <BuktiPendaftaran name={nama} doctor={namaDokter} keluhan={keluhan} date={tanggal} sesi={sesi} />}
                    </div>
                  </div>
                </div>
              </main>
            )}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default withAuth(DetailKonsultasi);
