import React from 'react';

const NavBar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a class="navbar-brand" href="#">Inicio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">                     
                        <li class="nav-item">
                            <a class="nav-link" href="#">Montero</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Santa Cruz</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Localidades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Seguridad</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Deportes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sociales</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nacional</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Internacional</a>
                        </li>

                    </ul>
                </div>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

            </div>
        </nav> 
  );
}
 
export default NavBar;