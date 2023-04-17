import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../button/index';
import { AdminTambahEditKonsultasi } from '../../../types/index';

const TambahKonsultasiDokter: React.FC<AdminTambahEditKonsultasi> = ({
  name, nameName, nameChange,
  doctor, doctorName, doctorChange,
  date, dateName, dateChange,
  keluhan, keluhanName, keluhanChange,
  diagnosa, diagnosaName, diagnosaChange,
  tekanan, tekananName, tekananChange,
  gula, gulaName, gulaChange,
  onClick, wallet, walletName, walletChange,
  error,
}) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Tambah Hasil Konsultasi</h3>
      <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody>
          <tr className="hidden odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Alamat wallet</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name={walletName} defaultValue={wallet} onChange={walletChange} placeholder="Nama Pasien" className="focus:outline-none bg-transparent w-full" />
              {error.walletAddress && <p className="text-red-500 text-xs italic">{error.walletAddress}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Pasien</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name={nameName} value={name} onChange={nameChange} placeholder="Nama Pasien" className="focus:outline-none bg-transparent w-full" />
              {error.nama && <p className="text-red-500 text-xs italic">{error.nama}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base capitalize">
              <input type="text" name={doctorName} value={doctor} onChange={doctorChange} placeholder="Nama Dokter" className="focus:outline-none bg-transparent w-full" />
              {error.namaDokter && <p className="text-red-500 text-xs italic">{error.namaDokter}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Tanggal</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="date" name={dateName} value={date} onChange={dateChange} className="focus:outline-none bg-transparent w-fit" />
              {error.tanggal && <p className="text-red-500 text-xs italic">{error.tanggal}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Keluhan</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" maxLength={100} name={keluhanName} value={keluhan} onChange={keluhanChange} placeholder="Keluhan" className="focus:outline-none bg-transparent w-full" />
              {error.keluhan && <p className="text-red-500 text-xs italic">{error.keluhan}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Hasil Diagnosa</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" maxLength={100} name={diagnosaName} value={diagnosa} onChange={diagnosaChange} placeholder="Diagnosa" className="focus:outline-none bg-transparent w-full" />
              {error.diagnosa && <p className="text-red-500 text-xs italic">{error.diagnosa}</p>}
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
              <p>
                <input type="text" name={tekananName} value={tekanan} onChange={tekananChange} placeholder="Tekanan darah" className="focus:outline-none bg-transparent w-full" />
                {error.tensi && <p className="text-red-500 text-xs italic">{error.tensi}</p>}
              </p>
              <p>
                <input type="text" name={gulaName} value={gula} onChange={gulaChange} placeholder="Gula darah" className="focus:outline-none bg-transparent w-full" />
                {error.gula && <p className="text-red-500 text-xs italic">{error.gula}</p>}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-2 gap-2">
        <div className="w-24 lg:w-48">
          <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
        </div>
        <div className="w-24 lg:w-48">
          <Button type="btn-normal" title="simpan" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default TambahKonsultasiDokter;
