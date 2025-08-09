import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";
import { Fragment } from "react";
import useSetLanguage from "./api/useSetLanguage";

const App = function ({ Component, pageProps }) {
  const [content, setLanguage] = useSetLanguage();
  console.log("app",content);

  return (
    <Fragment>
      <SalimovHead />
      {/* <Switcher setLanguage={setLanguage} /> */}
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
