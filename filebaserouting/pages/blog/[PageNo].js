import { useRouter } from "next/router";
const PageNo = () => {
  const router = useRouter();
  const PageNumber = router.query.PageNo;
  return (
    <center>
      <h2>my {PageNumber} content</h2>
    </center>
  );
};

export default PageNo;
