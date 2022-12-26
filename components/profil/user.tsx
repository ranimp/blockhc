import { Fragment } from 'react';
import Image from 'next/image';

const User = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center gap-4 lg:gap-8">
        <Image src="/images/profile.png" alt="prof-pic" width={180} height={180} className="rounded-full hidden lg:block" />
        <Image src="/images/profile.png" alt="prof-pic" width={72} height={72} className="rounded-full block lg:hidden" />
        <div className="flex flex-col lg:gap-1 max-w-xs">
          <h3 className="font-bold text-medium-blue text-base lg:text-2xl">Rani Meliyana Putri</h3>
          <p className="text-xs sm:text-sm lg:text-base">Pasien</p>
          <p className="text-xs sm:text-sm lg:text-base">ranimp</p>
          <p className="text-xs sm:text-sm lg:text-base">0x7c73d9eD23DDAd6353034F37</p>
        </div>
      </div>
    </Fragment>
  )
}

export default User;