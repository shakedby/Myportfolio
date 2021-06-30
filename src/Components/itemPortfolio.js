import '../css/styles2.css';
export default function ItemPortfolio({imgSRC,name,context,gitRef}){
    return (

        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4" onClick={()=>window.open(gitRef, "_blank")}  style={{maxHeight:100, maxWidth:200}}>
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-info-circle fa-3x" /></div>
          </div>
          <img className="img-fluid" src={imgSRC} alt="" />
        </div>
        <br></br>
        <div class="underItemPortfolio">
        <h2 className="text-secondary mb-0" style={{fontSize: '1.6rem',fontWeight:300, lineHeight: '2rem'}}>{name}</h2>
            <h2 className="text-secondary mb-0" style={{fontSize: '1.1rem',fontWeight:500, lineHeight: '2rem'}}>{context}</h2>
          </div>
          <br></br>
      </div>
    );
}