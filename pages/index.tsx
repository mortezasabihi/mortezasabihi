import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Hero } from "components";
import { Github } from "types";
import { getGithub } from "services";

type Props = {
  github: Github;
};

const Home: NextPage<Props> = ({ github }) => {
  return (
    <>
      <Head>
        <title>{github.name} - Frontend Developer</title>
      </Head>

      <Hero avatar_url={github.avatar_url} bio={github.bio} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getGithub();

  return {
    props: {
      github: data,
    },
  };
};
