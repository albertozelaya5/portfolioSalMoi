import { useEffect } from "react";

const Home = ({ content }) => {
  const { title } = content;

  useEffect(() => {
    const elements = document.querySelectorAll(".animated-layer");

    const ensureClasses = (el) => {
      el.classList.add("animated", "fadeInUp");
    };

    // Ponemos las clases al inicio
    elements.forEach(ensureClasses);

    // Observador que las re-agrega si se borran
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const el = mutation.target;
          ensureClasses(el);
        }
      });
    });

    elements.forEach((el) => observer.observe(el, { attributes: true, attributeFilter: ["class"] }));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                {title.split(".")[0]}
                <span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer">Front-end Developer with 7 years experience based in London</span>
            </span>
            <span>
              <span className="animated-layer">Steven</span>
            </span>
          </h1>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
    </section>
  );
};

export default Home;
