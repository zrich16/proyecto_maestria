

const getFiltroBusqueda = async (form) => {
    let filtro = "";
    try {

        if (form.developer == "" && form.genre == "" && form.platform == "" && form.publisher == "" && form.store == "" && form.tags == "") {
            filtro += "games?";
        } else {
            if (form.developer != "") {
                filtro += "games?developers=" + `${form.developer}&`;
            }
            if (form.genre != "") {
                filtro += "games?genres=" + `${form.genre}&`;
            }
            if (form.platform != "") {
                filtro += "games?platforms=" + `${form.platform}&`;
            }
            if (form.publisher != "") {
                filtro += "games?publishers=" + `${form.publisher}&`;
            }
            if (form.store != "") {
                filtro += "games?stores=" + `${form.store}&`;
            }
            if (form.tags != "") {
                filtro += "games?tags=" + `${form.tags}&`;
            }
        }

        console.log("filtro : " + filtro);

        return filtro

    } catch (error) {
        console.log("Error getFiltroBusqueda : " + error);
        return filtro;
    }
}

export { getFiltroBusqueda };