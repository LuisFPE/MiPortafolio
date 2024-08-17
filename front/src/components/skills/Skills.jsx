import "./Skills.scss";
import React, {useState, useEffect} from "react";
import logo1 from "../../../public/logo1.png";
import logo2 from "../../../public/logo2.png";
import logo3 from "../../../public/logo3.png";
import logo4 from "../../../public/logo4.png";
import logo5 from "../../../public/logo5.png";
import logo6 from "../../../public/logo6.png";
import logo7 from "../../../public/logo7.svg";
import logo8 from "../../../public/logo8.svg";
import logo9 from "../../../public/logo9.png";
import logo10 from "../../../public/logo10.png";


const Skills = () => {

    return(
        <section id="skills">
            <h2 id="textoskills">Mis Habilidades</h2>           
            <div className="banner"> 
    
                <div className="slider" style={{"--quantity": 10}}>
                <div className="item" style={{"--position": 1}}><img src="../../../public/logo1.png" alt=""/></div>
                    <div className="item" style={{"--position": 2}}><img src="../../../public/logo2.png" alt=""/></div>
                    <div className="item" style={{"--position": 3}}><img src="../../../public/logo3.png" alt=""/></div>
                    <div className="item" style={{"--position": 4}}><img src="../../../public/logo4.png" alt=""/></div>
                    <div className="item" style={{"--position": 5}}><img src="../../../public/logo5.png" alt=""/></div>
                    <div className="item" style={{"--position": 6}}><img src="../../../public/logo6.png" alt=""/></div>
                    <div className="item" style={{"--position": 7}}><img src="../../../public/logo7.png" alt=""/></div>
                    <div className="item" style={{"--position": 8}}><img src="../../../public/logo8.png" alt=""/></div>
                    <div className="item" style={{"--position": 9}}><img src="../../../public/logo9.png" alt=""/></div>
                    <div className="item" style={{"--position": 10}}><img src="../../../public/logo10.png" alt=""/></div>
                </div>
                <div className="content">
                    <div className="model">Mis Habilidades</div>
                </div>
            </div>   
        </section>
    )
}
    
export default Skills