import '../css/styles2.css';

import ItemPortfolio from "./itemPortfolio";
import moviestoreIMG from '../img/moviestore.png';
import flightGearIMG from '../img/flightGear.png';
import getFitnessIMG from '../img/GetFitness.jpg';
import comingSoonIMG from '../img/comingsoon.png';
import robotIMG from '../img/robot.jpg';

export default function Projects(){
    return (

        <section className="page-section portfolio" id="Portfolio">
        <div className="container">
          {/* Portfolio Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon"><i className="fa fa-suitcase" /></div>
            <div className="divider-custom-line" />
          </div>
          {/* Portfolio Grid Items*/}
          <div className="row justify-content-center">
          <ItemPortfolio context="Java | JavaFX | Server-Client | Design Patterns" name="Flight Simulator MVVM" imgSRC={flightGearIMG} gitRef="https://github.com/yariv245/FlightGear"/>
          <ItemPortfolio context="ASP.NET | JavaScript | HTML5 | jQuery | CSS" name="Movie Store MVC" imgSRC={moviestoreIMG} gitRef="https://github.com/afikmenashe21/MovieStore"/>
          <ItemPortfolio context="Android | Java | SQLite | Firebase" name="GetFitness" imgSRC={getFitnessIMG} gitRef="https://bitbucket.org/AfikMenashe/getfitness/src/master/"/>
          
          <ItemPortfolio context="React-Native | ROS" name="Robot Remote Control" imgSRC={robotIMG} gitRef="https://github.com/afikmenashe21/Robot-remote-POC-ReactNative"/> 
          <ItemPortfolio context="ReactJS | Angular | Express | MongoDB | NodeJS" name="JustAsk MERN" imgSRC={comingSoonIMG} gitRef="https://bitbucket.org/AfikMenashe/justask/src/master/"/>    
          <ItemPortfolio context="React-Native" name="CoopShot - Client" imgSRC={comingSoonIMG} gitRef="https://bitbucket.org/AfikMenashe/coopshot-client/src/master/"/>
         
          <ItemPortfolio context="NodeJS | Express | MongoDB | Cloudinary" name="CoopShot - Server" imgSRC={comingSoonIMG} gitRef="https://bitbucket.org/AfikMenashe/coopshot-client/src/master/"/>
          </div>
        </div>
      </section>
    );
}