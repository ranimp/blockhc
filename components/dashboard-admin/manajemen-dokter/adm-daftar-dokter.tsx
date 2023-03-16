import React, { useContext, useEffect } from 'react';
import TableDokterDashboardAdmin from './table-dokter';
import { ContractContext } from '../../../lib/contractProvider';

const DaftarDokterAdmin = () => {
  const {
    getAllDoctor,
    allDoctor,
  } = useContext(ContractContext);

  useEffect(() => {
    getAllDoctor();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-black border-separate border-spacing-y-2">
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">No.</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Alamat Wallet</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Nama Dokter</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Status</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {allDoctor?.map((data, index) => (
            <TableDokterDashboardAdmin
              key={index}
              no={index + 1}
              walletAddress={data.wallet}
              name={data.nama}
              status={data.status}
              detailUrl={`/dashboard-admin/manajemen-dokter/detail-dokter/${data.wallet}`}
              updateUrl={`/dashboard-admin/manajemen-dokter/update-dokter/${data.wallet}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarDokterAdmin;
