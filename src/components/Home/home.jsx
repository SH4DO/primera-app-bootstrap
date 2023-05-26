import RM1 from '../../assets/RickandMorty1.jpg';
import RM2 from '../../assets/RickandMort2.jpg';
import RM3 from '../../assets/RickandMorty3.jpg';
import './home.css';

function Home () {
    return(
        <div className='container-fluid text-center'>
            <h1 className='display-1 fw-bold font-monospace'>RICK AND MORTY</h1><br/>
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-10">
                    <div id="carouselExample" className="carousel carousel-dark slide">
                        <div className="carousel-inner carrusel">
                            <div className="carousel-item active">
                                <img src={RM1} className="d-block w-100" alt="Poster 1"/>
                            </div>
                            <div className="carousel-item">
                                <img src={RM2} className="d-block w-100" alt="Poster 2"/>
                            </div>
                            <div className="carousel-item">
                                <img src={RM3} className="d-block w-100" alt="Poster 3"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <p className='fs-3 font-sans-serif'>
                    Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana de animación para adultos creada por Justin Roiland y
                    Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network.
                    <br /><br />La serie sigue las desventuras de un científico, Rick
                    Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales,
                    temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de
                    Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.
                </p>
            </div>
        </div>
    );
}

export default Home;