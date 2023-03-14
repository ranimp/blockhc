import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Button from '../../button/index';
import { ContractContext } from '../../../lib/contractProvider';

const TambahDokterAdmin = () => {
  const {
    namaDokter, setNamaDokter,
    telepon, setTelepon,
    email, setEmail,
    walletAddress, setWalletAddress,
    pendidikan, setPendidikan,
    strNumber, setStrNumber,
    status, setStatus,
    img, setImg,
    category, setCategory,
    handleAddDoctor,
  } = useContext(ContractContext);

  const router = useRouter();
  return (
    <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Tambah Dokter</h3>
      <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="namaDokter" value={namaDokter} onChange={(e) => setNamaDokter(e.target.value)} placeholder="Nama Dokter" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Email</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Telepon</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="telepon" value={telepon} onChange={(e) => setTelepon(e.target.value)} placeholder="08xxxx" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">ID Wallet</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="walletAddress" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} placeholder="0x00000000" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Pendidikan</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="pendidikan" value={pendidikan} onChange={(e) => setPendidikan(e.target.value)} placeholder="Pendidikan terakhir" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nomor STR</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="strNumber" value={strNumber} onChange={(e) => setStrNumber(e.target.value)} placeholder="Nomor STR" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Kategori</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Kategori" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Foto</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" name="img" value={img} onChange={(e) => setImg(e.target.value)} placeholder="Masukkan url foto" className="focus:outline-none bg-transparent w-full" />
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Status</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base pr-4">
              <select className="focus:outline-none bg-transparent w-full" name="status" onChange={(e) => setStatus(e.target.value)} value={status}>
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
          <Button type="btn-normal" title="simpan" onClick={handleAddDoctor} />
        </div>
      </div>
    </div>
  );
};

export default TambahDokterAdmin;
