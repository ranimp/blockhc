import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Homepage from '../components/homepage/index';
import addRegist from '../lib/connect';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await addRegist();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  );
}
