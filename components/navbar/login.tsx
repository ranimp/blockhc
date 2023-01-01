import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Fragment } from 'react';

const NavbarLogin = ({home, konsultasi, tentang, dokter, profil, dashboard}) => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [profilOpen, setProfilOpen] = useState(false);

	return (
		<Fragment>
      <nav className="w-full fixed top-0 inset-x-0 z-50 py-3 lg:px-16 bg-white shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="relative w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <Image src='/icons/blockhc.svg' width={100} height={100} alt='logo'/>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              name="dropdown"
              onClick={() => setProfilOpen(!profilOpen)}
            >
              <Image src="/images/profile.png" width={32} height={32} alt="prof-pic" className="rounded-full"/>
            </button>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              name="dropdown"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="w-6 h-6" fill="#0787CA" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (profilOpen ? "flex" : " hidden")
            }
            id="profile"
          >
            <ul className="flex flex-col items-center lg:hidden list-none">
              <li className=""><Link className={"rounded-t bg-white hover:opacity-75 py-2 px-4 block whitespace-no-wrap text-medium-blue" + (profil ? ' font-bold' : ' font-normal')} href="/profil">Profil</Link></li>
              <li className=""><Link className={"bg-white hover:opacity-75 py-2 px-4 block whitespace-no-wrap text-medium-blue" + (dashboard ? ' font-bold' : ' font-normal')} href="/profil">Dashboard</Link></li>
              <li className=""><Link className="rounded-b bg-white hover:opacity-75 py-2 px-4 block whitespace-no-wrap text-medium-blue" href="/">Keluar</Link></li>
            </ul>
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
                  className={"lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75" + (home ? ' font-bold' : ' font-normal')} href='/'     
                >
                  <i className="lg:text-lg leading-lg opacity-75"></i><span className="ml-2">beranda</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                   className={"lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75" + (konsultasi ? ' font-bold' : ' font-normal')}  href="/konsultasi"     
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">konsultasi</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                   className={"lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75" + (dokter ? ' font-bold' : ' font-normal')}  href="/dokter"     
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">dokter</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                   className={"lg:px-3 py-2 flex items-center text-lg capitalize leading-snug text-medium-blue hover:opacity-75" + (tentang ? ' font-bold' : ' font-normal')}  href="/tentang"     
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">Tentang</span>
                </Link>
              </li>
              <li className="nav-item hidden lg:block">
                <div className="dropdown inline-block relative lg:px-3 py-2 leading-snug">
                  <button className="rounded inline-flex items-center">
                    <Image src="/images/profile.png" width={32} height={32} alt="prof-pic" className="rounded-full"/>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-black pt-1">
                    <li className=""><Link className={"rounded-t bg-white hover:bg-soft-blue py-2 px-4 block whitespace-no-wrap text-medium-blue" + (profil ? ' font-bold' : ' font-normal')} href="/profil">Profil</Link></li>
                    <li className=""><Link className={"bg-white hover:bg-soft-blue py-2 px-4 block whitespace-no-wrap text-medium-blue" + (dashboard ? ' font-bold' : ' font-normal')} href="/dashboard">Dashboard</Link></li>
                    <li className=""><Link className="rounded-b bg-white hover:bg-soft-blue py-2 px-4 block whitespace-no-wrap text-medium-blue" href="/">Keluar</Link></li>
                  </ul>
                </div>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
	)
}

export default NavbarLogin;