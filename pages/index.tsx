import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Layout, Hero } from "components";
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

      <Layout github={github}>
        <Hero avatar_url={github.avatar_url} bio={github.bio} />
      </Layout>
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
