import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Morteza Sabihi</title>
        <meta name="description" content="Morteza Sabihi's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl">Hello</h1>
    </div>
  );
};

export default Home;
