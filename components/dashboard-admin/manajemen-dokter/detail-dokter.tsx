import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../button/index';
import { AdminDetailDokter } from '../../../types/index';

const DetailDokterAdmin: React.FC<AdminDetailDokter> = ({
  name, email, telepon, walletAddress, role, education, strnumber, category,
}) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Detail Dokter</h3>
      <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              {name}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Email</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              {email}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">ID Wallet</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              {walletAddress}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Telepon</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              {telepon}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Role</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base pr-4">
              {role}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Pendidikan</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              {education}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nomor STR</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              {strnumber}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Kategori</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              {category}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-2 gap-2">
        <div className="w-24 lg:w-48">
          <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
        </div>
        <div className="w-24 lg:w-48">
          <Button type="btn-normal" title="simpan" onClick={() => router.back()} />
        </div>
      </div>
    </div>
  );
};

export default DetailDokterAdmin;
