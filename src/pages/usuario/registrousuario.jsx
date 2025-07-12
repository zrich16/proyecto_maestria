import Header from '../../components/header/header';
import Swal from 'sweetalert2'
import useForm from '../../forms/usaurioForm';
function Registrousuario() {

  const validate = (values) => {
    const errors = {};
    if (!values.nombreCliente) errors.nombreCliente = 'Nombre requerido';
    if (!values.claveCliente) errors.claveCliente = 'Clave Cliente requerido';
    if (!values.fechaIngreso) errors.fechaIngreso = 'Fecha Ingreso requerido';
    if (!/\S+@\S+\.\S+/.test(values.correo)) errors.correo = 'Correo requerido';
    if (!/^\d{7,15}$/.test(values.telefono)) errors.telefono = 'Telefono requerido';
    if (!values.direccion) errors.direccion = 'Direcciób requerida';
    return errors;
  };

  const { values, errors, handleChange, resetForm,setErrors   } = useForm({
    nombreCliente: '',
    claveCliente: '',
    fechaIngreso: '',
    correo: '',
    telefono: '',
    direccion: '',
  },
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors); 
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log('Datos del formulario:', values);
    Swal.fire('¡Éxito!', 'Registro guardado correctamente', 'success');
    resetForm();
  };









  return (
    <div>
      <Header />
      <main style={styles.mainContent}>
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div className="grid gap-12 mb-12 md:grid-cols-2">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <form id='form_registro' onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="nombreCliente" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">NOMBRE CLIENTE </label>
                      <input type="text" name="nombreCliente" id="nombreCliente"  value={values.nombreCliente}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="NOMBRE CLIENTE" />
                      {errors.nombreCliente && <p style={{ color: 'red' }}>{errors.nombreCliente}</p>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="claveCliente" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">CLAVE CLIENTE </label>
                      <input type="text" name="claveCliente" id="claveCliente"  value={values.claveCliente} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="CLAVE CLIENTE" />
                      {errors.claveCliente && <p style={{ color: 'red' }}>{errors.claveCliente}</p>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="fechaIngreso" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">FECHA INGRESO </label>
                      <input type="date" name="fechaIngreso" id="fechaIngreso"  value={values.fechaIngreso}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="CLAVE ALQUILER" />
                      {errors.fechaIngreso && <p style={{ color: 'red' }}>{errors.fechaIngreso}</p>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="correo" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">CORREO </label>
                      <input type="text" name="correo" id="correo"  value={values.correo}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="contacto@rich-develop.com" />
                      {errors.correo && <p style={{ color: 'red' }}>{errors.correo}</p>}
                    </div>
                    <div>
                      <label htmlFor="telefono" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">TELEFONO </label>
                      <input type="text" name="telefono" id="telefono"  value={values.telefono}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="000000000" />
                      {errors.telefono && <p style={{ color: 'red' }}>{errors.telefono}</p>}
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="direccion" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">DIRECCIÓN </label>
                      <input type="text" name="direccion" id="direccion"  value={values.direccion}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Dirección" />
                      {errors.direccion && <p style={{ color: 'red' }}>{errors.direccion}</p>}
                    </div>


                    <div className="sm:col-span-2">
                      <button type="submit" title="Guardar" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
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
export default Registrousuario
