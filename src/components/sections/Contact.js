// Contact.jsx
import { useSetContent } from "@/src/hooks/useSetLanguage";
import contact from "@/src/data/contact.json";
import useEmailMessage from "@/src/hooks/useEmailMessage";

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
              language={language}
              animationClass={index % 2 === 0 ? "fade-in-down-animation" : "fade-in-up-animation"}
            />
          ))}
        </div>
        <div>
          {content.contactItems.slice(2).map((item, index) => (
            <ContactItem
              key={item.id}
              item={item}
              language={language}
              animationClass={index % 2 === 0 ? "fade-in-down-animation" : "fade-in-up-animation"}
            />
          ))}
        </div>
      </div>
      {/* CONTACTS ENDS */}
    </section>
  );
};

const ContactItem = ({ item, animationClass, language }) => {
  const customHref = useEmailMessage(item.value, language);

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

  if (item.link || item.id === "email") {
    // Para elementos con enlaces (phone, WhatsApp, email)
    const href = item.id === "email" ? customHref : item.link;

    return (
      <div className={`animated-layer ${animationClass} fadeInUp wow`}>
        <i className={item.icon} />
        <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
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
