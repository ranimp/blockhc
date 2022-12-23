import { Fragment } from "react";
import Image from 'next/image';
import Link from "next/link";
import Button from './../button/index';

const Hero = () => {
  return (
    <Fragment>
      <div className="px-4 lg:px-16">
        <div className="container px-4 py-4 mt-28 mb-16 lg:my-36 mx-auto w-full relative flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-16 items-center">
          <Image src='/images/hero.svg' width={600} height={400} alt='logo'/>
          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="font-bold text-3xl lg:text-5xl lg:leading-snug w-full ">Periksakan <span className="text-medium-blue">Kondisi Kesehatanmu</span></h2>
            <p className="md:text-xl md:leading-relaxed">Bagi kamu yang mengalami gejala penyakit tertentu dan ingin berkonsultasi atau memeriksakan diri, segera daftarkan diri disini dan dapatkan bantuan dari para dokter yang profesional.</p>
            <Link href="/">
              <Button type="btn-wide" title="registrasi sekarang"/>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Hero;