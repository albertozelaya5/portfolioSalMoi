import portfolio from "@/src/data/myPortfolio.json";
import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSetContent } from "@/pages/api/useSetLanguage";

const Portfolio = ({ language }) => {
  const {
    myPortfolio: { head, projects },
  } = useSetContent(portfolio, language);

  return (
    <section className="portfolio main-section flex-column-mobile" id="portfolio">
      {/* TITLE STARTS */}
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">{head}</span>
          </span>
        </h3>
      </div>
      {/* TITLE ENDS */}

      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* RENDERIZAR TODOS LOS PROYECTOS DINÁMICAMENTE */}
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="single-item swiper-slide">
            {/* ITEM MAIN CONTENT STARTS */}
            <div className="main-content">
              <img className="img-fluid" src="assets/portfolio/project-1.jpg" alt={project.name?.[1]} />
            </div>
            {/* ITEM MAIN CONTENT ENDS */}

            {/* ITEM DETAILS STARTS */}
            <div className="details">
              <h3>{project.name?.[1]}</h3>
              <div>
                <ul>
                  <li>
                    <span>
                      <i className="fa-regular fa-file-lines" /> {project.name?.[0]} :
                    </span>
                    <span>{project.type}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-regular fa-user" /> {project.client?.[0] || "Client"} :
                    </span>
                    <span>{project.client?.[1]}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-code-branch" /> {project.technologies?.[0] || "Technologies"} :
                    </span>
                    <span>{project.technologies?.[1]}</span>
                  </li>
                </ul>
              </div>
              <a href="#" target="_blank" className="custom-btn">
                <span>
                  preview <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>
              </a>
            </div>
            {/* ITEM DETAILS ENDS */}
          </SwiperSlide>
        ))}

        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>

      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default Portfolio;
