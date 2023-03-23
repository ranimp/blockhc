import {
  Fragment, useState, useContext, useEffect,
} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavbarLogin from '../../../components/navbar/login';
import Footer from '../../../components/footer/index';
import Profil from '../../../components/dashboard/profil';
import Sidebar from '../../../components/dashboard/sidebar';
import DetailRiwayat from '../../../components/dashboard-pasien/detail-riwayat';
import BuktiPendaftaran from '../../../components/dashboard-pasien/bukti-pendaftaran';
import withAuth from '../../../lib/withAuth';
import Loading from '../../../components/loading/index';
import { ContractContext } from '../../../lib/contractProvider';

function DetailKonsultasi() {
  const [active, setActive] = useState('riwayat');
  const router = useRouter();
  const {
    user, loading, role, nama, namaDokter, keluhan, tanggal,
    sesi, getEvidanceRegistration, getConsultationPasien,
    allConsultation,
  } = useContext(ContractContext);
  const { index } = router.query;

  useEffect(() => {
    getConsultationPasien();
  });

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
                      {active === 'riwayat' && (
                      <DetailRiwayat
                        name={allConsultation ? allConsultation[index]?.nama : null}
                        doctor={allConsultation ? allConsultation[index]?.namaDokter : null}
                        keluhan={allConsultation ? allConsultation[index]?.keluhan : null}
                        diagnosa={allConsultation ? allConsultation[index]?.diagnosa : null}
                        date={allConsultation ? allConsultation[index]?.tanggal : null}
                        tekanan={allConsultation ? allConsultation[index]?.tensi : null}
                        gula={allConsultation ? allConsultation[index]?.gula : null}
                      />
                      )}
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
