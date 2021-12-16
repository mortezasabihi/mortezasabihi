import type { NextPage } from "next";
import Head from "next/head";
import { TheHeader } from "components";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-8 lg:max-w-screen-md md:max-w-screen-sm">
      <Head>
        <title>Morteza Sabihi - Frontend Developer</title>
      </Head>

      <TheHeader />
    </div>
  );
};

export default Home;
