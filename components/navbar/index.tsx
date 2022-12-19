import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)
  const [fiturOpen, setFiturOpen] = useState(false)
	return (
		<>
      <nav className="font-montserrat sticky top-0 inset-x-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Image src='/icons/blockhc.svg' width={100} height={100} alt='logo'/>
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
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-lg capitalize font-bold leading-snug text-medium-blue hover:opacity-75" href='/'      
                >
                  <i className="lg:text-lg leading-lg opacity-75"></i><span className="ml-2">beranda</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75" href="/konsultasi"     
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">konsultasi</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75" href="/"     
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">dokter</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75" href="/"     
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">Tentang</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75" href="/"     
                >
                <button className="px-4 py-2 border-2 border-medium-blue text-medium-blue capitalize rounded-lg font-bold hover:bg-soft-blue w-80 md:w-full">masuk</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 flex items-center text-lg capitalizeleading-snug text-white hover:opacity-75 py-2" href="/"             
                >
                <button className="px-4 py-2 text-white bg-medium-blue capitalize rounded-lg font-bold hover:bg-soft-blue hover:text-medium-blue hover:border-1 border-medium-blue w-80 md:w-full">daftar</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
	)
}

export default Navbar;