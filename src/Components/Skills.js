import Gallery from "./Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3Alt,
  faJava,
  faJsSquare,
  faNodeJs,
  faHtml5,
  faCuttlefish,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import mongo2 from "../img/mongo2.png";
import cSharp from "../img/cSharp.png";
import c from "../img/c.png";
import cpp from "../img/cpp.png";
import nodeJs from "../img/nodejs.png";
import reactImg from "../img/react.png";
import javaImg from "../img/java.png";
import jsImg from "../img/javascript.png";
import htmlImg from "../img/html.png";
import cssImg from "../img/cssimg.png";
import angularImg from "../img/angular.png";
import androidImg from "../img/android.png";
import mysql from "../img/mysql.png";
import github from "../img/github.png";
import bitbucket from "../img/bitbucket.png";
import trello from "../img/trello.png";
import linux from "../img/linux.png";

function Skills() {
  const handleDragStart = (e) => e.preventDefault();

  const languages = [
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={javaImg} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={jsImg} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={cpp} style={{ alignSelf: "center" }} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={c} style={{ alignSelf: "center" }} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={cSharp} style={{ alignSelf: "center" }} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={htmlImg} style={{ alignSelf: "center" }} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={cssImg} style={{ alignSelf: "center" }} />
    </div>,
  ];

  const frameworks = [
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={reactImg} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={angularImg} style={{ alignSelf: "center" }} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={nodeJs} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={androidImg} />
    </div>,
  ];

  const dbToolsVcs = [
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={mysql} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={mongo2} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={github} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={bitbucket} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={linux} />
    </div>,
    <div
      onDragStart={handleDragStart}
      className="service_icon icon3  delay-03s animated wow zoomIn"
    >
      <img src={trello} />
    </div>,
  ];
  return (
    <section style={{ backgroundColor: "rgb(32,35,37)" }} id="service">
      <div className="container">
        <h2 style={{color:"rgb(174, 194, 211)"}} >Skills</h2>
        <div className="service_wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="service_icon">
                {" "}
                <span >
                  <Gallery items={dbToolsVcs} />{" "}
                </span>{" "}
              </div>
              <div className="service_block">
                <h3 style={{ color: "rgb(174, 194, 211)", backgroundColor: "rgb(32,35,37)" }} className="animated fadeInUp wow" >DBs,Tools,Source-Controls</h3>
                <p className="animated fadeInDown wow"> </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_icon">
                {" "}
                <span >
                  <Gallery items={frameworks} />{" "}
                </span>{" "}
              </div>
              <div className="service_block">
                <h3 style={{ color: "rgb(174, 194, 211)",backgroundColor: "rgb(32,35,37)" }} className="animated fadeInUp wow">
                  Development frameworks
                </h3>
                <p className="animated fadeInDown wow"> </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_icon">
                {" "}
                <span>
                  <Gallery items={languages} direction="ltr" />
                </span>{" "}
              </div>
              <div className="service_block">
                <h3 style={{ color: "rgb(174, 194, 211)",backgroundColor: "rgb(32,35,37)" }} className="animated fadeInUp wow">Programming languages</h3>
                <p className="animated fadeInDown wow"> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
