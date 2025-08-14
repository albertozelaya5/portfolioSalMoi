import { Fragment, useEffect, useState } from "react";

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
import DynamicMetaHead from "./DynamicMetaHead";
import { jqueryFunction } from "@/src/utilits";

const Index = function ({ initialLanguage = "es" }) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    jqueryFunction();
  }, []);

  return (
    <Fragment>
      <DynamicMetaHead language={language} />
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
