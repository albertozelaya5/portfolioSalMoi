import { useSetContent } from "@/pages/api/useSetLanguage";
import myResumee from "@/src/data/myResumee.json";

const Facts = ({ language }) => {
  const { stats } = useSetContent(myResumee, language);

  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {stats.factItems.map((fact, index) => (
          <FactItem key={fact.id} fact={fact} animationDirection={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} />
        ))}
      </div>
      <img alt="" className="z-1 hide-mobile opposite-separator" src="assets/separator-opposite.png" />
    </section>
  );
};

const FactItem = ({ fact, animationDirection }) => (
  <div className={`animated-layer fade-in-right-animation ${animationDirection} wow`} data-wow-offset={200}>
    <div>
      <div>
        <h3>{fact.value}</h3>
        <p>{fact.label}</p>
      </div>
    </div>
  </div>
);

export default Facts;
