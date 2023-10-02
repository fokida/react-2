import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="top">
        <div className="logo">moja firma</div>
        <div className="menu">
          <ul className="list">
            <li className="list_menu">
              <a className="menu_1" href="#about">
                o nas
              </a>
            </li>
            <li className="list_menu">
              <a className="menu_1" href="#offer">
                oferta
              </a>
            </li>
            <li className="list_menu">
              <a className="menu_2" href="mailto:jansmieszek@oxw.pl">
                kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
