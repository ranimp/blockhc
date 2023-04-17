import { Fragment, useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { ContractContext } from '../../lib/contractProvider';
import NavbarLogin from '../../components/navbar/login';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import EditData from '../../components/profil/edit-data';
import withAuth from '../../lib/withAuth';

function EditProfil() {
  const router = useRouter();
  const {
    user,
    nama,
    setNama,
    telepon,
    setTelepon,
    ttl,
    setTtl,
    email,
    setEmail,
    gender,
    setGender,
    handleUpdateUser,
    errors,
  } = useContext(ContractContext);

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin profil />
      </nav>
      {!user
        ? (
          <main className="px-4 lg:px-16 my-64">
            <div className="mt-4 flex flex-col items-center justify-center ">
              <p className="text-xl lg:text-3xl text-center">Data diri anda masih kosong, silahkan isi terlebih dahulu.</p>
              <div className="max-w-xs mt-4">
                <Button type="btn-normal" title="Tambah data" onClick={() => router.push('/profil/tambah')} />
              </div>
            </div>
          </main>
        )
        : (
          <main className="px-4 lg:px-16 my-28">
            <div className="flex justify-center">
              <Image src="/images/profile.png" alt="prof-pic" width={180} height={180} className="rounded-full hidden lg:block" />
              <Image src="/images/profile.png" alt="prof-pic" width={72} height={72} className="rounded-full block lg:hidden" />
            </div>
            <EditData
              name={nama}
              gender={gender}
              ttl={ttl}
              email={email}
              phone={telepon}
              nameChange={(e) => setNama(e.target.value)}
              genderChange={(e) => setGender(e.target.value)}
              ttlChange={(e) => setTtl(e.target.value)}
              emailChange={(e) => setEmail(e.target.value)}
              phoneChange={(e) => setTelepon(e.target.value)}
              nameName="nama"
              genderName="gender"
              ttlName="ttl"
              emailName="email"
              phoneName="telepon"
              maleValue="laki-laki"
              femaleValue="perempuan"
              error={errors}
            />
            <div className="flex justify-end gap-2 mt-4 lg:mt-6">
              <div className="w-32 lg:w-60 text-xs lg:text-base">
                <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
              </div>
              <div className="w-32 lg:w-60 text-xs lg:text-base">
                <Button type="btn-normal" title="perbarui profil" onClick={handleUpdateUser} />
              </div>
            </div>
          </main>
        )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default withAuth(EditProfil);
