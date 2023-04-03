import {
  Fragment, useState, useContext, useEffect,
} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavbarLogin from '../../../../../components/navbar/login';
import Profil from '../../../../../components/dashboard/profil';
import Sidebar from '../../../../../components/dashboard/sidebar';
import Footer from '../../../../../components/footer/index';
import withAuth from '../../../../../lib/withAuth';
import { ContractContext } from '../../../../../lib/contractProvider';
import HasilKonsultasiDokter from '../../../../../components/dashboard-dokter/daftar-pasien/dok-hasil-konsultasi';
import UpdateKonsultasiDokter from '../../../../../components/dashboard-dokter/manajemen-hasil-konsultasi/dok-update-konsultasi';

function UpdateRiwayatKonsultasiDoctorPage() {
  const [active, setActive] = useState('daftar-pasien');
  const router = useRouter();
  const { walletAddress, index } = router.query;

  const {
    setIndex,
    getAllConsultation,
    allConsultation,
    getAllDoctor,
    allDoctor,
  } = useContext(ContractContext);

  const [riwayat, setRiwayat] = useState([]);
  const [detailRiwayat, setDetailRiwayat] = useState([]);
  const [address, setAddress] = useState('');

  useEffect(() => {
    getAllConsultation();
  }, [getAllConsultation]);

  useEffect(() => {
    setRiwayat(allConsultation?.filter((item) => item.some((data) => data
      .wallet === walletAddress)));
  }, [allConsultation, walletAddress]);

  useEffect(() => {
    const dataIndex = riwayat?.find((item) => item[0]);
    setDetailRiwayat(dataIndex);
    setIndex(index);
  }, [index, riwayat]);

  useEffect(() => {
    getAllDoctor();
    const loggedInUser = localStorage.getItem('address');
    const addressStorage = JSON.parse(loggedInUser);
    setAddress(addressStorage);
  }, []);

  const doctorData = allDoctor?.filter((dokter) => dokter.wallet === address);

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
              {active === 'daftar-pasien' && (
              <UpdateKonsultasiDokter
                wallet={walletAddress}
                name={detailRiwayat ? detailRiwayat[index]?.nama : null}
                doctor={detailRiwayat ? detailRiwayat[index]?.namaDokter : null}
                date={detailRiwayat ? detailRiwayat[index]?.tanggal : null}
                keluhan={detailRiwayat ? detailRiwayat[index]?.keluhan : null}
                diagnosa={detailRiwayat ? detailRiwayat[index]?.diagnosa : null}
                tekanan={detailRiwayat ? detailRiwayat[index]?.tensi : null}
                gula={detailRiwayat ? detailRiwayat[index]?.gula : null}
              />
              )}
              {active === 'hasil-konsultasi' && <HasilKonsultasiDokter />}
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

export default withAuth(UpdateRiwayatKonsultasiDoctorPage);
