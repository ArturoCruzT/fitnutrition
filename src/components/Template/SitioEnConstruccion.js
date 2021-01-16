import React from "react";
import Template from "./Template";
import Titulo from "./Titulo";
import sitio from "../../img/SITIO-EN-CONSTRUCCION-1024x768.jpg"

const SitioEnConstruccion = () => {
    return <Template>
        <Titulo titulo="SITIO EN CONSTRUCCION"/>
        <div className="d-flex justify-content-center">
            <img src={sitio}/>
        </div>
    </Template>;
};


export default SitioEnConstruccion;
