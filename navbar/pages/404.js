import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/"); //after 3 sec it will be redirect to the home page
    }, 3000);
  }, []);
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
