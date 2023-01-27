import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/button/index';

export default function Dokter() {
  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <main>
        <div className="bg-dark-green py-16 lg:py-12 h-screen lg:h-auto text-black">
          <div className="flex flex-col items-center justify-center w-11/12 bg-white mx-auto py-8">
            <Image src="/images/403.svg" alt="403" width={400} height={400} />
            <h1 className="font-montserrat font-bold text-xl lg:text-4xl mt-8">Akses Dilarang</h1>
            <p className="font-poppins text-sm lg:text-xl text-center my-5 px-2">
              Ups, maaf ya kamu tidak diizinkan untuk mengakses halaman ini.
              <br />
              {' '}
              Kita kembali ke beranda saja, yuk!
            </p>
            <Link href="/">
              <Button type="btn-wide" title="Kembali ke Beranda" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
