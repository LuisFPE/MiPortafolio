import React, {useState, useEffect} from "react";

const Image = ({fileName}) => {
    const [url, setUrl] = useState(null);
    useEffect(() => { // cuando se monta el componente, obtenemos la lista de archivos subidos
        getFile()
    }, [])  

    /* Consiguiendo la imagen */
    const API_URL = "http://localhost:3015/api/projects/uploads/";

    async function getFile() {
        const url = `${API_URL}${fileName}`; // url del archivo
        const file = await fetch(url); // obtenemos el archivo
        if(!file.ok) { // si hay un error, cancelamos la operación
            console.error("archivo no encontrado");
            return;
        }
        const blob = await file.blob(); // lo convertimos en un blob. Esto es necesario para mostrar la imagen o descargar el archivo
        const result = URL.createObjectURL(blob); // crea una URL para mostrar la imagen o descargar el archivo 
        console.log("resultado: ", result)
        setUrl(result);
    }
    

    return (
        <img src={url} alt="" />
    )
}

export default Image