import React from "react";
import ReactDOM from "react-dom";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
// import Projects from './Components/Projects';
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Components/Themes";
import { GlobalStyles } from "./Components/globalStyles";

// import Projects from './Components/TEMP';

//  <--------css files -------->
import "./css/bootstrap.min.css";
import "./js/fancybox/jquery.fancybox.css";
import "./css/font-awesome.css";
import "./css/animate.css";
import "./css/style.css";

// import 'react-responsive-carousel/lib/styles/carousel.min.css';

//  <--------js files -------->
import "jquery/dist/jquery.min.js";
import "bootstrap";
import "./js/custom.js";
ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <>
    <GlobalStyles/>
      <Landing />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
