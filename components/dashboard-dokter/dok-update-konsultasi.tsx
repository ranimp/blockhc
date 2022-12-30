import { Fragment } from 'react';
import Button from './../button/index';
import { useRouter } from 'next/router';

const UpdateKonsultasiDokter = (props) => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Perbarui Hasil Konsultasi</h3>
        <table className="w-full text-black border-separate border-spacing-y-2">
          <tbody> 
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Nama Pasien</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <input type="text" defaultValue={props.name} placeholder="Nama Pasien" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base capitalize">
                <input type="text" defaultValue={props.doctor} placeholder="Nama Dokter" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Tanggal</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <input type="text" defaultValue={props.date + " (updated)" } placeholder="01/01/2022" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Kategori</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base pr-4">
                <select className="focus:outline-none bg-transparent w-full">
                  <option>Umum</option>
                </select>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Keluhan</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <input type="text" defaultValue={props.keluhan} placeholder="Keluhan" className="focus:outline-none bg-transparent w-full"/>
              </td> 
            </tr>
            <tr className="odd:bg-odd-blue even:bg-even-blue">
              <td className="py-3 pl-3 text-xs lg:text-base">Hasil Diagnosa</td> 
              <td className="text-xs sm:text-sm lg:text-base">:</td> 
              <td className="text-xs sm:text-sm lg:text-base">
                <input type="text" defaultValue={props.diagnosa} placeholder="Diagnosa" className="focus:outline-none bg-transparent w-full"/>
              </td> 
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
                <p className="invisible">nothing</p>
                <p><input type="text" defaultValue={props.tekanan} placeholder="Tekanan darah" className="focus:outline-none bg-transparent w-full"/></p>
                <p><input type="text" defaultValue={props.gula} placeholder="Gula darah" className="focus:outline-none bg-transparent w-full"/></p></td> 
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

export default UpdateKonsultasiDokter;