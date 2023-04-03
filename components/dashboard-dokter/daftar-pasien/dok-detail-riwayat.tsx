import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../button/index';
import { AdminDetailRiwayatPasien } from '../../../types/index';

const DetailRiwayatDokter: React.FC<AdminDetailRiwayatPasien> = ({
  date, name, doctor, keluhan, diagnosa, tekanan, gula,
}) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">
        Hasil Konsultasi
        {' '}
        {date}
      </h3>
      <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Pasien</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">{name || ''}</td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base capitalize">{doctor || ''}</td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Keluhan</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">{keluhan || ''}</td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Hasil Diagnosa</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">{diagnosa || ''}</td>
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
              <p className="invisible">empty</p>
              <p>{tekanan || '' }</p>
              <p>{gula || '' }</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-2 gap-2">
        <div className="w-32 lg:w-60">
          <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayatDokter;
