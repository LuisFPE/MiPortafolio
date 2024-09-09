import "./Projects.scss";
import React, {useState, useEffect} from "react";
import Image from "./Image";
import imgp from "../../../public/proyecto.jpg";
import { getProjects} from "../../utils/fetch";

const Projects = () => { 
    /* Consiguiendo la información del proyecto*/
    const [uploadedProjects, setUploadedProjects] = useState([]);
    useEffect(() => {
      fetchProjects();
    }, []);
  
    async function fetchProjects(){
      const result = await getProjects();
      if(result.error){
        console.log("Error: ", result.error)
        return;
      }
      setUploadedProjects(result.data);
    }

    return (
        <section id="projects">
            <h2>Mis Proyectos</h2>
            <section>
            
                {uploadedProjects.map(project=> (
                    <div className="card" style={{"--isType": project.publish}} key={project._id}>
                        <div className="author">
                            <div>
                                <div className="name">{project.type}</div>
                            </div>
                        </div>
                        <div className="image">
                            <Image fileName={project.image}/>
                        </div>
                        <div className="info">
                            <div className="name">{project.title}</div>
                            <div className="des">{project.description}</div>
                            <div className="more">
                                <a href={project.visit} target="_blank" >{project.visit}</a>
                            </div>
                        </div>                
                    </div>
                ))}
            {/* */}
            </section>
        </section>
    )
}

export default Projects