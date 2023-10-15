import '../scss/ui/_personajes.scss'
import ListaPersonajes from "../components/ListaPersonajes";
import Navbar from '../components/Navbar'

import React from 'react'

const Personajes = () => {

    
  return (
    <>
         <Navbar />
        <div className='contenedorps'>
                
                <h1 className="contenedorps__h1ps">Rick, Morty & Company</h1>
                <div className="contenedorps__listaper">
                   <ListaPersonajes />
                </div>
          </div>
    </>
   
   
  )
}

export default Personajes