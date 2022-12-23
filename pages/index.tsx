import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from './../components/navbar/index';
import Footer from './../components/footer/index';
import Hero from './../components/homepage/hero';
import Vision from './../components/homepage/vision';
import Doctor from './../components/homepage/doctor';

export default function Home() {
	return (
		<Fragment>
       <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Hero />
        <Vision />
        <Doctor />
        <div className="flex flex-col items-center mb-10 lg:mb-36">
          <p className="md:text-xl">Daftar dan pilih dokter anda disini.</p>
          <Link
          className="flex justify-center items-center text-lg capitalize leading-snug text-white hover:opacity-75 py-2 mt-2" href="/"             
          >
          <button className="px-3 py-2 text-white bg-medium-blue capitalize rounded-lg font-medium hover:bg-soft-blue hover:text-medium-blue hover:border-2 border-medium-blue w-80 md:text-xl">registrasi sekarang</button>
          </Link>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </Fragment>
	)
}