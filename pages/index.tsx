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
        <title>{github.name}</title>
        <meta name="author" content="Morteza Sabihi" />
        <meta name="keywords" content="Morteza Sabihi, مرتضی صبیحی" />
        <meta name="theme-color" content="#4f46e5" />
        <meta property="og:title" name="og:title" content={github.name} />
        <meta
          property="og:url"
          name="og:url"
          content="https://mortezasabihi.com"
        />
        <meta property="og:type" name="og:type" content="website" key="type" />
        <meta property="og:image" name="og:image" content={github.avatar_url} />
        <meta
          property="og:image:type"
          name="og:image:type"
          content="image/png"
        />
        <meta
          property="og:description"
          name="og:description"
          content="Morteza Sabihi's personal website"
          key="description"
        />
        <meta
          property="twitter:title"
          name="twitter:title"
          content={github.name}
        />
        <meta
          property="twitter:image"
          name="twitter:image"
          content={github.avatar_url}
        />
        <meta
          property="twitter:description"
          name="twitter:description"
          content="Morteza Sabihi's personal website"
        />
        <meta property="twitter:card" name="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          name="twitter:site"
          content="@mortezasabihi"
        />
        <meta itemProp="name" content={github.name} />
        <meta
          itemProp="description"
          content="Morteza Sabihi's personal website"
        />
        <link rel="canonical" href="https://mortezasabihi.com" />
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
