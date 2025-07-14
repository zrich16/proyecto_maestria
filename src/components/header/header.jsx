import Menu from '../../components/menu/menu';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function Header() {
const navigate = useNavigate();

  const logout = () => {
      Swal.fire({
        title: "Desea Terminar Sesió",
        showDenyButton: true,
         confirmButtonText: "SI",
      }).then((result) => {
        if (result.isConfirmed) {
            navigate('/'); 
        } else if (result.isDenied) { /* empty */ }
      });
  
    };


 

  return (
    <header>


      <div className="header">
        <div className="grid grid-cols-3 gap-4">
          <div ><img className="header_logo" src="/logo.png" alt="" /></div>
          <div > <Menu /></div>
          <div className="header-right"><div className="relative">
            <img className="w-10 h-10 rounded-full" src="/usuarioOnLine.png" alt="" onClick={logout} />
            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div></div>
        </div>

      </div>
    </header>
  )
}

export default Header
