import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { Layout } from "components";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const variants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Layout>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
