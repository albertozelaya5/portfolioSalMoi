import Head from "next/head";

export default function DynamicMetaHead({ language }) {
  const metaData = {
    es: {
      title: "Moisés Aguilar | Arquitecto de Software",
      description:
        "Portafolio de Moisés Aguilar, Arquitecto de Software especializado en el diseño y desarrollo de aplicaciones web robustas, escalables y de alto rendimiento.",
      keywords:
        "arquitecto de software, desarrollador senior, react, javascript, node.js, arquitectura de software, portfolio, moises aguilar, web developer",
      ogTitle: "Moisés Aguilar | Arquitecto de Software",
      ogDescription:
        "Portafolio de Moisés Aguilar, Arquitecto de Software especializado en el diseño y desarrollo de aplicaciones web robustas y escalables.",
      ogUrl: "https://moisesaguilar.dev/",
      ogLocale: "es_ES",
      twitterTitle: "Moisés Aguilar | Arquitecto de Software",
      twitterDescription:
        "Portafolio de Moisés Aguilar, Arquitecto de Software especializado en el diseño y desarrollo de aplicaciones web.",
    },
    en: {
      title: "Moisés Aguilar | Software Architect",
      description:
        "Portfolio of Moisés Aguilar, a Software Architect specializing in the design and development of robust, scalable, and high-performance web applications.",
      keywords:
        "software architect, senior developer, react, javascript, node.js, software architecture, portfolio, moises aguilar, web developer",
      ogTitle: "Moisés Aguilar | Software Architect",
      ogDescription:
        "Portfolio of Moisés Aguilar, a Software Architect specializing in designing and developing robust and scalable web applications.",
      ogUrl: "https://moisesaguilar.dev/en",
      ogLocale: "en_US",
      twitterTitle: "Moisés Aguilar | Software Architect",
      twitterDescription:
        "Portfolio of Moisés Aguilar, a Software Architect specializing in designing and developing web applications.",
    },
  };

  const currentMeta = metaData[language];

  return (
    <Head>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      <meta name="keywords" content={currentMeta.keywords} />
      <meta property="og:title" content={currentMeta.ogTitle} />
      <meta property="og:description" content={currentMeta.ogDescription} />
      <meta property="og:url" content={currentMeta.ogUrl} />
      <meta property="og:locale" content={currentMeta.ogLocale} />
      <meta name="twitter:title" content={currentMeta.twitterTitle} />
      <meta name="twitter:description" content={currentMeta.twitterDescription} />
    </Head>
  );
}
