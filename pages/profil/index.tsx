import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavbarLogin from '../../components/navbar/login';
import Footer from '../../components/footer/index';
import User from '../../components/profil/user';
import Data from '../../components/profil/data';
import Button from '../../components/button/index';

export default function Profil() {
  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin profil />
      </nav>
      <main className="px-4 lg:px-16 my-28">
        <User name="Rani Meliyana Putri" role="pasien" username="ranimp" walletAddress="0x7c73d9eD23DDAd6353034F37" />
        <div className="flex justify-end mt-4 lg:mt-6">
          <Link href="/profil/update" className="w-32 lg:w-60 text-xs lg:text-base">
            <Button type="btn-normal" title="perbarui profil" />
          </Link>
        </div>
        <Data name="Rani Meliyana Putri" gender="perempuan" ttl="09/09/2009" email="rani@mail.com" phone="0987654321" address="jalan jendral sudirman" />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
