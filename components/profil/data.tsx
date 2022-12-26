import { Fragment } from 'react';

const Data = (props) => {
  return (
    <Fragment>
      <div className="mt-2 lg:mt-4">
       <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody> 
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama</td> 
            <td className="text-xs sm:text-sm lg:text-base">:</td> 
            <td className="text-xs sm:text-sm lg:text-base">{props.name ? props.name : ''}</td> 
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Jenis Kelamin</td> 
            <td className="text-xs sm:text-sm lg:text-base">:</td> 
            <td className="text-xs sm:text-sm lg:text-base capitalize">{props.gender ? props.gender : ''}</td> 
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Tanggal Lahir</td> 
            <td className="text-xs sm:text-sm lg:text-base">:</td> 
            <td className="text-xs sm:text-sm lg:text-base">{props.ttl ? props.ttl : ''}</td> 
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Email</td> 
            <td className="text-xs sm:text-sm lg:text-base">:</td> 
            <td className="text-xs sm:text-sm lg:text-base">{props.email ? props.email : ''}</td> 
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">No. Telepon</td> 
            <td className="text-xs sm:text-sm lg:text-base">:</td> 
            <td className="text-xs sm:text-sm lg:text-base">{props.phone ? props.phone : ''}</td> 
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Alamat</td> 
            <td className="text-xs sm:text-sm lg:text-base">:</td> 
            <td className="text-xs sm:text-sm lg:text-base">{props.address ? props.address : ''}</td> 
          </tr>
        </tbody>
        </table>
      </div>
    </Fragment>
    )
}

export default Data;