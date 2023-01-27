import { Fragment } from 'react';
import Head from 'next/head';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import NavbarLogin from '../../components/navbar/login';
import withAuth from '../../lib/withAuth';

function Konsultasi() {
  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <div>
        <nav>
          <NavbarLogin konsultasi />
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
                  <p>
                    Tes tampilkan disini nanti :
                    {' '}
                    {/* {currentValue} */}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1" />
              <div className="col-span-1 lg:col-span-3 border-4 border-medium-blue rounded-lg">
                <form className="w-full px-4 lg:px-12 py-8">
                  {/* name */}
                  <div>
                    <p className="label text-sm font-bold text-black block">
                      Nama Lengkap
                    </p>
                    <input
                      type="text"
                      name="name"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      // value={value.name}
                      // onChange={(e) => setConsultation(e.target.value)}
                      placeholder="Enter Your Name"
                    />
                    {/* <div className="text-xs text-red-600">
                        {errors.name && <p className="error">{errors.name}</p>}
                      </div> */}
                  </div>

                  {/* gender */}
                  <div className="mt-4">
                    <p className="label text-sm font-bold text-black block">
                      Jenis Kelamin
                    </p>
                    <label className="inline-flex items-center label text-sm font-bold text-black" htmlFor="gender">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                      />
                      <p className="ml-2 text-xs">Laki-laki</p>
                    </label>
                    <label className="inline-flex items-center ml-4 label text-sm font-bold text-black" htmlFor="gender">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                      />
                      <p className="ml-2 text-xs">Perempuan</p>
                    </label>
                    {/* <div className="text-xs text-red-600">
                        {errors.gender && (
                          <p className="error">{errors.gender}</p>
                        )}
                      </div> */}
                  </div>

                  {/* phone number */}
                  <div className="mt-3">
                    <p className="label text-sm font-bold text-black block">
                      Nomor Telepon
                    </p>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      // value={value.phone}
                      // onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                    />
                    {/* <div className="text-xs text-red-600">
                        {errors.phone && <p className="error">{errors.phone}</p>}
                      </div> */}
                  </div>

                  {/* Dokter */}
                  <div className="mt-4">
                    <p className="label text-sm font-bold text-black block">
                      Pilih Dokter
                    </p>
                    <select
                      name="dokter"
                      id="dokter"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                    >
                      <option value="Drg. Rio Dewantara">Drg. Rio Dewantara</option>
                    </select>
                  </div>

                  {/* Antrian */}
                  <div className="mt-4">
                    <p className="label text-sm font-bold text-black block">
                      Pilih Sesi
                    </p>
                    <select
                      name="dokter"
                      id="dokter"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                    >
                      <option value="09.00 - 10.00">09.00 - 10.00</option>
                      <option value="10.00 - 11.00">10.00 - 11.00</option>
                    </select>
                  </div>

                  {/* date */}
                  <div className="mt-3">
                    <p className="label text-sm font-bold text-black block">
                      Pilih Tanggal Konsultasi
                    </p>
                    <input
                      type="date"
                      name="date"
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                      // value={value.date}
                      // onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                    />
                    {/* <div className="text-xs text-red-600">
                        {errors.date && <p className="error">{errors.date}</p>}
                      </div> */}
                  </div>

                  {/* keluhan */}
                  <div className="mt-3">
                    <p
                      className="label text-sm lg:text-sm font-bold text-black block font-montserrat"
                    >
                      Keluhan
                    </p>
                    <textarea
                      id="message"
                      name="message"
                      // value={value.symptom}
                      // onChange={handleChange}
                      placeholder="Write a message..."
                      className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue h-56 text-sm outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                    {/* <div className="text-xs text-red-600">
                        {errors.message && <p className="error">{errors.message}</p>}
                      </div> */}
                  </div>

                  {/* submit */}
                  <div className="w-full">
                    <Button type="btn-normal" title="Kirim" />
                  </div>
                  <div className="w-full mt-2">
                    <Button type="btn-normal" title="Ambil" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default withAuth(Konsultasi);
