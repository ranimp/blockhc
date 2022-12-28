import { Fragment } from 'react';
import Table from './table';

const Riwayat = () => {
  return (
    <Fragment>
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
            <Table no="1" date="29/10/2022" doctor="dr.rani" />
            <Table no="1" date="29/10/2022" doctor="dr.rani" />
            <Table no="1" date="29/10/2022" doctor="dr.rani" />
            <Table no="1" date="29/10/2022" doctor="dr.rani" />
            <Table no="1" date="29/10/2022" doctor="dr.rani" />
            <Table no="1" date="29/10/2022" doctor="dr.rani" />
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Riwayat;