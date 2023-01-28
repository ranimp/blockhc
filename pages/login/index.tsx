import {
  Fragment, useContext,
} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AuthContext } from '../../lib/auth';

export default function Login() {
  const { handleLogin, loginStatus, address } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('address', JSON.stringify(address));
    loginStatus();
    handleLogin();
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <main className="flex justify-center items-center bg-soft-blue min-h-screen">
        <div className="flex justify-center items-center flex-col gap-4">
          <Image src="/icons/blockhc.svg" alt="logo" width={100} height={100} />
          <h3 className="font-bold text-medium-blue text-xl lg:text-4xl capitalize">hi, welcome back!</h3>
          <Image src="/images/login.svg" alt="logo" width={480} height={480} />
          <button className="px-2 py-2 text-white bg-medium-blue capitalize rounded-lg font-medium hover:bg-soft-blue hover:text-medium-blue hover:border-2 border-medium-blue w-80 md:text-lg flex justify-center items-center gap-2" onClick={handleSubmit}>
            <Image src="/icons/metamask.svg" alt="mm" width={24} height={24} />
            masuk dengan metamask
          </button>
        </div>
      </main>
    </>
  );
}
