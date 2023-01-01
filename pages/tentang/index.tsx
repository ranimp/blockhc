import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from './../../components/navbar/index';
import Footer from './../../components/footer/index';
import Button from './../../components/button/index';

export default function Tentang() {
	return (
		<Fragment>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <Navbar tentang={true}/>
      </nav>
      <main className="md:mt-12">
        <figure className="h-80 md:h-96 lg:h-screen relative">
          <Image src="/images/about.svg" alt="about" fill /> 
        </figure>
        <section className="px-4 lg:px-16 container mx-auto mb-16 lg:mb-36">
          <h3 className="text-medium-blue font-bold text-xl lg:text-3xl mb-4 lg:mb-8">Founder</h3>
          <div className="flex justify-between gap-8 flex-wrap md:flex-nowrap items-center">
            <figure>
              <Image src="/images/founder.png" alt="founder" width={720} height={100} />
            </figure>
            <p className="md:w-8/12 lg:text-lg">Riyanda Amelia adalah seorang dokter yang memiliki ketertarikan di bidang teknologi informasi. Ia mulai mempelajari terkait teknologi blockchain semenjak 2018. Dari situ ia memiliki ide untuk membangun sebuah sistem yang aman, tidak memiliki pihak ketiga, dan transparan. Disinilah BlockHC tercipta.</p>
          </div>
        </section>
        <section className="px-4 lg:px-16 container mx-auto mb-16 lg:mb-36 flex flex-col justify-center items-center font-medium lg:text-xl">
          <p className="text-center">Ingin menjalin kerjasama bisnis/organisasi?</p>
          <p className="text-center">Hubungi kami untuk diskusi lebih lanjut.</p>
          <div className="mt-2">
            <Button type="btn-wide-sm" title="hubungi kami" />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
	)
}