import { useRouter } from 'next/router';
import React from 'react';
import Table from '../../dashboard/table';
import Button from '../../button/index';

interface Props {
  datas: any[];
}

const RiwayatKonsultasiDokter = ({ datas }: Props) => {
  const router = useRouter();
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-black border-separate border-spacing-y-2">
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">No.</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Tanggal</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Nama Dokter</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((data, idx) => (
            <Table key={idx} no={idx + 1} date={data?.tanggal} doctor={data?.namaDokter} link={`/dashboard-dokter/manajemen-pasien/detail-riwayat-konsultasi/${data?.wallet}/${idx}`} updateUrl={`/dashboard-dokter/manajemen-pasien/update-riwayat-konsultasi/${data?.wallet}/${idx}`} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-2">
        <div className="w-32 lg:w-60">
          <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
        </div>
      </div>
    </div>
  );
};

export default RiwayatKonsultasiDokter;
