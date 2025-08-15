import { Fragment } from "react";
import Head from "next/head";
import Preloader from "@/src/components/Preloader";

const App = function ({ Component, pageProps }) {
  return (
    <Fragment>
      <StaticHead />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};

const StaticHead = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Moisés Aguilar" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://moisesaguilar.dev/images/profile.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://moisesaguilar.dev/images/profile.webp" />
      <link rel="icon" href="/assets/favicon.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="css/devicon.min.css" />
      <link rel="stylesheet" href="css/all.min.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="css/animate.min.css" />
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
    </Head>
  );
};

export default App;
