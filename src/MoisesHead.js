import Head from "next/head";

const MoisesHead = () => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Moisés Aguilar | Arquitecto de Software</title>
      <meta name="author" content="Moisés Aguilar" />
      <meta
        name="description"
        content="Portafolio de Moisés Aguilar, Arquitecto de Software especializado en el diseño y desarrollo de aplicaciones web robustas, escalables y de alto rendimiento."
      />
      <meta
        name="keywords"
        content="arquitecto de software, desarrollador senior, react, javascript, node.js, arquitectura de software, portfolio, moises aguilar, web developer"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Moisés Aguilar | Arquitecto de Software" />
      <meta
        property="og:description"
        content="Portafolio de Moisés Aguilar, Arquitecto de Software especializado en el diseño y desarrollo de aplicaciones web robustas y escalables."
      />
      <meta property="og:url" content="https://moisesaguilar.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://moisesaguilar.dev/images/profile.webp" />
      <meta property="og:locale" content="es_ES" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Moisés Aguilar | Arquitecto de Software" />
      <meta
        name="twitter:description"
        content="Portafolio de Moisés Aguilar, Arquitecto de Software especializado en el diseño y desarrollo de aplicaciones web."
      />
      <meta name="twitter:image" content="https://moisesaguilar.dev/images/profile.webp" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      {/* Template Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Template CSS Files */}
      <link rel="stylesheet" href="css/devicon.min.css" />
      <link rel="stylesheet" href="css/all.min.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="css/animate.min.css" />
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      {/* CSS Skin File */}
      {/* <link rel="stylesheet" href="css/skins/yellow.css" /> */}
      {/* Live Style Switcher - demo only */}

      <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
    </Head>
  );
};
export default MoisesHead;
