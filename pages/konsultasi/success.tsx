import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';

const Success = () => (
  <>
    <Head>
      <title>Blockchain Health Care</title>
    </Head>
    <nav>
      <Navbar konsultasi />
    </nav>
    <main className="my-28">
      <div className="flex flex-col items-center justify-center w-11/12 bg-white mx-auto py-8 border-2 border-medium-blue rounded-3xl">
        <h1 className="font-bold text-lg lg:text-2xl text-center">Proses pendaftaranmu sudah berhasil! </h1>
        <Image src="/images/success.svg" alt="success" width={480} height={100} />
        <p className="text-xs lg:text-lg text-center mt-5 px-2">Jangan lupa datang sesuai jadwal dengan membawa </p>
        <p className="text-xs lg:text-lg text-center mb-5 px-2">bukti pendaftaran yang ada di halaman dashboard ya :D</p>
        <Link href="/dashboard">
          <Button type="btn-wide-sm" title="Profil saya" />
        </Link>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Success;
