import type { AppProps } from "next/app";
import Script from "next/script";
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
    <>
      <Script
        strategy={"lazyOnload"}
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy={"lazyOnload"}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

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
    </>
  );
}

export default MyApp;
