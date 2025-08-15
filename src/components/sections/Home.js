// Home.jsx
import { useSetContent } from "@/src/hooks/useSetLanguage";
import home from "@/src/data/headerHome.json";

const Home = ({ language }) => {
  const content = useSetContent(home, language);
  const { title, subtitle } = content.pages[0];

  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            {title.map((word, index) => (
              <TitleWord key={index} word={word} index={index} subtitle={index === 1 ? subtitle : null} />
            ))}
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

const TitleWord = ({ word, index, subtitle }) => {
  // Primera palabra con punto
  if (index === 0) {
    return (
      <span>
        <span className="animated-layer">
          {word}
          <span>.</span>
        </span>
      </span>
    );
  }

  // Segunda palabra con subtitle
  if (index === 1) {
    return (
      <span className="position-relative">
        <span className="animated-layer">{word}</span>
        {subtitle && <span className="intro animated-layer">{subtitle}</span>}
      </span>
    );
  }

  return (
    <span>
      <span className="animated-layer">{word}</span>
    </span>
  );
};

export default Home;
