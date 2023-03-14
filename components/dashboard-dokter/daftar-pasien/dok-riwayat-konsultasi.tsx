import { useRouter } from 'next/router';
import React from 'react';
import Table from '../../dashboard/table';
import Button from '../../button/index';

const RiwayatKonsultasiDokter = () => {
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
          <Table no="1" date="29/10/2022" doctor="dr.rani" link="/dashboard-dokter/detail-riwayat-konsultasi" />
          <Table no="1" date="29/10/2022" doctor="dr.rani" link="/dashboard-dokter/detail-riwayat-konsultasi" />
          <Table no="1" date="29/10/2022" doctor="dr.rani" link="/dashboard-dokter/detail-riwayat-konsultasi" />
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
