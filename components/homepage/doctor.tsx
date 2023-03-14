import React, { useContext, useEffect } from 'react';
import DoctorCard from './doctor-card/index';
import { ContractContext } from '../../lib/contractProvider';

const Doctor = () => {
  const {
    getAllDoctor,
    allDoctor,
  } = useContext(ContractContext);

  useEffect(() => {
    getAllDoctor();
  }, []);

  return (
    <div className="mb-16 lg:mb-36 px-6 lg:px-16">
      <h2 className="text-center text-medium-blue text-2xl md:text-4xl font-bold mb-8 md:mb-16">Profil Dokter</h2>
      <div className="relative rounded-xl overflow-auto">
        <div className="mx-auto min-w-0 max-w-screen-xl">
          <div className="overflow-x-auto flex gap-12 scrollbar-hide">
            {allDoctor?.map((data, idx) => (
              <DoctorCard img={data.img} key={idx} name={data.nama} title={data.cat} detailUrl={`/dokter/detail/${data.wallet}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
