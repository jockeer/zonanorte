import React , {useState} from 'react';
import LogoBlanco from '../img/ZZB.png';
import LogoNegro from '../img/ZNN.jpg';

import Publicidad from './Publicidad';

import '../css/publicidad.css'

const Publicidades = () => {

    const [ publicidades , setPublicidades ] = useState([
        { id: 1, img: LogoBlanco},
        { id: 2, img: LogoNegro},
        { id: 3, img: LogoBlanco},
        { id: 4, img: LogoNegro}
      ]);

    return (  
        <section className="container">
            <div className="row">
                <div className="col col-4">
                    <img className="logoBlanco" src={LogoBlanco} alt="Logo"/>
                </div>
                <div className="col col-8">
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item active" data-interval="5000">
                                <img src={LogoNegro} className="d-block w-100" alt="..."/>
                            </div>
                            {publicidades.map(publicidad =>{
                                return <Publicidad key={publicidad.id} imagen={publicidad.img} />
                            })}
                            
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Publicidades;