import Header from '../../components/header/header';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function ListaUsuario() {
  const navigate = useNavigate();

    const btnBuscar = () => {
        Swal.fire({
            title: "",
            text: "Busqueda Exitosa",
            icon: "info"
        });

    }

      const btnInitRegistro = () => {
        Swal.fire({
            title: "",
            text: "Registrar Usuario",
            icon: "info"
        });
  navigate('/registrousuario');
    }
    return (
        <div>
            <Header />
            <main style={styles.mainContent}>
                         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
<div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Clave usuario" />
                    <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2
         dark:bg-blue-600 " onClick={btnBuscar}>BUSCAR</button>
                </div>
                         </div>

               
                
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <br/>
                    <button type="button" className="text-white bg-blue-900 hover:bg-blue-500  
                    font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={btnInitRegistro} >REGISTRAR USUARIO</button>
 
<br/><br/>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-s-lg ">
                                    NOMBRE CLIENTE
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-s-lg ">
                                   CLAVE CLIENTE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    CORREO
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    FECHA INGRESO
                                </th>
                                   <th scope="col" className="px-6 py-3">
                                  
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    XXXXXXX
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    B001
                                </th>
                                <td className="px-6 py-4">
                                    contacto@rich-develop.com
                                </td>
                                <td className="px-6 py-4">
                                    2025/06/26
                                </td>
                               
                                <td className="px-6 py-4 text-right">
                                    <a href="/detalleusuario" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    XXXXXXX
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  B002
                                </th>
                                <td className="px-6 py-4">
                                     contacto@rich-develop.com
                                </td>
                                <td className="px-6 py-4">
                                 2025/06/26
                                </td>
                               
                                <td className="px-6 py-4 text-right">
                                    <a href="/detalleusuario" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    XXXXXXX
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    B003
                                </th>
                                <td className="px-6 py-4">
                                   contacto@rich-develop.com
                                </td>
                                <td className="px-6 py-4">
                                   2025/06/26
                                </td>
                                
                                <td className="px-6 py-4 text-right">
                                    <a href="/detalleusuario" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    );
}

const styles = {
    container: {

        minHeight: 'calc(100vh - 60px)' // para compensar el header
    },
    mainContent: {
        flex: 1,
        padding: '20px'
    }
};
export default ListaUsuario
