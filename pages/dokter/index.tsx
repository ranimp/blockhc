import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from './../../components/navbar/index';
import Footer from './../../components/footer/index';
import Button from './../../components/button/index';
import Search from './../../components/dokter/search';
import Card from './../../components/dokter/card';

export default function Tentang() {
	return (
		<Fragment>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <Navbar dokter={true}/>
      </nav>
      <main className="px-4 lg:px-16 my-36 min-h-screen">
        <Search />
        <div className="mt-10 lg:mt-16 flex flex-wrap justify-center gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
	)
}