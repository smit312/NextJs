import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <center>
      <h1> 404 | This page could not be found.</h1>
      <Link href="/">
        <a style={{ color: "blue" }}> Back to home page</a>
      </Link>
    </center>
  );
};

export default ErrorPage;
