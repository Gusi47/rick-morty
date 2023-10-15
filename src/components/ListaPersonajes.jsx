import { useEffect, useState } from "react"
import Personaje from "./Personaje"
import '../scss/ui/_listaPersonaje.scss'
import NavPage from "./NavPage"




const ListaPersonajes = () => {

  const [personajes, setPersonajes] = useState([])
  const [ page, setPage] = useState(1)
  useEffect(() => {

     async function fetchData() {
          const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
          const data = await response.json()
           setPersonajes(data.results);
      }
  
      fetchData()
  }, [page])


  return (

      <div className="contenedorl">

            <div className="contebtn">
              <NavPage page={page} setPage={setPage}/>
            </div>

      
            <div className="listapersonaje">
                  {
                    personajes.map(personaje => {
                      return (
                        <Personaje  key={personaje.id} personaje={personaje}/>
                      )
                  })
                  }
            </div>

          <div className="contebtn">
          <NavPage page={page} setPage={setPage}/>
          </div>

      </div>
   
   
  )
}

export default ListaPersonajes