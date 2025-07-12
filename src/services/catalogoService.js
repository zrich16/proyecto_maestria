const API_URL = 'https://api.rawg.io/api/';

const getDesarrollador = async () => {
    try {
        const queryString = "developers?key=a6fc390305f94608a1e3855ee846d013";
        const url = `${API_URL}${queryString}`;

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

const getGenero = async () => {
    try {
        const queryString = "genres?key=a6fc390305f94608a1e3855ee846d013";
        const url = `${API_URL}${queryString}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener datos del Genero');
        }

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

const getPlataforma = async () => {
    try {
        const queryString = "platforms?key=a6fc390305f94608a1e3855ee846d013";
        const url = `${API_URL}${queryString}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener datos del platforms');
        }

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

const getPublisher = async () => {
    try {
        const queryString = "publishers?key=a6fc390305f94608a1e3855ee846d013";
        const url = `${API_URL}${queryString}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener datos del getPublisher');
        }

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

const getStore = async () => {
    try {
        const queryString = "stores?key=a6fc390305f94608a1e3855ee846d013";
        const url = `${API_URL}${queryString}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener datos del getPublisher');
        }

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

const getTags = async () => {
    try {
        const queryString = "tags?key=a6fc390305f94608a1e3855ee846d013";
        const url = `${API_URL}${queryString}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener datos del getTags');
        }

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

export { getDesarrollador, getGenero, getPlataforma, getPublisher, getStore, getTags };