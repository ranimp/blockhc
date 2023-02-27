import DoctorCard from './doctor-card/index';

const Doctor = () => (
  <div className="mb-16 lg:mb-36 px-6 lg:px-16">
    <h2 className="text-center text-medium-blue text-2xl md:text-4xl font-bold mb-8 md:mb-16">Profil Dokter</h2>
    <div className="relative rounded-xl overflow-auto">
      <div className="mx-auto min-w-0 max-w-screen-xl">
        <div className="overflow-x-auto flex gap-12 scrollbar-hide">
          <DoctorCard img="/images/doctor.png" name={false} title="Dokter Gigi" sch="Senin - Jumat : 13.00 - 17.00" />
          <DoctorCard img="/images/doctor.png" name="Drg. Rio Dewantara" title="Dokter Gigi" sch="Senin - Jumat : 13.00 - 17.00" />
          <DoctorCard img="/images/doctor.png" name="Drg. Rio Dewantara" title="Dokter Gigi" sch="Senin - Jumat : 13.00 - 17.00" />
          <DoctorCard img="/images/doctor.png" name="Drg. Rio Dewantara" title="Dokter Gigi" sch="Senin - Jumat : 13.00 - 17.00" />
          <DoctorCard img="/images/doctor.png" name="Drg. Rio Dewantara" title="Dokter Gigi" sch="Senin - Jumat : 13.00 - 17.00" />
        </div>
      </div>
    </div>
  </div>
);

export default Doctor;
