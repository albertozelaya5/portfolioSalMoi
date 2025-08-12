import { useSetContent } from "@/pages/api/useSetLanguage";
import about from "@/src/data/about.json";
import myResumee from "@/src/data/myresumee.json";

const About = ({ language }) => {
  const {
    pages: [
      { name, age, nationality, freelance, languages, address, phone, email },
      {
        head: headSkills,
        skills: [aspNet, microservices, restful, devops, sql, python, clouds, javascript],
      },
    ],
  } = useSetContent(about, language);

  const {
    resumee: { experiences, education, head: headResumee },
  } = useSetContent(myResumee, language);

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
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">{name[0]}</span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">{name[1]}</span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>{age[0]} :</span>
                    <span>{age[1]}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>{nationality[0]} :</span>
                    <span>{nationality[1]}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>{freelance[0]} :</span>
                    <span>{freelance[1]}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>{languages[0]} :</span>
                    <span>{languages[1]}</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>{address[0]} :</span>
                    <span>Honduras, Francisco Morazán</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>{phone[0]} :</span>
                    <span>{phone[1]}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>{email[0]} :</span>
                    <span>{email[1]}</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">{headSkills}</span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-csharp-plain" />
              </span>
              <h4>{aspNet}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-docker-plain" />
              </span>
              <h4>{microservices}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-kubernetes-plain" />
              </span>
              <h4>{devops}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-amazonwebservices-plain-wordmark" />
              </span>
              <h4>{restful}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-mysql-plain" />
              </span>
              <h4>{sql}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-python-plain"></i>
              </span>
              <h4>{python}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-googlecloud-plain"></i>
              </span>
              <h4>{clouds}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-javascript-plain"></i>
              </span>
              <h4>{javascript}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">{headResumee}</span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            {experiences.map((experience, index) => {
              const { position, company, date } = experience;

              return <TimeLineCard key={date} position={position} company={company} date={date} index={index} />;
            })}

            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
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
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img alt="mobile-separator" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

function TimeLineCard({ date, position, company, index }) {
  const even = (index + 1) % 2;

  return (
    <li key={date}>
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
