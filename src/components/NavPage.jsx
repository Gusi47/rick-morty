import '../scss/ui/_navpage.scss'

const NavPage = (props) => {


  return (

    <header className="boton">  
        <p className="boton__parra">Pagina: {props.page}</p>

        <div className='contenedorbtn'>
            <button
            className="contenedorbtn__btn"
            onClick={() => props.setPage(props.page - 1)}>
               ⇦ Pagina: {props.page} 
            </button>
            <button
            className="contenedorbtn__btn"
            onClick={() => props.setPage(props.page + 1)}>
                Pagina: {props.page}  ⇨
            </button>
        </div>
       
    </header>
  )
}

export default NavPage