import { useSetContent } from "@/pages/api/useSetLanguage";
import home from "@/src/data/headerHome.json";

const Home = ({ language }) => {
  const {
    pages: [{ title, subtitle }],
  } = useSetContent(home, language);

  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                {title?.[0]}
                <span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">{title?.[1]}</span>
              <span className="intro animated-layer">{subtitle}</span>
            </span>
            <span>
              <span className="animated-layer">{title?.[2]}</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
