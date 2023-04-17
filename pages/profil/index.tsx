import { Fragment, useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ContractContext } from '../../lib/contractProvider';
import NavbarLogin from '../../components/navbar/login';
import Footer from '../../components/footer/index';
import User from '../../components/profil/user';
import Data from '../../components/profil/data';
import Button from '../../components/button/index';
import withAuth from '../../lib/withAuth';
import Loading from '../../components/loading/index';

function Profil() {
  const router = useRouter();
  const {
    user,
    role,
    nama,
    telepon,
    walletAddress,
    ttl,
    email,
    gender,
    getDataUser,
    loading,
    checkRoles,
  } = useContext(ContractContext);

  useEffect(() => {
    getDataUser();
    checkRoles();
  }, []);

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin profil />
      </nav>
      {loading
        ? <Loading />
        : !user
          ? (
            <main className="px-4 lg:px-16 my-64">
              <div className="mt-4 flex flex-col items-center justify-center ">
                <p className="text-xl lg:text-3xl text-center">Mohon isi data diri anda terlebih dahulu</p>
                <div className="max-w-xs mt-4">
                  <Button type="btn-normal" title="Tambah data" onClick={() => router.push('/profil/tambah')} />
                </div>
              </div>
            </main>
          )
          : (
            <main className="px-4 lg:px-16 my-28">
              <User name={nama} role={role ?? ''} walletAddress={walletAddress} />
              <div className="flex justify-end mt-4 lg:mt-6">
                <Link href="/profil/update" className="w-32 lg:w-60 text-xs lg:text-base">
                  <Button type="btn-normal" title="perbarui profil" />
                </Link>
              </div>
              <Data name={nama} gender={gender} ttl={ttl} email={email} phone={telepon} />
            </main>
          )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default withAuth(Profil);
