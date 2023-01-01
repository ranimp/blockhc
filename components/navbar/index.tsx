import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/index';

const Navbar = ({
  home, konsultasi, tentang, dokter,
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 inset-x-0 z-50 py-3 lg:px-16 bg-white shadow-md">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="relative w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <Image src="/icons/blockhc.svg" width={100} height={100} alt="logo" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg className="w-6 h-6" fill="#0787CA" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </button>
        </div>
        <div
          className={
              `lg:flex flex-grow items-center${
                navbarOpen ? 'flex' : ' hidden'}`
            }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                className={`lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75${home ? ' font-bold' : ' font-normal'}`}
                href="/"
              >
                <i className="lg:text-lg leading-lg opacity-75" />
                <span className="ml-2">beranda</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75${konsultasi ? ' font-bold' : ' font-normal'}`}
                href="/konsultasi"
              >
                <i className="text-lg leading-lg opacity-75" />
                <span className="ml-2">konsultasi</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75${dokter ? ' font-bold' : ' font-normal'}`}
                href="/dokter"
              >
                <i className="text-lg leading-lg opacity-75" />
                <span className="ml-2">dokter</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75${tentang ? ' font-bold' : ' font-normal'}`}
                href="/tentang"
              >
                <i className="text-lg leading-lg opacity-75" />
                <span className="ml-2">Tentang</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="lg:px-3 py-2 flex items-center">
                <Button type="btn-outline" title="masuk" />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="lg:px-3 py-2 flex items-center">
                <Button type="btn-normal" title="daftar" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
