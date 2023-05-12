import { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import NavbarLogin from '../../components/navbar/login';
import withAuth from '../../lib/withAuth';
import { ContractContext } from '../../lib/contractProvider';

function Konsultasi() {
  const router = useRouter();
  const {
    user,
    nama,
    telepon,
    gender,
    setNamaDokter,
    setSesi,
    tanggal, setTanggal,
    keluhan, setKeluhan,
    handleAddRegistration,
    slot,
    getAllDoctor,
    allDoctor,
    errors,
    getDataUser,
  } = useContext(ContractContext);

  useEffect(() => {
    getDataUser();
  }, []);

  useEffect(() => {
    getAllDoctor();
  }, []);
  const [tanggalSesiList, setTanggalSesiList] = useState<{ tanggal: string;
    sesi: string[]; }[]>([]);

  useEffect(() => {
    // buat daftar tanggal dari 1 April 2023 hingga 30 Mei 2023
    const startDate = new Date('2023-04-01');
    const endDate = new Date('2023-05-30');
    const days = [];
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      const formattedDay = day.toISOString().slice(0, 10);
      days.push(formattedDay);
    }
    // buat daftar tanggal dan sesi yang tersedia
    const tanggalSesi = days.map((day) => ({
      tanggal: day,
      sesi: [
        '09.00-10.00',
        '10.00-11.00',
        '11.00-12.00',
        '13.00-14.00',
        '14.00-15.00',
      ],
    }));
    // ambil data sesi yang sudah terisi
    const bookedSessions = slot;
    // hapus sesi yang sudah terisi dari daftar sesi yang tersedia
    if (bookedSessions) {
      bookedSessions[0]?.forEach((bookedSession: any) => {
        const tanggalIndex = tanggalSesi.findIndex((val: any) => val.tanggal === bookedSession[0]);
        if (tanggalIndex !== -1) {
          const sesiIndex = tanggalSesi[tanggalIndex].sesi
            .findIndex((availableSesi: any) => availableSesi === bookedSession[1]);
          if (sesiIndex !== -1) {
            tanggalSesi[tanggalIndex].sesi.splice(sesiIndex, 1);
          }
        }
      });
    }
    setTanggalSesiList(tanggalSesi);
  }, []);

  const handleTanggalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTanggal(event.target.value);

    // Ambil daftar sesi yang tersedia pada tanggal yang dipilih
    const tanggalSesi = tanggalSesiList.find((val: any) => val.tanggal === event.target.value);
    const bookedSessions = slot;

    // Hapus sesi yang sudah terisi dari daftar sesi yang tersedia
    const availableSesi = tanggalSesi?.sesi.filter((availableSession: any) => {
      let isBooked = false;
      bookedSessions[0]?.forEach((bookedSession: any) => {
        if (bookedSession[0] === event.target.value && bookedSession[1] === availableSession) {
          isBooked = true;
        }
      });
      return !isBooked;
    });

    // Update daftar sesi yang tersedia pada tanggal yang dipilih
    const updatedTanggalSesiList = tanggalSesiList.map((val: any) => {
      if (val.tanggal === event.target.value) {
        return { tanggal: val.tanggal, sesi: availableSesi };
      }
      return val;
    });

    // Simpan perubahan pada state
    setSesi(updatedTanggalSesiList[0].sesi[0]);
    setTanggalSesiList(updatedTanggalSesiList);
  };

  const handleSesiChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSesi(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <div>
        <nav>
          <NavbarLogin konsultasi />
        </nav>
        {!user
          ? (
            <main className="px-4 lg:px-16 my-64">
              <div className="mt-4 flex flex-col items-center justify-center ">
                <p className="text-xl lg:text-3xl text-center">Mohon isi data diri anda terlebih dahulu</p>
                <div className="max-w-xs mt-4">
                  <Button type="btn-normal" title="Tambah data" onClick={() => router.push('/profil/tambah')} />
                </div>
              </div>
            </main>
          )
          : (
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
                          name="nama"
                          className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                          value={nama}
                        />
                        {errors.nama && <p className="text-red-500 text-xs italic">{errors.nama}</p>}
                      </div>

                      {/* gender */}
                      <div className="mt-4">
                        <p className="label text-sm font-bold text-black block">
                          Jenis Kelamin
                        </p>
                        <input
                          type="text"
                          name="gender"
                          className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                          value={gender}
                        />
                      </div>
                      {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}

                      {/* phone number */}
                      <div className="mt-3">
                        <p className="label text-sm font-bold text-black block">
                          Nomor Telepon
                        </p>
                        <input
                          type="text"
                          name="telepon"
                          className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                          value={telepon}
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                      {errors.telepon && <p className="text-red-500 text-xs italic">{errors.telepon}</p>}

                      {/* Dokter */}
                      <div className="mt-4">
                        <p className="label text-sm font-bold text-black block">
                          Pilih Dokter
                        </p>
                        <select
                          name="dokter"
                          id="dokter"
                          className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                          onChange={(e) => setNamaDokter(e.target.value)}
                        >
                          <option>Pilih Dokter</option>
                          {allDoctor?.map((data: any, idx: number) => (
                            <option key={idx} value={data.nama}>{data.nama}</option>
                          ))}
                        </select>
                        {errors.namaDokter && <p className="text-red-500 text-xs italic">{errors.namaDokter}</p>}
                      </div>

                      {/* date */}
                      <div className="mt-4">
                        <p className="label text-sm font-bold text-black block">
                          Pilih Tanggal Konsultasi
                        </p>
                        <select
                          name="tanggal"
                          id="tanggal"
                          className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                          // value={tanggal}
                          onChange={handleTanggalChange}
                        >
                          <option value="">Pilih tanggal</option>
                          {tanggalSesiList.map((tanggalSesi) => (
                            <option key={tanggalSesi.tanggal} value={tanggalSesi.tanggal}>
                              {tanggalSesi.tanggal}
                            </option>
                          ))}
                        </select>
                        {errors.tanggal && <p className="text-red-500 text-xs italic">{errors.tanggal}</p>}
                      </div>

                      {/* Antrian */}
                      <div className="mt-4">
                        <p className="label text-sm font-bold text-black block">
                          Pilih Sesi
                        </p>
                        <select
                          name="sesi"
                          id="sesi"
                          className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue text-sm outline-none text-gray-800 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                          // value={sesi}
                          onChange={handleSesiChange}
                        >
                          <option>Pilih sesi</option>
                          {tanggalSesiList.find((tanggalSesi: any) => tanggalSesi.tanggal
                          === tanggal)?.sesi.map((availableSesi) => (
                            <option key={availableSesi} value={availableSesi}>
                              {availableSesi}
                            </option>
                          ))}
                        </select>
                        {errors.sesi && <p className="text-red-500 text-xs italic">{errors.sesi}</p>}
                      </div>

                      {/* keluhan */}
                      <div className="mt-3">
                        <p
                          className="label text-sm lg:text-sm font-bold text-black block  "
                        >
                          Keluhan
                        </p>
                        <textarea
                          id="message"
                          name="message"
                          maxLength={100}
                          onChange={(e) => setKeluhan(e.target.value)}
                          placeholder="contoh: batuk, pilek, demam"
                          className="w-full bg-white rounded-lg border border-gray-400 focus:border-medium-blue focus:ring-2 focus:ring-medium-blue h-56 text-sm outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                        <p className="text-sm text-gray-400 mb-4">
                          {keluhan.length}
                          {' '}
                          / 100
                        </p>
                        {errors.keluhan && <p className="text-red-500 text-xs italic">{errors.keluhan}</p>}
                      </div>

                      {/* submit */}
                      <div className="w-full">
                        <Button type="btn-normal" title="Kirim" onClick={handleAddRegistration} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          )}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default withAuth(Konsultasi);
