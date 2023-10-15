import Navbar from '../components/Navbar'
import '../scss/ui/_morty.scss'
import imgMorty from '../img/morty-1.png' 

const Morty = () => {

    return (
    <div className='contenedorm'>
          <Navbar />

          <div className="morty">

                <div className="morty__imagenm">
                    <img className="morty__imgm" src={imgMorty} alt="foto morty" />
                </div>

                <div className="morty__textosm">
                    <h2 className="morty__h2m">Morty Smith</h2>
                    <p className="morty__parrafom"> Mortimer Chancuey Smith apodado como "Morty" de la dimensión Prime/Cronenberged es uno de los protagonistas principales de la serie animada Rick y Morty. Tiene constantes aventuras con su abuelo Rick Sánchez para ayudarlo siendo la mayoría de las ocasiones en contra de su voluntad y saliendo lastimado en casi todas ellas.
                    Morty es tranquilo y calmado pero muy manipulable, en la escuela no le va del todo bien pués tiene dificultades en ella, principalmente porque no tiene tiempo para estudiar debido a las aventuras que tiene en compañía de su abuelo Rick.
                    Suele tartamudear constantemente lo que muestra su inseguridad al hacer las cosas. Está enamorado de Jessica, una estudiante que comparte la clase de matemáticas con él. Se ha mostrado que se masturba constantemente.

                    A pesar de su inseguridad él puede actuar de forma valiente lo que ha demostrado en varios capitulos de la serie, ello debido a que no le gusta que le hagan daño a otras personas, incluso en ciertas ocasiones se ha sacrificado por ellas. También ha logrado desafiar sin pelos en la lengua a su abuelo Rick.</p>

                    <div className="tablam">
                        <h3 className='tablam__h3m'>Especie: <span className='tablam__spanm'>Humano</span></h3>
                        <hr />
                        <h3 className='tablam__h3m'>Sexo: <span className='tablam__spanm'>Masculino</span></h3>
                        <hr />
                        <h3 className='tablam__h3m'>Edad: <span className='tablam__spanm'>14</span></h3>
                        <hr />
                        <h3 className='tablam__h3m'>Estado: <span className='tablam__spanm'>Vivo</span></h3>
                        <hr />
                        <h3 className='tablam__h3m'>Ocupaciòn: <span className='tablam__spanm'>Estudiante</span></h3>
                        <hr />
                        <h3 className='tablam__h3m'>Planeta de origen: <span className='tablam__spanm'>Tierra(Dimension Prime)</span></h3>
                        <hr />
                        <h3 className='tablam__h3m'>Familia: <span className='tablam__spanm'>
                        Beth Smith (Madre) Summer Smith (Hermana) Morty Smith Jr. (Hijo) Rick Sánchez (Abuelo materno) Diane Sánchez (Abuela materna) Leonard Smith (Abuelo paterno) Joyce Smith (Abuela paterna)</span></h3>
                        <hr />
                    </div>
               </div>
         </div>  
    </div>  
     
    )
  }
  
  export default Morty