import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({img, name, title, sch, sch2}) => {
  return (
    <Fragment>
      <Link className="shadow-md w-5/12 sm:w-1/4 lg:w-1/5" href="/dokter/detail">
        <figure className="h-32 lg:h-52 relative">
          <Image src={img} alt="doctor" fill className="object-contain" />
        </figure>
        <div className="flex flex-col p-2 lg:p-4">
          <h3 className="font-medium text-medium-blue lg:text-xl">{name}</h3>
          <p className="text-xs lg:text-base">{title}</p>
          <p className="text-xs lg:text-sm">{sch}</p>
          <p className="text-xs lg:text-sm">{sch2}</p>
        </div>
      </Link>
    </Fragment>
  )
}

export default Card;