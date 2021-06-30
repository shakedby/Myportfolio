import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5vlnh14",
        "template_j7ug92e",
        e.target,
        "user_6RkbmKEr1yZribjv6d2I9"
      )
      .then(document.getElementById("contactForm").reset());
  }

  return (
    <footer
      style={{ backgroundColor: "#202325" }}
      className="footer_wrapper"
      id="contact"
    >
      <div className="container">
        <section className="page_section contact" id="contact">
          <div className="contact_section">
            <h2 style={{ color: "rgb(174, 194, 211)" }}>Get In Touch</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 wow fadeInLeft">
              <div className="contact_info">
                <div className="detail">
                  <h4>Shaked Ben Yechezkel</h4>
                  <p>Rishon Lezion, Israel</p>
                </div>
                <div className="detail">
                  <h4>call me</h4>
                  <p>+972-528214684</p>
                </div>
                <div className="detail">
                  <h4>Email me</h4>
                  <p>by181996@gmail.com</p>
                </div>
              </div>
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
                  className="facebook animated bounceIn wow delay-03s animated"
                  style={{
                    visibility: "visible",
                    animationName: "bounceIn",
                  }}
                >
                  {/* <a href="https://bitbucket.org/afikmenashe/">
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
                  <a href="https://github.com/shakedby">
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
                  <a href="tel: +972-528214684">
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
              </ul>
            </div>
            <div className="col-lg-8 wow fadeInLeft delay-06s">
              <form
                name="sentMessage"
                id="contactForm"
                noValidate
                onSubmit={sendEmail}
              >
                <div className="control-group">
                  <div className="controls">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name"
                      name="user_name"
                    />
                    <p className="help-block" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email"
                      name="user_email"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <textarea
                      rows={10}
                      cols={100}
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      required
                      data-validation-required-message="Please enter your message"
                      minLength={5}
                      data-validation-minlength-message="Min 5 characters"
                      maxLength={999}
                      style={{ resize: "none" }}
                      defaultValue={""}
                      name="message"
                    />
                  </div>
                </div>
                <div id="success"> </div> {/* For success/fail messages */}
                <button type="submit" className="btn btn-primary pull-right">
                  Send
                </button>
                <br />
              </form>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Contact;
