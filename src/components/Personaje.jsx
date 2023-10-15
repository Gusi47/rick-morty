


const Personaje = ({personaje}) => {
  return (
   
    <div className="personajep">
        
          <h2 className="personajep__name">{personaje.name}</h2>
          <img className="personajep__foto" src={personaje.image} alt={personaje.name} />
          <h3 className="personajep__name">{personaje.origin.name}</h3>
       
    </div>
   
  )
}

export default Personaje

