import React, { useState } from 'react';

import Header from '../../components/header/header';


import Swal from 'sweetalert2'

function Detalleusuario() {

  const [isDisabled, setIsDisabled] = useState(true);

  const handleToggle = () => {
    Swal.fire({
      title: "Desea editar el registro",
      showDenyButton: true,
      confirmButtonText: "SI",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsDisabled(!isDisabled);
      } else if (result.isDenied) { /* empty */ }
    });

  };

  const btnGuardar = () => {
    Swal.fire({
      title: "",
      text: "Registro Exitoso",
      icon: "info"
    });

  }

  return (
    <div>
      <Header />
      <main style={styles.mainContent}>


    <div className=" justify-center items-center h-screen">

       <div >

        <section className="text-lg text-blue-900 uppercase dark:text-blue-900">

          <div>
              <label for="first_name" className="text-blue-800 dark:text-blue-800">DETALLE USUARIO   :  </label>

            </div>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
<div >
                  <button type='button' onClick={handleToggle}
                    className=" text-white p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm md:text-base"   >
                    EDITAR

                  </button>
                  <br /><br /></div>
               <form action="#">

                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">NOMBRE CLIENTE </label>
                      <input type="text" name="nombreCliente" id="nombreCliente" disabled={isDisabled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="NOMBRE CLIENTE" required="" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">CLAVE CLIENTE </label>
                      <input type="text" name="claveCliente" id="claveCliente" disabled={isDisabled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="CLAVE CLIENTE" required="" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">FECHA INGRESO </label>
                      <input type="date" name="claveAlquiler" id="claveAlquiler" disabled={isDisabled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$CLAVE ALQUILER" required="" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">CORREO </label>
                      <input type="text" name="fechaAlquiler" id="fechaAlquiler" disabled={isDisabled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="sufijo@rich-develop.com" required="" />
                    </div>
                    <div>
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">TELEFONO </label>
                      <input type="text" name="fechaEntrega" id="fechaEntrega" disabled={isDisabled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="000000000" required="" />
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">DIRECCIÓN </label>
                      <input type="text" name="fechaEntrega" id="fechaEntrega" disabled={isDisabled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Dirección" required="" />
                    </div>


                    <div className="sm:col-span-2">
                      <button type="button" disabled={isDisabled}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={btnGuardar}>
                        <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z" />
                        </svg>
                        <span className="sr-only">GUARDAR</span>
                      </button></div>

                  </div>
                </form>
            </div>
        </section>
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
export default Detalleusuario
