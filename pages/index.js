import { Fragment, useEffect, useState } from "react";
import Head from "next/head";

import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Clients from "@/src/components/sections/Clients";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Facts from "@/src/components/sections/Facts";
import Home from "@/src/components/sections/Home";
import Portfolio from "@/src/components/sections/Portfolio";
import Separator from "@/src/components/Separator";
import { jqueryFunction } from "@/src/utilits";

const Index = function ({ initialLanguage = "es" }) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    jqueryFunction();
  }, []);

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
    <Fragment>
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
      <div className="page-content">
        <Header language={language} setLanguage={setLanguage} />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home language={language} />
            <About language={language} />
            <Separator type={"down"} />
            <Facts language={language} />
            <Separator type={"up"} />
            <Portfolio language={language} />
            <Separator type={"down"} />
            <Clients language={language} />
            <Separator type={"up"} />
            <Contact language={language} />
            <Separator type={"down"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};

Index.getInitialProps = async (ctx) => {
  const language = ctx.query.lang || ctx.query.language || "es";

  return {
    language: language,
    initialLanguage: language,
  };
};

export default Index;
