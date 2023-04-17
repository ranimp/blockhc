import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { ContractContext } from '../../lib/contractProvider';

const Riwayat = () => {
  const {
    getConsultationPasien,
    allConsultation,
  } = useContext(ContractContext);

  useEffect(() => {
    getConsultationPasien();
  });

  return (
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
          {allConsultation?.map((data: any, idx: number) => (
            <tr className="text-center odd:bg-odd-blue even:bg-even-blue" key={idx}>
              <td className="text-xs sm:text-sm lg:text-base">{idx + 1}</td>
              <td className="text-xs sm:text-sm lg:text-base">{data?.tanggal}</td>
              <td className="text-xs sm:text-sm lg:text-base">{data?.namaDokter}</td>
              <td className="py-3 flex justify-center items-center gap-2">
                <Link href={`/dashboard/detail-konsultasi/${idx}`}>
                  <button className="hover:text-medium-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Riwayat;
