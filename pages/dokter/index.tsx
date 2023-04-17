import { Fragment, useContext, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import Search from '../../components/dokter/search';
import Card from '../../components/dokter/card';
import { AuthContext } from '../../lib/auth';
import NavbarLogin from '../../components/navbar/login';
import { ContractContext } from '../../lib/contractProvider';

export default function Dokter() {
  const authContext = useContext(AuthContext);
  const isLogged = authContext?.isLogged;
  const loginStatus = authContext?.loginStatus;

  useEffect(() => {
    if (loginStatus) {
      loginStatus();
    }
  }, []);

  const {
    getAllDoctor,
    allDoctor,
  } = useContext(ContractContext);

  useEffect(() => {
    getAllDoctor();
  }, [getAllDoctor]);

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        {isLogged
          ? <NavbarLogin dokter /> : <Navbar dokter />}
      </nav>
      <main className="px-4 lg:px-16 my-36 min-h-screen">
        <h2 className="text-center text-medium-blue text-2xl md:text-4xl font-bold mb-4 md:mb-8">Profil Dokter</h2>
        <Search />
        <div className="mt-10 lg:mt-16 flex flex-wrap justify-center gap-8">
          {allDoctor?.map((data: any, idx: number) => (
            <Card img={data.img} key={idx} name={data.nama} title={data.cat} detailUrl={`/dokter/detail/${data.wallet}`} />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
