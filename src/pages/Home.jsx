import Navbar from '../components/Navbar'
import '../scss/ui/_home.scss'
import foto1 from '../img/logo-este.png'


const Home = () => {
    return (

       <div className="contenedorh">
          <Navbar />
            <div className='conte'>
              <img className='conte__foto1' src={foto1} alt="logo" />
            </div>
       </div>

    )
  }
  
  export default Home