import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { TheHeader, Hero, SocialMedia } from "components";
import { Github } from "types";

type Props = {
  github: Github;
};

const Home: NextPage<Props> = ({ github }) => {
  return (
    <>
      <Head>
        <title>{github.name} - Frontend Developer</title>
      </Head>

      <div className="container mx-auto px-8 lg:max-w-screen-md md:max-w-screen-sm">
        <TheHeader title={github.name} />

        <main>
          <Hero avatar_url={github.avatar_url} bio={github.bio} />
        </main>

        <footer>
          <SocialMedia />
        </footer>
      </div>
    </>
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
