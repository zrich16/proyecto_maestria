

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'

import Header from '../../components/header/header';

import { getDesarrollador, getGenero, getPlataforma, getPublisher, getStore, getTags } from '../../services/catalogoService';
import { getBuscarVideojuego } from '../../services/videojuegosService';
import { getFiltroBusqueda } from '../../util/funciones';

function Buscar() {

  const navigate = useNavigate();

  const [datadesarrollador, setDataDesarrollador] = useState([]);
  const [datagenero, setDataGenero] = useState([]);
  const [dataplataforma, setDataPlataforma] = useState([]);
  const [datapublicación, setDataPublicación] = useState([]);
  const [datastorage, setDataStorage] = useState([]);
  const [dataetiqueta, setDataEtiqueta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [games, setGames] = useState([]);


  const [formValues, setFormValues] = useState({
    developer: '',
    genre: '',
    platform: '',
    publisher: '',
    store: '',
    tags: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  /**
 * Acción que realiza la busqueda dependiendoi los parametros
 * seleciconados por el usuario 
 */

  const btnBuscar = async () => {

    setLoading(true);
    setError(null);

    try {
      let filters = await getFiltroBusqueda(formValues);

      console.log(filters);
      const response = await getBuscarVideojuego(filters);
      setGames(response.results);

    } catch (error) {
      setError(error.message);
      Swal.fire({
        title: "",
        text: error.message,
        icon: "error"
      });
    } finally {
      setLoading(false);
    }

  }

  const clickDetalle = async (param) => {
    setLoading(true);
    setError(null);

    try {
      
      navigate('/detalle',{ state: { idVideoJuego: param} });
    } catch (error) {
      setError(error.message);
      Swal.fire({
        title: "",
        text: error.message,
        icon: "error"
      });
    } finally {
      setLoading(false);
    }

  }



  /**
   * El efecto se ejecuta al cargar el componente 
   * se cargan lso catalogos 
   */
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const responseDesarrollador = await getDesarrollador();
        const responseGenero = await getGenero();

        const responsePlataforma = await getPlataforma();
        const responsePubliser = await getPublisher();
        const responseStore = await getStore();
        const responseTags = await getTags();

        setDataDesarrollador(responseDesarrollador.results);
        setDataGenero(responseGenero.results);

        setDataPlataforma(responsePlataforma.results);
        setDataPublicación(responsePubliser.results);
        setDataStorage(responseStore.results);
        setDataEtiqueta(responseTags.results);

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
        <form id='formBuscar'>
          <div className="grid gap-12 mb-12 md:grid-cols-2">
            <div>
              <label for="last_name" className="text-blue-800">DESARROLALDOR </label>

              <select id="developer" name="developer" onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>Selecicone un Desarrolaldor</option>
                {datadesarrollador && datadesarrollador.map(item => (
                  <option value={item.id}>{item.name}</option>

                ))}
              </select>
            </div>
            <div>
              <label for="company" className="text-blue-800">GENERO</label>

              <select id="genre" name="genre" onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>Selecicone un genero</option>
                {datagenero && datagenero.map(item => (
                  <option value={item.id}>{item.name}</option>

                ))}
              </select>
            </div>
            <div>
              <label for="platform" className="text-blue-800">PLATAFORMA</label>
              <select id="platform" name="platform" onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>Selecicone Plataforma</option>
                {dataplataforma && dataplataforma.map(item => (
                  <option value={item.id}>{item.name}</option>

                ))}
              </select>
            </div>
            <div>
              <label for="publisher" className="text-blue-800">PUBLICACIÓN</label>
              <select id="publisher" name="publisher" onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>Selecicone Publicación</option>
                {datapublicación && datapublicación.map(item => (
                  <option value={item.id}>{item.name}</option>

                ))}
              </select>
            </div>
            <div>
              <label for="store" className="text-blue-800">STORAGE</label>
              <select id="store" name="store" onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>Selecicone Storage</option>
                {datastorage && datastorage.map(item => (
                  <option value={item.id}>{item.name}</option>

                ))}
              </select>
            </div>
            <div>
              <label for="tags" className="text-blue-800">ETIQUETA</label>
              <select id="tags" name="tags" onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>Selecicone Etiqueta</option>
                {dataetiqueta && dataetiqueta.map(item => (
                  <option value={item.id}>{item.name}</option>

                ))}
              </select>
            </div>
          </div>


          <button type="button" className="text-white bg-blue-900 hover:bg-blue-500  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={btnBuscar} >Buscar</button>
          {loading && <p>Cargando...</p>}

          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          <br /><br /><br />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    NOMBRE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PLATAFORMA
                  </th>
                  <th scope="col" className="px-6 py-3">
                    GENERO
                  </th>
                  <th scope="col" className="px-6 py-3">
                    STORAGE
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    TAGS
                  </th> */}
                  <th scope="col" className="px-6 py-3">
                    CLASIFICACIÓN
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DETALLE
                  </th>
                </tr>
              </thead>
              <tbody>

                {games && games.map(item => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
             
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.platforms.map(p => (
                        <span key={p.platform.id} > {p.platform.name}</span>
                      ))}
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.genres.map(g => (
                        <span key={g.id}> {g.name}</span>
                      ))}
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.stores.map(g => (
                        <span key={g.store.id}> {g.store.name}</span>
                      ))}
                    </td>
                    {/* <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.tags.map(g => (
                        <span key={g.id}> {g.name}</span>
                      ))}

                    </td> */}
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.rating}
                    </td>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         <button type="button"  onClick={() => clickDetalle(item.name)}
                      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm 
                      rounded-lg border border-transparent bg-blue-300 text-white  font-bold
                       hover:bg-blue-800 focus:outline-hidden focus:bg-teal-200 disabled:opacity-50 
                       disabled:pointer-events-none dark:bg-teal-800/30 dark:hover:bg-teal-800/20 dark:focus:bg-teal-800/20">
  DETALLE
</button>
                    </td>
                  </tr>
                ))}




              </tbody>
            </table>
          </div>
        </form>
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
export default Buscar
