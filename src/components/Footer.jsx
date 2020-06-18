import React from 'react'
import '../css/footer.css'
import '../css/fontello.css'
import logo from '../img/ZNN.jpg'

const Footer = () => {

    const fecha = new Date().getFullYear();

    return ( 
        <footer className='footer'>
            <div className="container pie">
                <figure>
                    <img className='logo' src={logo} alt=""/>
                    <p className='descripcion'>Zona Norte, se presenta como un aporte a esa construcción de nuevos medios que desarrollen un tipo de periodismo, donde la ética, responsabilidad y veracidad de sus contenidos, sean los pilares del trabajo en todas sus áreas.</p>
                </figure>
                <div className="contactos">
                    <h4>Contactanos</h4>
                    <div className="contacto">
                        <h6>Nombre</h6>
                        <h6>Email</h6>
                    </div>
                    <div className="contacto">
                        <h6>Nombre</h6>
                        <h6>Email</h6>
                    </div>
                    <div className="contacto">
                        <h6>Nombre</h6>
                        <h6>Email</h6>
                    </div>
                    <div className="redesSociales">
                        <a className="twitter" target="_blank" href="https://twitter.com/zonanorte2020"><i className="icon-twitter"></i></a>
                        <a className="facebook" target="_blank" href="https://www.facebook.com/diariozonanorte.2020/"><i className="icon-facebook"></i></a>
                        <a className="linkedin" target="_blank" href="https://www.linkedin.com/feed/?trk=onboarding-landing"><i className="icon-linkedin"></i></a>
                        <a className="youtube" target="_blank" href="https://www.youtube.com/channel/UCDy-dzRmYKfC3LWi5uag8wQ?view_as=subscriber"><i className="icon-youtube"></i></a>
                        <a className="instagram" target="_blank" href="https://www.instagram.com/zonanortes2020/"><i className="icon-instagram"></i></a>
                    </div>
                </div>
                <div className="conocer">
                    <h4>¿Quienes Somos?</h4>
                    <button>Visitanos</button>
                </div>
            </div>
                <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>
     );
}
 
export default Footer;