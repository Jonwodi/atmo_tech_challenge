import React from "react";
import Navbar from "../components/Navbar";
import PublicApi from "../components/PublicApi";
import Head from "next/head";
import Image from "next/image";

export default function sensors() {
  const logoImg = { imgPath: "/images/logo.jpeg", imgAlt: "atmo logo" }; // logo image settings

  return (
    <div>
      <Head>
        <title>Sensors</title>
        <meta name="description" content="Atmo API task" />
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
        <PublicApi />
      </div>
    </div>
  );
}
