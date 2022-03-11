import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/Profile">
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
