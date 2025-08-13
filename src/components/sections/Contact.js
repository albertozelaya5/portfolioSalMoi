// Contact.jsx
import { useSetContent } from "@/pages/api/useSetLanguage";
import contact from "@/src/data/contact.json";

const Contact = ({ language }) => {
  const content = useSetContent(contact, language);

  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">{content.head}</span>
          </span>
        </h3>
      </div>
      {/* TITLE ENDS */}

      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {content.contactItems.slice(0, 2).map((item, index) => (
            <ContactItem
              key={item.id}
              item={item}
              animationClass={index % 2 === 0 ? "fade-in-down-animation" : "fade-in-up-animation"}
            />
          ))}
        </div>
        <div>
          {content.contactItems.slice(2).map((item, index) => (
            <ContactItem
              key={item.id}
              item={item}
              animationClass={index % 2 === 0 ? "fade-in-down-animation" : "fade-in-up-animation"}
            />
          ))}
        </div>
      </div>
      {/* CONTACTS ENDS */}
    </section>
  );
};

const ContactItem = ({ item, animationClass }) => {
  if (item.type === "social") {
    return (
      <div className={`animated-layer ${animationClass} fadeInUp wow`}>
        <i className={item.icon} />
        <span className="small-text">{item.label}</span>
        <ul className="social">
          {item.socialLinks.map((link) => (
            <li key={link.platform}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Para elementos con enlaces (phone, WhatsApp)
  if (item.link) {
    return (
      <div className={`animated-layer ${animationClass} fadeInUp wow`}>
        <i className={item.icon} />
        <a href={item.link} style={{ textDecoration: "none", color: "inherit" }}>
          <p>
            <span className="small-text">{item.label}</span>
            {item.value}
          </p>
        </a>
      </div>
    );
  }

  return (
    <div className={`animated-layer ${animationClass} fadeInUp wow`}>
      <i className={item.icon} />
      <p>
        <span className="small-text">{item.label}</span>
        {item.value}
      </p>
    </div>
  );
};

export default Contact;
