import { Fragment, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ContractContext } from '../../lib/contractProvider';
import NavbarLogin from '../../components/navbar/login';
import Footer from '../../components/footer/index';
import User from '../../components/profil/user';
import Button from '../../components/button/index';
import withAuth from '../../lib/withAuth';
import TambahData from '../../components/profil/tambah-data';

function TambahProfil() {
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
    handleAddUser,
  } = useContext(ContractContext);

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin profil />
      </nav>
      {user
        ? (
          <main className="px-4 lg:px-16 my-64">
            <div className="mt-4 flex flex-col items-center justify-center ">
              <p className="text-xl lg:text-3xl text-center">Data diri anda sudah terisi, silahkan cek pada halaman profil anda</p>
              <div className="max-w-xs mt-4">
                <Button type="btn-normal" title="Cek profil saya" onClick={() => router.push('/profil')} />
              </div>
            </div>
          </main>
        )
        : (
          <main className="px-4 lg:px-16 my-40">
            <User name="No data" />
            <TambahData
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
            />
            <div className="mt-4">
              <Button type="btn-normal" title="Tambah data" onClick={handleAddUser} />
            </div>
          </main>
        )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default withAuth(TambahProfil);
