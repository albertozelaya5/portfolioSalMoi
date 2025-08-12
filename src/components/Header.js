const Header = ({ content }) => {
  const {
    pagesTitles: [home, about, portfolio, contact],
  } = content;

  return (
    <header>
      {/* Desktop Menu Starts */}
      {/* <div className="header-inner hide-mobile"> */}
      <div className="header-inner hide-mobile animated my-fade-style">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  {home}
                </span>
              </li>
              <li>
                <span id="about-link">{about}</span>
              </li>
              <li>
                <span id="portfolio-link">{portfolio}</span>
              </li>
              <li>
                <span id="contact-link">{contact}</span>
              </li>
              <li>
                <span id="blog-link">Blog</span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email : <a href="mailto:">moises.aguilar@ideewe.com</a>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>{home}</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>{about}</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>{portfolio}</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>{contact}</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};
export default Header;
