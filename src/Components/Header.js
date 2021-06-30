function Header() {
  return (
    <header style={{ backgroundColor: "rgb(34,37,39)" }} id="header_wrapper">
      <div className="container">
        <div className="header_box">
          <nav className="navbar navbar-inverse" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                id="nav-toggle"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#main-nav"
              >
                {' '}
                <span className="sr-only">Toggle navigation</span>{' '}
                <span className="icon-bar" /> <span className="icon-bar" />{' '}
                <span className="icon-bar" />{' '}
              </button>
            </div>
            <div id="main-nav" className="collapse navbar-collapse navStyle">
              <ul className="nav navbar-nav" id="mainNav">
                <li className="active">
                  <a href="#hero_section" className="scroll-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#aboutUs" className="scroll-link">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#service" className="scroll-link">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#Portfolio" className="scroll-link">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="scroll-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
