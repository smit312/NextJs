import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await (await res).json();
  return {
    props: {
      data,
      // data :data
    },
  };
};

const blog = ({ data }) => {
  return (
    <center>
      <h1> hello from blog</h1>
      {data.slice(0, 5).map((currElem) => {
        return (
          <div key={currElem.id}>
            <h3>{currElem.id}</h3>
            <Link href={`/blog/${currElem.id}`}>
              <h2 style={{ color: "blue", cursor: "pointer" }}>
                {currElem.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </center>
  );
};

export default blog;
