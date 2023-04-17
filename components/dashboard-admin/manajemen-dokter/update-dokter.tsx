import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Button from '../../button/index';
import { ContractContext } from '../../../lib/contractProvider';
import { AdminUpdateDokter } from '../../../types/index';

const UpdateDokterAdmin: React.FC<AdminUpdateDokter> = ({
  namaDokter,
  telepon,
  email,
  walletAddress,
  pendidikan,
  strNumber,
  category,
  img,
}) => {
  const {
    setNamaDokter,
    setTelepon,
    setEmail,
    setWalletAddress,
    setPendidikan,
    setStrNumber,
    setStatus,
    setImg,
    setCategory,
    handleUpdateDoctor,
    errors,
  } = useContext(ContractContext);
  const router = useRouter();

  return (
    <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Perbarui Dokter</h3>
      <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="namaDokter" defaultValue={namaDokter} onChange={(e) => setNamaDokter(e.target.value)} placeholder="Nama Dokter" className="focus:outline-none bg-transparent w-full" />
              {errors.namaDokter && <p className="text-red-500 text-xs italic">{errors.namaDokter}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Email</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="focus:outline-none bg-transparent w-full" />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Telepon</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="telepon" defaultValue={telepon} onChange={(e) => setTelepon(e.target.value)} placeholder="08xxxx" className="focus:outline-none bg-transparent w-full" />
              {errors.telepon && <p className="text-red-500 text-xs italic">{errors.telepon}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">ID Wallet</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="walletAddress" defaultValue={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} placeholder="0x00000" className="focus:outline-none bg-transparent w-full" />
              {errors.walletAddress && <p className="text-red-500 text-xs italic">{errors.namaDoktewalletAddress}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Pendidikan</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="pendidikan" defaultValue={pendidikan} onChange={(e) => setPendidikan(e.target.value)} placeholder="Pendidikan terakhir" className="focus:outline-none bg-transparent w-full" />
              {errors.pendidikan && <p className="text-red-500 text-xs italic">{errors.pendidikan}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nomor STR</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="strNumber" defaultValue={strNumber} onChange={(e) => setStrNumber(e.target.value)} placeholder="Nomor STR" className="focus:outline-none bg-transparent w-full" />
              {errors.strNumber && <p className="text-red-500 text-xs italic">{errors.strNumber}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Kategori</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)} placeholder="Kategori" className="focus:outline-none bg-transparent w-full" />
              {errors.category && <p className="text-red-500 text-xs italic">{errors.category}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Foto</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="img" defaultValue={img} onChange={(e) => setImg(e.target.value)} placeholder="Masukkan url foto" className="focus:outline-none bg-transparent w-full" />
              {errors.img && <p className="text-red-500 text-xs italic">{errors.img}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Status</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base pr-4">
              <select className="focus:outline-none bg-transparent w-full" name="status" onChange={(e) => setStatus(e.target.value === 'true' ? 'aktif' : 'tidak aktif')}>
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
          <Button type="btn-normal" title="simpan" onClick={handleUpdateDoctor} />
        </div>
      </div>
    </div>
  );
};

export default UpdateDokterAdmin;
