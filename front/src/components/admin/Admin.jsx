import "./Admin.scss";
import React, {useState} from "react";
import { createProject,} from "../../utils/fetch";

const API_URL = 'http://localhost:3015/api/projects/upload';

const Admin = () => {

    async function upload(file) {
        const formData = new FormData() // FormData nos permite subir archivos
        formData.append('file', file) // añadimos el archivo
        const response = await fetch(API_URL, {
          method: 'POST',
          body: formData
        })
        const data = await response.json()
        return data
      }

    const handleSubmit =async (e)=>{
        e.preventDefault();

        // guardar el proyecto en la BD
        const title = e.target.title.value;
        const image = e.target.file.files[0].name;
        const description = e.target.description.value; 
        const type = e.target.type.value;
        const publish = e.target.publish.value;         
        const visit = e.target.visit.value;
        const data = {title,image,description,type,publish,visit};
        const result = await createProject(data);
        console.log("proyecto guardado: ", result);

        // guardar la imagen en la BD
        const file = e.target.file.files[0] // Selecciona el archivo a subir.
        const data2 = await upload(file) // sube el archivo
        console.log("imagen guardada:", data2)
        if (data2.error) {
          return alert(data2.error)
        }
    }

    return (
        <section id="admin">
       
            <h2 className="mb-4">Formulario para Agregar Proyectos</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="title">title</label>
                <input type="text" className="form-control mb-4" name="title"/>

                <label className="form-label" htmlFor="file" >image</label>
                <input type="file" className="form-control mb-4" name="file" accept="image/*"/>

                <label className="form-label" htmlFor="description">description</label>
                <input type="text" className="form-control mb-4" name="description"/>

                <label className="form-label" htmlFor="type">type</label>
                <select className="form-control mb-4" name="type">
                    <option value="Individual">Individual</option>
                    <option value="Grupal">Grupal</option>
                </select>  

                <label className="form-label" htmlFor="publish">publish</label>
                <input type="text" className="form-control mb-4" name="publish"/>

                <label className="form-label" htmlFor="visit">visit</label>
                <input type="text" className="form-control mb-4" name="visit"/>
                
                <button type="submit" className="btn btn-warning">Añadir</button>
            </form>
         
   
        </section>
    )
}
    
export default Admin