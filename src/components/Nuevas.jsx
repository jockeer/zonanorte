import React, {useState} from 'react'

import NuevaNoticia from './NuevaNoticia'

import '../css/nuevas.css'

import portada from '../img/portada.jpeg'
import editorial from '../img/ZZB.png'


const Nuevas = () => {

    const [ nuevaNoticia , setNuevaNoticia ] = useState([
        { id: 1, img: '', titulo:'Alzan la basura normal en las calles', subtitulo:'Subtitulo', text:'El director de Servicios Públicos de la Alcaldía, Samuel Lara, indicó que el recojo de los desechos se realiza de manera normal en las calles del casco viejo, 2do y 3er anillo de la población de acuerdo a una programación. En la jornada de ayer, el camión y personal alzaba las impurezas en la zona del Banco Unión, avenida Barrientos y avenida Pampa de la Madre. De acuerdo a esa repartición, la población genera diario 110 toneladas de basura entre orgánica e inorgánica.', categoria:'Deportes', fecha:'6/18/2020', publicado:'Erika Hurtado Goitia'},
        { id: 2, img: '', titulo:'Chacarita, desafiliado', subtitulo:'Subtitulo', text:'El director de Servicios Públicos de la Alcaldía, Samuel Lara, indicó que el recojo de los desechos se realiza de manera normal en las calles del casco viejo, 2do y 3er anillo de la población de acuerdo a una programación. En la jornada de ayer, el camión y personal alzaba las impurezas en la zona del Banco Unión, avenida Barrientos y avenida Pampa de la Madre. De acuerdo a esa repartición, la población genera diario 110 toneladas de basura entre orgánica e inorgánica.', categoria:'Deportes', fecha:'6/18/2020', publicado:'Erika Hurtado Goitia'},
        { id: 3, img: '', titulo:'Mauricio Chajtur está motivado', subtitulo:'Subtitulo', text:'El director de Servicios Públicos de la Alcaldía, Samuel Lara, indicó que el recojo de los desechos se realiza de manera normal en las calles del casco viejo, 2do y 3er anillo de la población de acuerdo a una programación. En la jornada de ayer, el camión y personal alzaba las impurezas en la zona del Banco Unión, avenida Barrientos y avenida Pampa de la Madre. De acuerdo a esa repartición, la población genera diario 110 toneladas de basura entre orgánica e inorgánica.', categoria:'Deportes', fecha:'6/18/2020', publicado:'Erika Hurtado Goitia'},
        { id: 4, img: '', titulo:'‘Perdonazo’ tributario, aprobado', subtitulo:'Subtitulo', text:'El director de Servicios Públicos de la Alcaldía, Samuel Lara, indicó que el recojo de los desechos se realiza de manera normal en las calles del casco viejo, 2do y 3er anillo de la población de acuerdo a una programación. En la jornada de ayer, el camión y personal alzaba las impurezas en la zona del Banco Unión, avenida Barrientos y avenida Pampa de la Madre. De acuerdo a esa repartición, la población genera diario 110 toneladas de basura entre orgánica e inorgánica.', categoria:'Deportes', fecha:'6/18/2020', publicado:'Erika Hurtado Goitia'}
      ]);
      
    return ( 
        <section className="sectionNuevas">
            <div className="container">
                <div className="row">
                    <div className="col col-8">
                        <h1>Nuevas Noticias</h1>

                        {nuevaNoticia.map(noticia =>{
                            return <NuevaNoticia key={noticia.id} imagen={noticia.img} titulo={noticia.titulo} subtitulo={noticia.subtitulo} texto={noticia.text} categoria={noticia.categoria} fecha={noticia.fecha} publicado={noticia.publicado}/>
                        })}
                    </div>
                    <div className="col col-4">
                        <div className="card">
                            <div className="card-header">Diario de Hoy</div>
                            <div className="card-body">
                                <img src={portada} alt=""/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">Editorial</div>
                            <div className="card-body">
                                <img src={editorial} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Nuevas;