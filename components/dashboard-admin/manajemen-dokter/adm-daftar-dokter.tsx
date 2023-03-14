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
              walletAddress={data[9]}
              name={data[0]}
              status={data[10]}
              detailUrl={`/dashboard-admin/manajemen-dokter/detail-dokter/${data[9]}`}
              updateUrl={`/dashboard-admin/manajemen-dokter/update-dokter/${data[9]}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarDokterAdmin;
