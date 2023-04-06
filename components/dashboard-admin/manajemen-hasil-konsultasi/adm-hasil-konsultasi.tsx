import React, { useEffect, useContext } from 'react';
import TableKonsultasiDashboardAdmin from './table-konsultasi';
import { ContractContext } from '../../../lib/contractProvider';

const HasilKonsultasiAdmin = () => {
  const {
    getAllRegistration,
    allRegistration,
  } = useContext(ContractContext);

  useEffect(() => {
    getAllRegistration();
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
          {allRegistration?.map((data2, idx) => (
            <TableKonsultasiDashboardAdmin
              key={idx}
              no={idx + 1}
              walletAddress={data2?.wallet}
              date={data2?.tanggal}
              name={data2?.nama}
              detailUrl={`/dashboard-admin/manajemen-konsultasi/detail-registrasi/${data2?.wallet}/${idx}`}
              tambahUrl={`/dashboard-admin/manajemen-konsultasi/tambah-konsultasi/${data2?.wallet}/${idx}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HasilKonsultasiAdmin;
