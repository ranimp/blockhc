import Link from 'next/link';
import React from 'react';
import { DokterTable } from '../../types/index';

const TableDashboardDokter: React.FC<DokterTable> = ({
  no, walletAddress, name, date, tambahUrl, detailUrl, hasil,
}) => (
  <tr className="text-center odd:bg-odd-blue even:bg-even-blue">
    <td className="text-xs sm:text-sm lg:text-base">{no}</td>
    <td className="text-xs sm:text-sm lg:text-base">
      <div className="w-20 md:w-40 lg:w-96">
        <p className="truncate">
          {walletAddress}
        </p>
      </div>
    </td>
    <td className="text-xs sm:text-sm lg:text-base">{name}</td>
    <td className="text-xs sm:text-sm lg:text-base">{date}</td>
    <td className="py-3 flex justify-center gap-2">
      <Link href={detailUrl}>
        <button className="hover:text-medium-blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </button>
      </Link>
      <Link href={tambahUrl} className={hasil ? 'block' : 'hidden'}>
        <button className="hover:text-medium-blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </Link>
    </td>
  </tr>
);

export default TableDashboardDokter;
