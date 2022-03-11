import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const ErrorPage = () => {
  const router = useRouter();
  return (
    <center>
      <h1> 404 | This page could not be found.</h1>
      {/* <Link href="/"> */}
      <a style={{ color: "blue" }} onClick={() => router.push("/")}>
        Back to home page
      </a>
      {/* </Link> */}
    </center>
  );
};

export default ErrorPage;
