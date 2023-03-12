import {
  Fragment, useEffect, useContext, useState,
} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from '../../../components/navbar/index';
import Footer from '../../../components/footer/index';
import Button from '../../../components/button/index';
import { AuthContext } from '../../../lib/auth';
import NavbarLogin from '../../../components/navbar/login';
import { ContractContext } from '../../../lib/contractProvider';

export default function DetailDokter() {
  const { isLogged, loginStatus } = useContext(AuthContext);
  const {
    getAllDoctor,
    allDoctor,
  } = useContext(ContractContext);

  const router = useRouter();
  const { walletAddress } = router.query;
  const [doctorData, setDoctorData] = useState(
    allDoctor?.filter((dokter) => dokter[7] === walletAddress),
  );

  useEffect(() => {
    getAllDoctor();
    setDoctorData(allDoctor?.filter((dokter) => dokter[7] === walletAddress));
  }, []);

  useEffect(() => {
    loginStatus();
  }, []);
  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        {isLogged
          ? <NavbarLogin dokter /> : <Navbar dokter />}
      </nav>
      <main className="px-4 lg:px-32 my-36 min-h-screen mx-auto">
        <h2 className=" text-medium-blue text-2xl md:text-4xl font-medium mb-4 md:mb-8">{doctorData ? doctorData[0][0] : null}</h2>
        <div className="flex gap-8 flex-wrap md:flex-nowrap">
          <figure>
            <Image src="/images/doctor.png" alt="founder" width={360} height={100} className="lg:hidden" />
            <Image src="/images/doctor.png" alt="founder" width={480} height={100} className="hidden lg:block" />
          </figure>
          <div className="flex flex-col gap-4 lg:gap-8">
            <h4 className="font-medium text-lg lg:text-xl">Dokter Umum</h4>
            <div>
              <p className="flex mb-2 gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                Riwayat Pendidikan:
              </p>
              <p>
                {' '}
                {doctorData ? doctorData[0][5] : null}
                {' '}
              </p>
            </div>
            <div>
              <p className="flex mb-2 gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>

                Nomor STR:
                {' '}
              </p>
              <p>
                {' '}
                {doctorData ? doctorData[0][6] : null}
              </p>
            </div>
            <Link href="/konsultasi" className="flex justify-center lg:justify-start">
              <Button type="btn-wide-sm" title="Registrasi Sekarang" />
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
