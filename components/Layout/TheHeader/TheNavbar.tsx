import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const links: { title: string; url: string }[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Resume",
    url: "/resume",
  },
  {
    title: "Contact Me",
    url: "mailto:mortezasabihi87@gmail.com",
  },
];

const TheNavbar: NextPage = () => {
  const router = useRouter();

  return (
    <nav className="my-16">
      <ul
        className="
            flex
            justify-center
            flex-col
            md:flex-row
            text-center
            leading-loose
            md:leading-normal
            animate__animated animate__fadeInRight
          "
      >
        {links.map(({ title, url }, index) => (
          <li key={index}>
            <Link href={url}>
              <a
                className={`mx-5 hover:text-white focus:text-white text-2xl transition duration-150 ease-in-out ${
                  router.pathname === url ? "text-white" : "text-gray-300"
                }`}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TheNavbar;
