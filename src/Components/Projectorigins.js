import moviestoreIMG from '../img/moviestore.png';
import GetFitnessIMG from '../img/GetFitness.jpg';
import JustAskIMG from '../img/comingsoon.png';
import CoopShotIMG from '../img/finalsoon.jpeg';

function Projects() {
  return (
    <section id="Portfolio" className="content">
      {/* Container */}
      <div className="container portfolio_title">
        {/* Title */}
        <div className="section-title">
          <h2>Projects</h2>
          <h6></h6>
          {/* <h6>
            Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
            ipsum
          </h6> */}
        </div>
        {/*/Title */}
      </div>
      {/* Container */}
      <div className="portfolio-top" />
      {/* Portfolio Filters */}
      <div className="portfolio">
        {/* Portfolio Wrapper */}
        <div
          className="isotope fadeInLeft animated wow grid"
          style={{ position: 'relative', overflow: 'hidden', height: '480px' }}
          id="portfolio_wrapper"
        >
          {/* Portfolio Item */}
          <figure
            className="portfolio-item one-four appleIOS isotope-item effect-oscar"
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
          >
            <div className="portfolio_img">
              <img src={moviestoreIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a
                  href="https://github.com/afikmenashe21/MovieStore"
                  className="fancybox"
                >
                  <h2>MovieStore</h2>
                  <p>MovieStore is ASP.Net Core MVC application</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/*/Portfolio Item */}
          {/* Portfolio Item*/}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(337px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  design isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src={GetFitnessIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href={GetFitnessIMG} className="fancybox">
                  <h2>Coming soon..</h2>
                  <p>GetFitness is Android application</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/*/Portfolio Item */}
          {/* Portfolio Item */}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(674px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  design  isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src={CoopShotIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href={CoopShotIMG} className="fancybox">
                  <h2>Coming soon..</h2>
                  <p>JustAsk is React,NodeJS web application</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/*/Portfolio Item*/}
          {/* Portfolio Item*/}
          <figure
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              transform: 'translate3d(1011px, 0px, 0px) scale3d(1, 1, 1)',
              width: '337px',
              opacity: 1,
            }}
            className="portfolio-item one-four  android  prototype web isotope-item effect-oscar"
          >
            <div className="portfolio_img">
              {' '}
              <img src={CoopShotIMG} alt="Portfolio 1" />{' '}
            </div>
            <figcaption>
              <div>
                <a href={CoopShotIMG} className="fancybox">
                  <h2>Coming soon..</h2>
                  <p>CoopShot is B.sc Final project</p>
                </a>
              </div>
            </figcaption>
          </figure>
          {/* Portfolio Item */}
        </div>
        {/*/Portfolio Wrapper */}
      </div>
      {/*/Portfolio Filters */}
      <div className="portfolio_btm" />
      <div id="project_container">
        <div className="clear" />
        <div id="project_data" />
      </div>
    </section>
  );
}

export default Projects;
