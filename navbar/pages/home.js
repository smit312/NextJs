import React from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";

const home = () => {
  return (
    <div>
      <Navbar />
      <h1>home Page</h1>
      <Image src="/img.png" width="500" height="300"></Image>
    </div>
  );
};

export default home;
