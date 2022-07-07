import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";
import styles from "../styles/Home.module.css";

export default function Home() {
  const logoImg = { imgPath: "/images/logo.jpeg", imgAlt: "atmo logo" }; // logo image settings

  return (
    <div>
      <Head>
        <title>Atmo</title>
        <meta name="description" content="Atmo technical challenge form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
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
