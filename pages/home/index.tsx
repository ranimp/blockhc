import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from './../../components/navbar/index';
import Footer from './../../components/footer/index';
import Hero from './../../components/homepage/hero';
import Vision from './../../components/homepage/vision';
import Doctor from './../../components/homepage/doctor';
import Button from './../../components/button/index';

export default function Homepage() {
	return (
		<Fragment>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <Navbar home={true}/>
      </nav>
      <section>
        <Hero />
        <Vision />
        <Doctor />
        <div className="flex flex-col items-center mb-16 lg:mb-36">
          <p className="md:text-xl">Daftar dan pilih dokter anda disini.</p>
          <Link href="/" className="mt-2">
            <Button type="btn-wide-sm" title="registrasi sekarang"/>
          </Link>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </Fragment>
	)
}