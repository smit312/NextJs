import { useRouter } from "next/router";
import Navbar from "../../Components/Navbar";
export const getStaticPaths = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await (await res).json();

  const paths = data.map((curElem) => {
    return {
      params: {
        PageNo: curElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.PageNo;
  const res = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await (await res).json();
  return {
    props: {
      data,
      // data :data
    },
  };
};

const PageNo = ({ data }) => {
  // const router = useRouter();
  // const PageNumber = router.query.PageNo;
  return (
    <center>
      <Navbar />
      {/* <h2>my {PageNumber} content</h2> */}
      <div key={data.id}>
        <h3>{data.id}</h3>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </center>
  );
};

export default PageNo;
