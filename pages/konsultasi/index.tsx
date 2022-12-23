import { Fragment } from "react";
import Head from "next/head";
import Navbar from './../../components/navbar/index';

export default function Konsultasi() {
	return (
		<Fragment>
       <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <Navbar konsultasi = {true} />
    </Fragment>
	)
}