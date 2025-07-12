
import { Link } from 'react-router-dom';
function Menu() {
  return (

 <nav id='menu-nav'>
	<a className='menu-nav_href' href="/principal">INICIO</a>
	<a className='menu-nav_href' href="/buscar">BUSQUEDA</a>
	<a className='menu-nav_href' href="/alquilar">ALQUILER</a>
	<a className='menu-nav_href' href="/about">CONTACTO</a>
	<a className='menu-nav_href' href="/listausuario">USUARIO</a>
	<div className="animation start-home"></div>
</nav>

  )
}



export default Menu
