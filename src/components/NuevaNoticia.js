import React from 'react';

import '../css/nuevaNoticia.css'

const NuevaNoticia = (props) => {
    return ( 
        <div className="nuevaNotica">
            <figure>
                <img src='' alt='foto'/>
            </figure>
            <div className="info">
                <h4 className='titulo'>{props.titulo}</h4>
                <h6 className='subtitulo'>{props.subtitulo}</h6>
                <h6 className='fecha'>{props.fecha} <span className='categoria'> {props.categoria}</span></h6>
                <p>{props.texto}</p>
                <p><b><small>{props.publicado}</small></b></p>
               
            </div>
        </div>
     );
}
 
export default NuevaNoticia;