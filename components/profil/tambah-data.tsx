import React from 'react';
import { ProfilTambahEditProps } from '../../types/index';

const TambahData: React.FC<ProfilTambahEditProps> = ({
  name, ttl, email, phone, nameChange, ttlChange, emailChange, phoneChange,
  genderChange, nameName, ttlName, emailName, phoneName, genderName, maleValue, femaleValue, error,
}) => (
  <div className="mt-2 lg:mt-4">
    <table className="w-full text-black border-separate border-spacing-y-2">
      <tbody>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">Nama</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base">
            <input type="text" name={nameName} value={name} onChange={nameChange} placeholder="Tulis Nama" className="focus:outline-none bg-transparent w-full" />
            {error.nama && <p className="text-red-500 text-xs italic">{error.nama}</p>}
          </td>
        </tr>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">Jenis Kelamin</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base capitalize">
            <label className="inline-flex items-center" htmlFor="gender">
              <input
                type="radio"
                className="form-radio"
                name={genderName}
                value={maleValue}
                onChange={genderChange}
              />
              <p className="ml-2">Laki-laki</p>
            </label>
            <label className="inline-flex items-center ml-4" htmlFor="gender">
              <input
                type="radio"
                className="form-radio"
                name={genderName}
                value={femaleValue}
                onChange={genderChange}
              />
              <p className="ml-2">Perempuan</p>
            </label>
            {error.gender && <p className="text-red-500 text-xs italic">{error.gender}</p>}
          </td>
        </tr>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">Tanggal Lahir</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base">
            <input type="date" name={ttlName} value={ttl} onChange={ttlChange} className="focus:outline-none bg-transparent w-fit" />
            {error.ttl && <p className="text-red-500 text-xs italic">{error.ttl}</p>}
          </td>
        </tr>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">Email</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base">
            <input type="text" name={emailName} value={email} onChange={emailChange} placeholder="email@email.com" className="focus:outline-none bg-transparent w-full" />
            {error.email && <p className="text-red-500 text-xs italic">{error.email}</p>}
          </td>
        </tr>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">No. Telepon</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base">
            <input type="text" name={phoneName} value={phone} onChange={phoneChange} placeholder="628987654xxx" className="focus:outline-none bg-transparent w-full" />
            {error.telepon && <p className="text-red-500 text-xs italic">{error.telepon}</p>}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TambahData;
