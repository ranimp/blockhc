import React from 'react';
import Image from 'next/image';
import { DashboardProfilProps } from '../../types/index';

const Profil: React.FC<DashboardProfilProps> = ({ name, role }) => (
  <div className="flex items-center gap-2 lg:gap-4">
    <Image src="/images/profile.png" alt="prof-pic" width={64} height={64} className="rounded-full" />
    <div className="flex flex-col lg:gap-1 max-w-xs">
      <h3 className="font-bold text-medium-blue text-sm lg:text-xl">{name}</h3>
      <p className="text-xs lg:text-base capitalize">{role}</p>
    </div>
  </div>
);

export default Profil;
