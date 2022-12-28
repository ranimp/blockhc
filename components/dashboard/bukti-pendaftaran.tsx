import { Fragment } from 'react';

const BuktiPendaftaran = (props) => {
  return (
    <Fragment>
      <div className="w-full">
        <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Bukti Pendaftaran</h3>
        <table className="w-full text-black border-separate border-spacing-y-2">
          <tbody> 
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Nama Pasien</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">{props.name ? props.name : ''}</td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base capitalize">{props.doctor ? props.doctor : ''}</td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Kategori</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">{props.cat ? props.cat : ''}</td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Keluhan</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">{props.keluhan ? props.keluhan : ''}</td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Tanggal</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">{props.date ? props.date : ''}</td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Waktu</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">{props.time ? props.time : ''}</td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Nomor Antrian</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">{props.antri ? props.antri : ''}</td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">ID Transaksi</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <div className="w-32 sm:w-96 lg:w-full">
                  <p className="truncate">
                  0xadfabb0c86b6523ac4a00ba78ebb04532ff863bd2cd292fa8f6c570e0b57f8b7
                  </p>
                </div>
              </td> 
            </tr>        
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default BuktiPendaftaran;