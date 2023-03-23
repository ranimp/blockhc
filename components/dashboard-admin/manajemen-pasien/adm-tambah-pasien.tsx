import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Button from '../../button/index';
import { ContractContext } from '../../../lib/contractProvider';

const TambahPasienAdmin = () => {
  const {
    setNama,
    setTelepon,
    setTtl,
    setEmail,
    setStatus,
    setGender,
    setWalletAddress,
    handleAddUserAdmin,
  } = useContext(ContractContext);

  const router = useRouter();
  return (
    <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Tambah Pasien</h3>
      <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="nama" onChange={(e) => setNama(e.target.value)} placeholder="Nama Pasien" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Jenis Kelamin</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <label className="inline-flex items-center" htmlFor="gender">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="laki-laki"
                  onChange={(e) => setGender(e.target.value)}
                />
                <p className="ml-2">Laki-laki</p>
              </label>
              <label className="inline-flex items-center ml-4" htmlFor="gender">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="perempuan"
                  onChange={(e) => setGender(e.target.value)}
                />
                <p className="ml-2">Perempuan</p>
              </label>
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Email</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">No. Telepon</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="telepon" onChange={(e) => setTelepon(e.target.value)} placeholder="08xxxx" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">ID Wallet</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="walletAddress" onChange={(e) => setWalletAddress(e.target.value)} placeholder="0x00000000" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Tanggal Lahir</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="date" name="ttl" onChange={(e) => setTtl(e.target.value)} className="focus:outline-none bg-transparent w-fit" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Status</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base pr-4">
              <select className="focus:outline-none bg-transparent w-full" name="status" onChange={(e) => setStatus(e.target.value)}>
                <option>Pilih status</option>
                <option value="True">Aktif</option>
                <option value="False">Tidak Aktif</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-2 gap-2">
        <div className="w-24 lg:w-48">
          <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
        </div>
        <div className="w-24 lg:w-48">
          <Button type="btn-normal" title="simpan" onClick={handleAddUserAdmin} />
        </div>
      </div>
    </div>
  );
};

export default TambahPasienAdmin;
