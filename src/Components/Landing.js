import DownloadLink from "react-download-link";
function Landing() {
  return (
    <section id="hero_section" className="top_cont_outer">
      <div className="hero_wrapper">
        <div className="container">
          <div className="hero_section">
            <div className="row">
              <div className="col-md-12">
                <div className="top_left_cont intro zoomIn wow animated">
                  <h2>
                    I AM SHAKED
                    <br /> <strong>WELLCOME TO MY PORTFOLIO</strong>
                  </h2>
                  <p>
                    Looking for: Full-time Development job. <br />
                  </p>
                  <div className="underline" />
                  <ul className="social_links">
                    <li
                      className="twitter animated bounceIn wow delay-02s animated"
                      style={{
                        visibility: "visible",
                        animationName: "bounceIn",
                      }}
                    >
                      <a href="https://www.linkedin.com/in/shaked-ben-yechezkel-29a935197/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li
                      id="My afik id"
                      className="twitter animated bounceIn wow delay-02s animated"
                      style={{
                        visibility: "visible",
                        animationName: "bounceIn",
                      }}
                    >
                      {/* <a href="https://bitbucket.org/AfikMenashe/">
                        <i className="fa fa-bitbucket" />
                      </a> */}
                    </li>
                    <li
                      className="facebook animated bounceIn wow delay-03s animated"
                      style={{
                        visibility: "visible",
                        animationName: "bounceIn",
                      }}
                    >
                      <a href="https://github.com/afikmenashe21">
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li
                      className="pinterest animated bounceIn wow delay-04s animated"
                      style={{
                        visibility: "visible",
                        animationName: "bounceIn",
                      }}
                    >
                      <a href="mailto: menasheafik21@gmail.com">
                        <i className="fa fa-envelope" />
                      </a>
                    </li>
                    <li
                      className="gplus animated bounceIn wow delay-05s animated"
                      style={{
                        visibility: "visible",
                        animationName: "bounceIn",
                      }}
                    >
                      <a href="tel: +972528214684">
                        <i className="fa fa-phone" />
                      </a>
                    </li>
                    <li
                      className="gplus animated bounceIn wow delay-05s animated"
                      style={{
                        visibility: "visible",
                        animationName: "bounceIn",
                      }}
                    >
                      <a download href="shakedcv.pdf">
                        <i className="fa fa-download" />
                      </a>
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
