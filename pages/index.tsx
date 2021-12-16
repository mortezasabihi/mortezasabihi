import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { TheHeader } from "components";
import { Github } from "types";

type Props = {
  github: Github;
};

const Home: NextPage<Props> = ({ github }) => {
  return (
    <div className="container mx-auto px-8 lg:max-w-screen-md md:max-w-screen-sm">
      <Head>
        <title>{github.name} - Frontend Developer</title>
      </Head>

      <TheHeader title={github.name} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/mortezasabihi");
  const data: Github = await response.json();

  return {
    props: {
      github: data,
    },
  };
};
