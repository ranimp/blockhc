import React from 'react';
import TablePasienDashboardAdmin from './table-pasien';

const DaftarPasienAdmin = () => (
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
        <TablePasienDashboardAdmin no="1" walletAddress="0xadfabb0c86b6523ac4a00ba78ebb04532ff863bd2cd292fa8f6c570e0b57f8b7" name="Rani Meliyana Putri" />
      </tbody>
    </table>
  </div>
);

export default DaftarPasienAdmin;
