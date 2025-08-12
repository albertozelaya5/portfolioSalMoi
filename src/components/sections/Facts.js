import { useSetContent } from "@/pages/api/useSetLanguage";
import myResumee from "@/src/data/myresumee.json";

const Facts = ({ language }) => {
  const {
    stats: { yearsOfExperience, happyCustomers, languagesFrameworksLearned, completedProjects, awardsWon },
  } = useSetContent(myResumee, language);

  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {/* SINGE FACT ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInLeft wow" data-wow-offset={200}>
          <div>
            <div>
              <h3>{yearsOfExperience[1]}</h3>
              <p>{yearsOfExperience[0]}</p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInRight wow" data-wow-offset={200}>
          <div>
            <div>
              <h3>{completedProjects[1]}</h3>
              <p>{completedProjects[0]}</p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInLeft wow" data-wow-offset={200}>
          <div>
            <div>
              <h3>{happyCustomers[1]}</h3>
              <p>{happyCustomers[0]}</p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInRight wow" data-wow-offset={200}>
          <div>
            <div>
              <h3>1</h3>
              <p>{awardsWon[1]}</p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInLeft wow" data-wow-offset={200}>
          <div>
            <div>
              <h3>{languagesFrameworksLearned[1]}</h3>
              <p>{languagesFrameworksLearned[0]}</p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
      </div>
      <img alt="" className="z-1 hide-mobile opposite-separator" src="assets/separator-opposite.png" />
    </section>
  );
};
export default Facts;
