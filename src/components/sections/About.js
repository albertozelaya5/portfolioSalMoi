// About.jsx
import { useSetContent } from "@/src/hooks/useSetLanguage";
import about from "@/src/data/about.json";
import myResumee from "@/src/data/myResumee.json";

const About = ({ language }) => {
  const aboutContent = useSetContent(about, language);
  const resumeeContent = useSetContent(myResumee, language);

  const personalInfo = aboutContent.pages[0];
  const skillsInfo = aboutContent.pages[1];
  const { experiences, education, head: headResumee } = resumeeContent.resumee;

  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/profilePicture.png" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}

        {/* INFO STARTS */}
        <div>
          <h2>
            {personalInfo.name.map((namePart, index) => (
              <span key={index}>
                <span className="animated-layer fade-in-up-animation fadeInUp wow">{namePart}</span>
              </span>
            ))}
          </h2>

          <div className="infos">
            <PersonalInfoColumn items={personalInfo.infoColumns[0]} />
            <PersonalInfoColumn items={personalInfo.infoColumns[1]} />
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}

      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">{skillsInfo.head}</span>
            </span>
          </h3>
        </div>

        <div className="skills-content">
          {skillsInfo.skillGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.map((skill, skillIndex) => (
                <SkillItem key={skill.id} skill={skill} isEven={skillIndex % 2 === 0} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* SKILLS ENDS */}

      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        <div className="custom-title fadeInUp wow">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">{headResumee}</span>
            </span>
          </h3>
        </div>

        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {experiences.map((experience, index) => (
              <TimeLineCard
                key={experience.date}
                position={experience.position}
                company={experience.company}
                date={experience.date}
                index={index}
              />
            ))}

            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>{education.degree}</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>{education.date}</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>{education.institution}</span>
                  </p>
                </div>
              </div>
            </li>
            <li />
          </ol>
        </div>
      </div>
      {/* RESUME ENDS */}
      <img alt="mobile-separator" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

// Componente para columnas de información personal
const PersonalInfoColumn = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <span>
          <span className="animated-layer fade-in-up-animation fadeInUp wow">
            <span>{item.label} :</span>
            <span>{item.value}</span>
          </span>
        </span>
      </li>
    ))}
  </ul>
);

// Componente para items de habilidades
const SkillItem = ({ skill, isEven }) => (
  <div
    className={`animated-layer fade-in-${isEven ? "down" : "up"}-animation ${
      isEven ? "fadeInLeft" : "fadeInRight"
    } wow`}
  >
    <span>
      <i className={skill.icon} />
    </span>
    <h4>{skill.name}</h4>
  </div>
);

// Componente para timeline
function TimeLineCard({ date, position, company, index }) {
  const even = (index + 1) % 2;

  return (
    <li>
      <div className={`animated-layer fade-in-${!!even ? "up" : "down"}-animation fadeInUp wow`}>
        <div className="experience">
          <h4>{position}</h4>
          <p>
            <i className="fa-regular fa-clock" />
            <span>{date}</span>
          </p>
          <p>
            <i className="fa-regular fa-building" />
            <span>{company}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default About;
