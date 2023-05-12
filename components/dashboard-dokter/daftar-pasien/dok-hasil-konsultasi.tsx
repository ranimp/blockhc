import React, { useEffect, useContext } from 'react';
import TableDashboardDokter from '../table';
import { ContractContext } from '../../../lib/contractProvider';

const HasilKonsultasiDokter = () => {
  const {
    getRegistrationDoctor,
    allRegistration,
  } = useContext(ContractContext);

  useEffect(() => {
    getRegistrationDoctor();
  }, [allRegistration, getRegistrationDoctor]);
  return (
    <div className="overflow-x-auto">
      {allRegistration?.length > 0 ? (
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
            {allRegistration?.map((data2: any, idx: number) => (
              <TableDashboardDokter
                key={idx}
                no={idx + 1}
                walletAddress={data2?.wallet}
                date={data2?.tanggal}
                name={data2?.nama}
                detailUrl={`/dashboard-dokter/manajemen-konsultasi/detail-registrasi/${data2?.wallet}/${idx}`}
                tambahUrl={`/dashboard-dokter/manajemen-konsultasi/tambah-konsultasi/${data2?.wallet}/${idx}`}
                hasil
              />
            ))}
          </tbody>
        </table>
      ) : <p className="text-center py-8">Belum ada data registrasi pasien</p>}
    </div>
  );
};

export default HasilKonsultasiDokter;
