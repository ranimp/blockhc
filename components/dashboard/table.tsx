import { Fragment } from 'react';
import Link from 'next/link';

const Table = ({no, date, doctor, link}) => {
  return (
    <Fragment>
      <tr className="text-center odd:bg-odd-blue even:bg-even-blue">
        <td className="text-xs sm:text-sm lg:text-base">{no}</td>  
        <td className="text-xs sm:text-sm lg:text-base">{date}</td>  
        <td className="text-xs sm:text-sm lg:text-base">{doctor}</td>  
        <td className="py-3 pl-3 ">
          <Link href={link}>
           <button className="p-1 w-fit text-white bg-medium-blue capitalize rounded-lg font-medium text-xs lg:text-sm hover:bg-soft-blue hover:text-medium-blue hover:border-2 border-medium-blue">detail</button>
          </Link>
        </td>  
      </tr>
    </Fragment>
    )
}

export default Table;