import React from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Head from "next/head";
const home = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <h1>home Page</h1>
      <Image src="/img.png" width="500" height="300"></Image>{" "}
      {/* internal image  */}
      <Image
        src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?/"
        width="500"
        height="300"
      ></Image>{" "}
      {/* external image */}
    </div>
  );
};

export default home;
