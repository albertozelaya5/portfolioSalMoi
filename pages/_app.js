import Preloader from "@/src/components/Preloader";
import { Fragment } from "react";
import StaticHead from "./StaticHead";

const App = function ({ Component, pageProps }) {
  return (
    <Fragment>
      <StaticHead />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
