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
import Switcher from "@/src/components/Switcher";
import { jqueryFunction } from "@/src/utilits";

const Index = function () {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    jqueryFunction();
  });

  return (
    <Fragment>
      <div className="page-content">
        <Header language={language} />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Switcher setLanguage={setLanguage} />
            <Home language={language} />
            <About language={language} />
            <Separator type={"down"} />
            <Facts language={language} />
            <Separator type={"up"} />
            <Portfolio language={language} />
            <Separator type={"down"} />
            {/* <Testimonials /> */}
            {/* <Separator type={"up"} /> */}
            <Clients />
            {/* <Blog /> */}
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
export default Index;
