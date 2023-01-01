import { Fragment } from 'react';
import Head from 'next/head';
import Homepage from '../components/homepage/index';

export default function Home() {
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
