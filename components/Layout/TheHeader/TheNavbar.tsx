import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const TheNavbar: NextPage = () => {
  const router = useRouter();

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
      url: "mailto:morteza.sabihi@gmail.com",
    },
  ];

  const navVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="my-16"
    >
      <ul className="flex justify-center flex-col md:flex-row text-center leading-loose md:leading-normal">
        {links.map(({ title, url }, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          >
            <Link href={url}>
              <a
                className={`mx-5 hover:text-white focus:text-white text-2xl transition duration-150 ease-in-out ${
                  router.pathname === url ? "text-white" : "text-gray-300"
                }`}
              >
                {title}
              </a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default TheNavbar;
