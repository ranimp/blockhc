import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => (
  <footer className="bg-soft-blue lg:px-16">
    <div className="container px-4 py-4 lg:py-8 mx-auto w-full relative flex justify-between lg:w-auto lg:static">
      <Image src="/icons/blockhc.svg" width={80} height={80} alt="logo" className="block md:hidden" />
      <Image src="/icons/blockhc.svg" width={160} height={160} alt="logo" className="hidden md:block" />
      <div className="flex flex-col gap-2 py-4">
        <h3 className="font-bold text-lg md:text-xl">Layanan</h3>
        <Link href="/" className="md:text-lg hover:text-medium-blue">Konsultasi</Link>
        <Link href="/" className="md:text-lg hover:text-medium-blue">Dokter</Link>
      </div>
      <div className="flex flex-col gap-2 py-4">
        <h3 className="font-bold text=lg md:text-xl">Hubungi</h3>
        <div className="hidden md:flex flex-row gap-4">
          <Link href="/">
            <Image src="/icons/ig.svg" width={44} height={44} alt="instagram" />
          </Link>
          <Link href="/">
            <Image src="/icons/yt.svg" width={44} height={44} alt="youtube" />
          </Link>
        </div>
        <div className="flex flex-row gap-4 md:hidden">
          <Link href="/">
            <Image src="/icons/ig.svg" width={32} height={32} alt="instagram" />
          </Link>
          <Link href="/">
            <Image src="/icons/yt.svg" width={32} height={32} alt="youtube" />
          </Link>
        </div>
        <div />
      </div>
    </div>
  </footer>
);

export default Footer;
