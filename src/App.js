import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Publicidades from './components/Publicidades'
import NavBar from './components/NavBar'
import Ultimas from './components/Ultimas'
import Nuevas from './components/Nuevas'



function App() {

  const [noticias, setNoticias]=useState([
    {id:1, titulo:'Titulo Noticia', subtitulo:'subtitulo', categoria:'cat', foto:'', fotografo: ''},
    {id:2, titulo:'Titulo Noticia', subtitulo:'subtitulo', categoria:'cat', foto:'', fotografo: ''},
    {id:3, titulo:'Titulo Noticia', subtitulo:'subtitulo', categoria:'cat', foto:'', fotografo: ''},
    {id:4, titulo:'Titulo Noticia', subtitulo:'subtitulo', categoria:'cat', foto:'', fotografo: ''},
    {id:5, titulo:'Titulo Noticia', subtitulo:'subtitulo', categoria:'cat', foto:'', fotografo: ''}
  ]);
  
  return (
    <Fragment>
      <Header />
      <Publicidades />
      <NavBar />
      <Ultimas/>
      <hr/>
      <Nuevas/>
      <Footer />
    </Fragment>

  );
}

export default App;
