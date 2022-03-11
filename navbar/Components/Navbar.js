import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Navbar;
