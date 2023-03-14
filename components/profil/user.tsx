import Image from 'next/image';
import React from 'react';
import { ProfilUserProps } from '../../types/index';

const User: React.FC<ProfilUserProps> = ({
  name, role, username, walletAddress,
}) => (
  <div className="flex justify-center items-center gap-4 lg:gap-8">
    <Image src="/images/profile.png" alt="prof-pic" width={180} height={180} className="rounded-full hidden lg:block" />
    <Image src="/images/profile.png" alt="prof-pic" width={72} height={72} className="rounded-full block lg:hidden" />
    <div className="flex flex-col lg:gap-1 max-w-xs">
      <h3 className="font-bold text-medium-blue text-base lg:text-2xl">{name}</h3>
      <p className="text-xs sm:text-sm lg:text-base capitalize">{role}</p>
      <p className="text-xs sm:text-sm lg:text-base">{username}</p>
      <div className="text-xs sm:text-sm lg:text-base w-40 lg:w-full">
        <p className="overflow-hidden truncate lg:overflow-visible">
          {walletAddress}
        </p>
      </div>
    </div>
  </div>
);

export default User;
