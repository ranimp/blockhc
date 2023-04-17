import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DoctorCardProps } from '../../types/index';

const Card: React.FC<DoctorCardProps> = ({
  img, name, title, sch, detailUrl,
}) => (
  <Link className="shadow-md w-5/12 sm:w-1/4 lg:w-1/5" href={detailUrl ?? ''}>
    <figure className="flex justify-center h-32 lg:h-52">
      <Image src={img || ''} alt="doctor" width={200} height={200} className="object-contain" />
    </figure>
    <div className="flex flex-col p-2 lg:p-4">
      <h3 className="font-medium text-medium-blue lg:text-xl">{name}</h3>
      <p className="text-xs lg:text-base">{title}</p>
      <p className="text-xs lg:text-sm">{sch}</p>
    </div>
  </Link>
);

export default Card;
