import { Fragment } from 'react';
import Link from 'next/link';

const TableDashboardDokter = ({no, walletAddress, name, date, time, hasil}) => {
  return (
    <Fragment>
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
        <td className="py-3 flex justify-center">
          <Link href="/dashboard-dokter/riwayat-konsultasi" className={hasil ? 'hidden' : 'block'}>
           <button className="p-1 w-fit text-white bg-medium-blue capitalize rounded-lg font-medium text-xs lg:text-sm hover:bg-soft-blue hover:text-medium-blue hover:border-2 border-medium-blue">detail</button>
          </Link>
          <div className={hasil ? 'flex gap-2 lg:gap-6' : 'hidden'}>
            <button className="hover:text-medium-blue">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button  className="hover:text-medium-blue">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
          </div>
        </td>  
      </tr>
    </Fragment>
    )
}

export default TableDashboardDokter;