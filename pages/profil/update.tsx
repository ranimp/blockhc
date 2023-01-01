import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import NavbarLogin from '../../components/navbar/login';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import EditData from '../../components/profil/edit-data';

export default function EditProfil() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin profil />
      </nav>
      <main className="px-4 lg:px-16 my-28">
        <div className="flex justify-center">
          <Image src="/images/profile.png" alt="prof-pic" width={180} height={180} className="rounded-full hidden lg:block" />
          <Image src="/images/profile.png" alt="prof-pic" width={72} height={72} className="rounded-full block lg:hidden" />
        </div>
        <EditData name="Rani Meliyana Putri" gender="perempuan" ttl="09/09/2009" email="rani@mail.com" phone="628987654321" address="jalan jendral sudirman" />
        <div className="flex justify-end gap-2 mt-4 lg:mt-6">
          <div className="w-32 lg:w-60 text-xs lg:text-base">
            <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
          </div>
          <div className="w-32 lg:w-60 text-xs lg:text-base">
            <Button type="btn-normal" title="perbarui profil" />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
