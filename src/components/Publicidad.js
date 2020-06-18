import React from 'react';

const Publicidad = ({imagen}) => {
    return ( 
        <div className="carousel-item" data-interval="5000">
            <img src={imagen} className="d-block w-100" alt="..." />
        </div>
     );
}
 
export default Publicidad;