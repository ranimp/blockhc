/* eslint-disable react/jsx-boolean-value */
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Button from '../../button/index';
import { ContractContext } from '../../../lib/contractProvider';
import { AdminUpdatePasien } from '../../../types/index';

const UpdatePasienAdmin: React.FC<AdminUpdatePasien> = ({
  nama,
  telepon,
  ttl,
  email,
  walletAddress,
  gender,
}) => {
  const {
    handleUpdateUserAdmin,
    setStatus,
    errors,
    setNama,
    setTelepon,
    setTtl,
    setEmail,
    setWalletAddress,
    setGender,
  } = useContext(ContractContext);

  const router = useRouter();
  return (
    <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Update Pasien</h3>
      <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="nama" value={nama} onChange={setNama(nama) as any} placeholder="Nama Pasien" className="focus:outline-none bg-transparent w-full" />
              {errors.nama && <p className="text-red-500 text-xs italic">{errors.nama}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Jenis Kelamin</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="nama" value={gender} onChange={setGender(gender) as any} className="focus:outline-none bg-transparent w-full" />
              {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Email</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="email" value={email} onChange={setEmail(email) as any} placeholder="Email" className="focus:outline-none bg-transparent w-full" />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">No. Telepon</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="telepon" value={telepon} onChange={setTelepon(telepon) as any} placeholder="08xxxx" className="focus:outline-none bg-transparent w-full" />
              {errors.telepon && <p className="text-red-500 text-xs italic">{errors.telepon}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">ID Wallet</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="walletAddress" value={walletAddress} onChange={setWalletAddress(walletAddress) as any} placeholder="0x00000000" className="focus:outline-none bg-transparent w-full" />
              {errors.walletAddress && <p className="text-red-500 text-xs italic">{errors.walletAddress}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Tanggal Lahir</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="ttl" value={ttl} onChange={setTtl(ttl) as any} className="focus:outline-none bg-transparent w-fit" />
              {errors.ttl && <p className="text-red-500 text-xs italic">{errors.ttl}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Status</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base pr-4">
              <select className="focus:outline-none bg-transparent w-full" name="status" onChange={(e) => setStatus(e.target.value === 'true')}>
                <option>Pilih status</option>
                <option value="true">Aktif</option>
                <option value="false">Tidak Aktif</option>
              </select>
              {errors.status && <p className="text-red-500 text-xs italic">{errors.status}</p>}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-2 gap-2">
        <div className="w-24 lg:w-48">
          <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
        </div>
        <div className="w-24 lg:w-48">
          <Button type="btn-normal" title="simpan" onClick={handleUpdateUserAdmin} />
        </div>
      </div>
    </div>
  );
};

export default UpdatePasienAdmin;
