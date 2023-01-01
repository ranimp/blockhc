import { Fragment } from "react";
import Head from "next/head";
import Footer from './../../components/footer/index';
import Button from './../../components/button/index';
import Link from 'next/link';
import NavbarLogin from './../../components/navbar/login';

export default function Konsultasi() {
	return (
		<Fragment>
       <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin konsultasi={true} />
      </nav>
      <main className="px-4 lg:px-16 my-36 min-h-screen">
      <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-7">            
              <div className="lg:col-span-3">
                <div className="mb-4">
                  <h1 className="text-2xl lg:text-4xl font-bold">
                    FORM PENDAFTARAN KONSULTASI
                  </h1>
                  <h3 className="text-base lg:text-lg font-bold mt-5 lg:mt-10">Silahkan isi form singkat di samping dan klik “Kirim”</h3>
                  <p className="text-xs lg:text-sm mt-5">*Privasi dan kerahasiaanmu aman dalam lindungan Kode Etik Kedokteran.</p>
                </div>
              </div>
              <div className="lg:col-span-1"></div>
              <div className="col-span-1 lg:col-span-3 border-4 border-medium-blue rounded-lg">
                <form className="w-full px-4 lg:px-12 py-8">
                  {/* name */}
                  <div>
                    <label className="label text-sm font-bold text-black block">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      // value={values.name}
                      // onChange={handleChange}
                      placeholder="Enter Your Name"
                    ></input>
                    {/* <div className="text-xs text-red-600	">
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div> */}
                  </div>

                   {/* gender */}
                  <div className="mt-4">
                    <label className="label text-sm font-bold text-black block">
                      Jenis Kelamin
                    </label>
                    <label className="inline-flex items-center label text-sm font-bold text-black">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="laki-laki"
                        // onChange={handleChange}
                      />
                      <label className="ml-2 text-xs">Laki-laki</label>
                    </label>
                    <label className="inline-flex items-center ml-4 label text-sm font-bold text-black">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="perempuan"
                        // onChange={handleChange}
                      />
                      <label className="ml-2 text-xs">Perempuan</label>
                    </label>
                    {/* <div className="text-xs text-red-600	">
                      {errors.gender && (
                        <p className="error">{errors.gender}</p>
                      )}
                    </div> */}
                  </div>

                  {/* phone number */}
                  <div className="mt-3">
                    <label className="label text-sm font-bold text-black block">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      // value={values.phone}
                      // onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                    ></input>
                    {/* <div className="text-xs text-red-600">
                      {errors.phone && <p className="error">{errors.phone}</p>}
                    </div> */}
                  </div>

                  {/* Dokter */}
                  <div className="mt-4">
                    <label className="label text-sm font-bold text-black block">
                      Pilih Dokter
                    </label>
                    <select name="dokter" id="dokter" className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                    // onChange={handleChange} 
                    >
                      <option>Drg. Rio Dewantara</option>                  
                    </select>
                  </div>   

                  {/* Antrian */}
                  <div className="mt-4">
                    <label className="label text-sm font-bold text-black block">
                      Pilih Nomor Antrian
                    </label>
                    <select name="dokter" id="dokter" className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                    // onChange={handleChange} 
                    >
                      <option>1</option>                  
                    </select>
                  </div>                 
    
                  {/* date */}
                  <div className="mt-3">
                    <label className="label text-sm font-bold text-black block">
                      Pilih Tanggal Konsultasi
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      // value={values.date}
                      // onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                    ></input>
                    {/* <div className="text-xs text-red-600">
                      {errors.date && <p className="error">{errors.date}</p>}
                    </div> */}
                  </div>
    
                  {/* keluhan */}
                  <div className="mt-3">
                    <label htmlFor="message"
                      className="label text-sm lg:text-sm font-bold text-black block font-montserrat">Keluhan</label>
                    <textarea id="message" name="message" 
                    // value={values.message} 
                    // onChange={handleChange}
                      placeholder="Write a message..."
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue h-56 text-sm outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    {/* <div className="text-xs text-red-600">
                      {errors.message && <p className="error">{errors.message}</p>}
                    </div> */}
                  </div>
    
                  {/* submit */}
                  <Link className="w-full" href="/konsultasi/success">
                    <Button type="btn-normal" title="Kirim"/>
                  </Link>
                </form>
              </div>
            </div>
          </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
	)
}