import React, { useContext, useEffect } from 'react';
import TableDashboardDokter from '../table';
import { ContractContext } from '../../../lib/contractProvider';

const DaftarPasienDokter = () => {
  const {
    getPasienDoctor,
    allPasien,
  } = useContext(ContractContext);

  useEffect(() => {
    getPasienDoctor();
  }, [allPasien, getPasienDoctor]);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-black border-separate border-spacing-y-2">
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">No.</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Alamat Wallet</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Nama Pasien</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {allPasien?.map((data: any, idx: number) => (
            <TableDashboardDokter
              key={idx}
              no={idx + 1}
              walletAddress={data?.wallet}
              name={data?.nama}
              detailUrl={`/dashboard-dokter/manajemen-pasien/detail-pasien/${data?.wallet}`}
              tambahUrl={`/dashboard-dokter/manajemen-konsultasi/tambah-konsultasi/${data?.wallet}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarPasienDokter;
