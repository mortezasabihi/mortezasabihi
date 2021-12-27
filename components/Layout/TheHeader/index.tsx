import type { NextPage } from "next";
import Link from "next/link";
import TheNavbar from "./TheNavbar";

type Props = {
  title: string;
};

const TheHeader: NextPage<Props> = ({ title }) => {
  return (
    <header className="text-center  my-16">
      <Link href="/" passHref>
        <a>
          <h1
            className="
        text-6xl text-white
        tracking-wide
        uppercase
        animate__animated animate__fadeInDown
      "
          >
            {title}
          </h1>
        </a>
      </Link>

      <TheNavbar />
    </header>
  );
};

export default TheHeader;
