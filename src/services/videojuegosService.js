const API_URL = 'https://api.rawg.io/api/';


const getBuscarVideojuego = async (params = {}) => {
  try {
    const queryString = "key=a6fc390305f94608a1e3855ee846d013";

    const url = `${API_URL}${params}${queryString}`;

    console.log(url);  

    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    if (error.name === 'TypeError') {
      console.error('Error de red o fallo en la solicitud', error);
    } else {
      console.error('Error desconocido', error);
    }
    throw error;
  }
};

const getDetallerVideojuego = async (params = {}) => {
  try {
    const queryString = "?key=a6fc390305f94608a1e3855ee846d013";

    const url = `${API_URL}games/${params}${queryString}`;

    console.log(url);  

    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    if (error.name === 'TypeError') {
      console.error('Error de red o fallo en la solicitud', error);
    } else {
      console.error('Error desconocido', error);
    }
    throw error;
  }
};

export { getBuscarVideojuego ,getDetallerVideojuego};