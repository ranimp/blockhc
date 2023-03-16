/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react';
import TablePasienDashboardAdmin from './table-pasien';
import { ContractContext } from '../../../lib/contractProvider';

const DaftarPasienAdmin = () => {
  const {
    getAllDataUser,
    allUser,
  } = useContext(ContractContext);

  useEffect(() => {
    getAllDataUser();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-black border-separate border-spacing-y-2">
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">No.</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Alamat Wallet</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Nama Pasien</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Status</th>
            <th className="text-xs sm:text-sm lg:text-base border-b-2 border-slate-200">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {allUser?.map((data, index) => (
            <TablePasienDashboardAdmin
              key={index}
              no={index + 1}
              walletAddress={data.wallet}
              name={data.nama}
              status={data.status}
              detailUrl={`/dashboard-admin/manajemen-pasien/detail-pasien/${data.wallet}`}
              updateUrl={`/dashboard-admin/manajemen-pasien/update-pasien/${data.wallet}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

DaftarPasienAdmin.getInitialProps = async () => {
  const { getAllDataUser, allUser } = useContext(ContractContext);

  await getAllDataUser();

  return {
    allUser,
  };
};
export default DaftarPasienAdmin;
