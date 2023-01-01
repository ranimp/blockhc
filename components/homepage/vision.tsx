import Image from 'next/image';

const Vision = () => (
  <div className="bg-soft-blue mb-16 lg:mb-36 px-4">
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:mx-12 items-center py-8 lg:py-16">
        <div className="col-span-1 lg:col-span-3" data-aos="fade-right" data-aos-duration="1500">
          <Image className="mx-auto" src="/icons/blockhc.svg" width={200} height={200} alt="logo" />
          <p className="text-sm lg:text-xl font-normal text-black mb-8 lg:my-4">Menyediakan pelayanan kesehatan berupa registrasi dengan dokter pilihan secara online.  Tidak ada lagi pengantrian untuk registrasi.</p>
        </div>
        <div className="lg:col-span-3 lg:ml-20" data-aos="fade-left" data-aos-duration="1000">
          <div className="grid grid-cols-12 mb-8">
            <div className="col-span-2">
              <Image className="w-16" src="/icons/praktis.svg" width={24} height={24} alt="praktis" />
            </div>
            <div className="col-span-10 text-black  ml-4">
              <p className="text-medium-blue capitalize  font-bold text-lg lg:text-2xl mb-3">Praktis</p>
              <p className="text-xs lg:text-lg">Registrasi dilakukan secara online sehingga kamu tidak perlu repot mengantri lagi untuk registrasi.</p>
            </div>
          </div>
          <div className="grid grid-cols-12 mb-8">
            <div className="col-span-2">
              <Image className="w-16" src="/icons/efektif.svg" width={24} height={24} alt="efektif" />
            </div>
            <div className="col-span-10 text-black  ml-4">
              <p className="text-medium-blue capitalize  font-bold text-lg lg:text-2xl mb-3">Efektif</p>
              <p className="text-xs lg:text-lg">Riwayat kesehatanmu akan tersimpan di sistem kami sehingga dokter kami bisa memberikan yang terbaik.</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <Image className="w-16" src="/icons/aman.svg" width={24} height={24} alt="aman" />
            </div>
            <div className="col-span-10 text-black  ml-4">
              <p className="text-medium-blue capitalize  font-bold text-lg lg:text-2xl mb-3">Aman</p>
              <p className="text-xs lg:text-lg">Privasimu akan terjaga karena kami menggunakan teknologi blockchain yang terkenal akan privasi nya.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Vision;
