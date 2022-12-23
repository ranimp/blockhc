import { Fragment } from "react";
import Head from "next/head";
import Homepage from './home/index';

export default function Home() {
	return (
		<Fragment>
       <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <main>
        <Homepage />
      </main>
    </Fragment>
	)
}