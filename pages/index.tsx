import {Navbar, Button} from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <Image
          src="/icons/blockhc.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
          width={200}
          height={200}
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          Get started
        </Button>
        <Button>
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/navbars"
          active={true}
        >
          Beranda
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Konsultasi
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Dokter
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Tentang
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}