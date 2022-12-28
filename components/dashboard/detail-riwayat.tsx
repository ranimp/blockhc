import { Fragment } from 'react';
import Button from './../button/index';
import { useRouter } from 'next/router';

const DetailRiwayat = (props) => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Hasil Konsultasi - {props.date}</h3>
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
              <td className="py-3 pl-3 text-xs lg:text-base">Hasil Diagnosa</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">{props.diagnosa ? props.diagnosa : ''}</td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">
                <p>Lainnya</p>
                <p>Tekanan Darah</p>
                <p>Gula Darah Sewaktu</p>
              </td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <p></p>
                <p>{props.tekanan ? props.tekanan : '' }</p>
                <p>{props.gula ? props.gula : '' }</p></td> 
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-2">
        <div className="w-32 lg:w-60">
          <Button type="btn-outline" title="kembali" onClick={() => router.back()}/>
        </div>
      </div>
      </div>
    </Fragment>
  )
}

export default DetailRiwayat;