import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Morteza Sabihi's personal website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Morteza Sabihi" />
        <meta name="keywords" content="Morteza Sabihi, مرتضی صبیحی" />
        <meta name="theme-color" content="#4f46e5" />
        <meta property="twitter:card" name="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          name="twitter:site"
          content="@mortezasabihi"
        />
        <meta property="og:type" name="og:type" content="website" key="type" />
        <meta
          property="og:image:type"
          name="og:image:type"
          content="image/png"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-body overflow-x-hidden bg-gradient-to-b md:bg-gradient-to-r from-indigo-600 to-pink-800 min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
