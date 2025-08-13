import { Fragment, useEffect } from "react";

import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Blog from "@/src/components/sections/Blog";
import Clients from "@/src/components/sections/Clients";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Facts from "@/src/components/sections/Facts";
import Home from "@/src/components/sections/Home";
import Portfolio from "@/src/components/sections/Portfolio";
import Testimonials from "@/src/components/sections/Testimonials";
import Separator from "@/src/components/Separator";
import Switcher from "@/src/components/Switcher";
import { jqueryFunction } from "@/src/utilits";
import mainInfoLang from "src/data/mainInfo.json";

import { useSetLanguage } from "./api/useSetLanguage";

const Index = function () {
  const [content, setLanguage, language] = useSetLanguage(mainInfoLang);

  useEffect(() => {
    jqueryFunction();
  });

  return (
    <Fragment>
      <div className="page-content">
        <Header content={content} />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Switcher setLanguage={setLanguage} />
            <Home content={content} />
            <About language={language} />
            <Separator type={"down"} />
            <Facts language={language} />
            <Separator type={"up"} />
            <Portfolio language={language} />
            <Separator type={"down"} />
            {/* <Testimonials /> */}
            {/* <Separator type={"up"} /> */}
            <Contact language={language} />
            <Separator type={"up"} />
            <Clients />
            <Separator type={"down"} />
            <Blog />
            <Separator type={"up"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
