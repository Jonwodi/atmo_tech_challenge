import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Home() {
  const logoImg = { imgPath: "/images/logo.jpeg", imgAlt: "atmo logo" }; // logo image settings

  return (
    <div>
      <Head>
        <title>Form</title>
        <meta name="description" content="Atmo Form task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="sm:pl-20 smUp:px-40">
          <Image
            src={logoImg.imgPath}
            height={150}
            width={175.8}
            alt={logoImg.imgAlt}
          />
        </div>
        <div className="sm:pl-20">
          <Form />
        </div>
      </div>
    </div>
  );
}
