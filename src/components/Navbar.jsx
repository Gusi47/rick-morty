import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import '../scss/ui/_navbar.scss'
import '../scss/base/_utilidades.scss'
import logo from '../img/logo.png'
import menuHambur from '../img/menu.png'
import menuEquis from '../img/equis.png'


const Navbar = () => {

   const [ hamburguesa, setHamburguesa] = useState(true)
   const [ clicked, setClicked] = useState(false)

   const toggleMenu = () => {
      setHamburguesa(!hamburguesa)
      setClicked(!clicked)
   }


  return (

    <div className='contenedor'>
    
        <div className="flex">
                <div className="logo">
                   <img className='logo__img' src={logo} alt="logos" />
                </div> 

                <div className='menu'>
                    <button 
                    onClick={toggleMenu} 
                    
                
                    className={`menu__hambu ${ clicked ? 'hiddem' : ''}`}
                    >
                            <img src={menuHambur} className="menu__icon" />
                    </button>

                    <button
                      onClick={ toggleMenu }
                    className={`menu__equis ${ clicked ? 'show' : ''}`}
                    >
                            <img src={menuEquis} className="menu__icon" />
                    </button>
                </div>
          </div>

           <div className= {`enlaces ${ hamburguesa ? 'hiddem' : ''}`}>
                <NavLink className="enlaces__links" to='/'>Home</NavLink>
                <NavLink className="enlaces__links" to='/rick'>Rick</NavLink>
                <NavLink className="enlaces__links" to='/morty'>Morty</NavLink>
                <NavLink className="enlaces__links" to='/personajes'>Personajes</NavLink>
           </div>

         
</div>
  )
}

export default Navbar

