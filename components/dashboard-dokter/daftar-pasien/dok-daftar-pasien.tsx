import React, { useContext, useEffect } from 'react';
import TableDashboardDokter from '../table';
import { ContractContext } from '../../../lib/contractProvider';

const DaftarPasienDokter = () => {
  const {
    getRegistrationDoctor,
    allPasien,
  } = useContext(ContractContext);

  useEffect(() => {
    getRegistrationDoctor();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-black border-separate border-spacing-y-2">
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">No.</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Alamat Wallet</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Nama Pasien</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Tanggal</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {allPasien?.map((data: any, idx: number) => (
            <TableDashboardDokter
              key={idx}
              no={idx + 1}
              walletAddress={data[0]?.wallet}
              date={data[0]?.tanggal}
              name={data[0]?.nama}
              detailUrl={`/dashboard-dokter/manajemen-pasien/detail-pasien/${data[0]?.wallet}`}
              tambahUrl={`/dashboard-dokter/manajemen-konsultasi/tambah-konsultasi/${data[0]?.wallet}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarPasienDokter;
