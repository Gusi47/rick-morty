import Navbar from '../components/Navbar'
import '../scss/ui/_rick.scss'
import imgRick from '../img/rick-1.png' 


const Rick = () => {
    return (
  
        <div className='contenedorr'>
          <Navbar />
  
              <div className="rick">
          
                  <div className="rick__imagenr">
                    <img className="rick__imgr" src={imgRick} alt="foto rick" />
                  </div>
          
                  <div className="rick__textosr">
                      <h2 className="rick__h2r">Rick Sánchez</h2>
                      <p className="rick__parrafor"> Richard Daniel "Rick" Sánchez de la Dimensión C-137 es un viejo científico alcohólico que acostumbra hablar de manera vulgar y entre eructos, la mayoría de las veces tiene un rastro de saliva en la boca. Es padre de Beth Smith y el abuelo materno de Summer y Morty.Rick era un científico que había estado experimentando con la tecnología de teletransporte, hasta que un día Rick, el cual ya tenía una pistola de portales interdimensional, le presentó la posibilidad de viajar por el multiverso. Cuando Rick dijo que no, el otro Rick se sintió insultado y asesinó a la familia de Rick C-137 con una bomba.
                      Rick no tiene mucho en cuenta la ética o la moral, no existen para él. Sólo buscará el camino más fácil sin importar a que costo, viéndose que siempre pone en peligro a Morty o a su familia entera, él aparenta que no les importa pero se ha podido apreciar una evolución de personaje a lo largo de la serie viéndose que incluso se ha sacrificado por su familia.
                      Se cree que esta forma de ser es principalmente debida a que su familia fue asesinada e intenta parecerse a los demás Ricks siendo un nihilista que no le importa lo que piensen los demás.</p>
          
                      <div className="tablar">
                            <h3 className='tablar__h3r'>Especie: <span className='tablar__spanr'>Humano</span></h3>
                            <hr />
                            <h3 className='tablar__h3r'>Sexo: <span className='tablar__spanr'>Masculino</span></h3>
                            <hr />
                            <h3 className='tablar__h3r'>Edad: <span className='tablar__spanr'>70</span></h3>
                            <hr />
                            <h3 className='tablar__h3r'>Estado: <span className='tablar__spanr'>Vivo</span></h3>
                            <hr />
                            <h3 className='tablar__h3r'>Ocupaciòn: <span className='tablar__spanr'>Cientifico - Inventor</span></h3>
                            <hr />
                            <h3 className='tablar__h3r'>Planeta de origen: <span className='tablar__spanr'>Tierra(Dimension C-137)</span></h3>
                            <hr />
                            <h3 className='tablar__h3r'>Familia: <span className='tablar__spanr'>
                            Diane Sánchez (Esposa), Beth Smith (Hija),Jerry Smith (Yerno),
                            Summer Smith (Nieta), Morty Smith (Nieto adoptivo),Morty Smith Jr. (Bisnieto)
                            </span></h3>
                            <hr />
                      </div>
                  </div>
              </div>
        </div>
    )
  }
  
  export default Rick