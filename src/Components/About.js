import profile from "../img/profile copy.JPG";
function About() {
  return (
    <section id="aboutUs">
      {/*Aboutus*/}
      <div className="inner_wrapper aboutUs-container fadeInLeft animated wow">
        <div className="container">
          <h2 style={{ color: "rgb(174, 194, 211)" }}>Who Am I</h2>
          <h6>
            I am Shaked Ben Yechezkel, Third-year Computer Science (B.sc) student.
          </h6>
          <div className="inner_section">
            <div className="row">
              <div className="col-lg-12 about-us">
                <div className="row">
                  <div className="col-md-6">
                    {" "}
                    <img className="img-responsive" src={profile} alt="" />{" "}
                  </div>
                  {/* /.col-md-6 */}
                  <div className="col-md-6">
                    <h4 style={{ color: 'rgb(230,230,230)' }}> <strong>Experience</strong></h4>
                    <p style={{ color: 'rgb(200,200,200)' }}>
                      <strong>
                        {/* Software Developer - POL , 2020-2021 */}
                      </strong>
                      {/* <div style={{ height: 10 }} />
                      One of the first developers working on an advanced BI tool, which interacts with various relational databases simultaneously
                      <div style={{ height: 10 }} />
                      Designed and developed integral features of our software , including many client-facing features such as DataFrame transformation and data Drag &amp; Drop
                      <div style={{ height: 10 }} />
                      Maintained the core service, helped fixing bug and doing code reviews. Implemented best practices and design patterns such as Observer, Concurrency, Singleton and Adapter
                      <div style={{ height: 10 }} />
                      Handled the responsibility of ongoing engineering demands */}
                    </p>

                    {/* <p style={{ color: 'rgb(200,200,200)' }}>
                      <strong>Web developer - Blade Ranger , 2020</strong>
                      <div style={{ height: 10 }} />
                      Took part of the software development department of an
                      outbreaking project which involved remote control of an
                      artificial intelligence robots
                      <div style={{ height: 10 }} />
                      Developing and maintaining website and mobile
                      application from concept through deployment. Working with:
                      JavaScript-ES6, ROS at a Linux (Ubuntu) platform
                      <div style={{ height: 10 }} />
                      Participated in product design discussions, required a
                      deep understanding of event-driven architecture included
                      web technologies as well as robot control systems(ROS)
                    </p> */}

                    {/* <br /> */}
                    {/* <br /> */}
                    {/* <br /> */}
                    <h4 style={{ color: 'rgb(230,230,230)' }}><strong>Education</strong></h4>
                    <p style={{ color: 'rgb(200,200,200)' }}>
                      Computer Science (B.sc) Student - The College of
                      Management Academic Studies
                      {/* <br /> */}
                      {/* 2018 - Present */}
                      {/* <br />
                      ● Third-year student.
                      <br /> */}
                    </p>

                    {/* /.about-us-list */}
                  </div>
                  {/* /.col-md-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.col-lg-12 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
