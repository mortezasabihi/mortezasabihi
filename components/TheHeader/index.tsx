import type { NextPage } from "next";
import Link from "next/link";

const TheHeader: NextPage = () => {
  return (
    <header className="text-center uppercase my-16">
      <Link href="/">
        <h1
          className="
        text-6xl text-white
        tracking-wide
        animate__animated animate__fadeInDown
      "
        >
          Morteza Sabihi
        </h1>
      </Link>
    </header>
  );
};

export default TheHeader;
