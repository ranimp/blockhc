import { Fragment } from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <Fragment>
      <div className="shadow-md w-5/12 sm:w-1/4 lg:w-1/5">
        <figure className="h-32 lg:h-52 relative">
          <Image src="/images/doctor.png" alt="doctor" fill className="object-contain" />
        </figure>
        <div className="flex flex-col p-2 lg:p-4">
          <h3 className="font-medium text-medium-blue lg:text-xl">Drg. Rio Dewantara</h3>
          <p className="text-xs lg:text-base">Dokter Gigi</p>
          <p className="text-xs lg:text-base">Senin - Jumat : 13.00 - 17.00</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Card;