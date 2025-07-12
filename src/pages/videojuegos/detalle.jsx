import Header from '../../components/header/header';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import { useLocation } from 'react-router-dom';

import { getDetallerVideojuego } from '../../services/videojuegosService';
function Detalle() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datagame, setDataGame] = useState({});
  const navigate = useNavigate();

  const location = useLocation();
  const { idVideoJuego } = location.state || {};

  const btnRegresar = () => {
    navigate('/buscar');
  }




  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await getDetallerVideojuego(idVideoJuego);
        setDataGame(response);
      } catch (e) {
        setError(e);
        Swal.fire({
          title: "Error",
          text: e,
          icon: "danger"
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);


  return (
    <div>
      <Header />
      <main style={styles.mainContent}>
    


  <div className="col-start-1 col-end-7 ...">

<div className="grid grid-cols-4 gap-4">
  <div> <img className="object-cover w-full rounded-t-lg h-726 md:h-auto md:w-508 md:rounded-none md:rounded-s-lg" src={datagame.background_image} alt="" />
              </div>

  <div>


    <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{datagame.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{datagame.description}</p>
                <br />
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{datagame.rating}</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>Plataformas</div>
                  <div>
                    {datagame.parent_platforms?.map(g => (
                      <span key={g.platform.id}> {g.platform.name}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>Genero</div>
                  <div>
                    {datagame.genres?.map(g => (
                      <span key={g.id}> {g.name}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <br />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <button type="button" onClick={btnRegresar} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                    </svg>
                    Regresar
                  </button>
                </div>
              </div>
  </div>
</div>
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
export default Detalle
