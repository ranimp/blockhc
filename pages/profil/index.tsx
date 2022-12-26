import { Fragment } from 'react';
import NavbarLogin from './../../components/navbar/login';
import Head from 'next/head';
import Footer from './../../components/footer/index';
import User from './../../components/profil/user';
import Data from './../../components/profil/data';
import Button from './../../components/button/index';
import Link from 'next/link';

export default function Profil() {
  return (
    <Fragment>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin profil={true} />
      </nav>
      <main className="px-4 lg:px-16 my-28">
        <User />
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
    </Fragment>
  )
}