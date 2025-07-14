
import { Link } from 'react-router-dom';
function Menu() {
  return (

 <nav id='menu-nav'>
	<a  href="/principal">INICIO</a>
	<a  href="/buscar">BUSQUEDA</a>
	<a  href="/alquilar">ALQUILER</a>
	<a  href="/about">CONTACTO</a>
	<a  href="/listausuario">USUARIO</a>
	<div className="animation start-home"></div>
</nav>

  )
}



export default Menu
