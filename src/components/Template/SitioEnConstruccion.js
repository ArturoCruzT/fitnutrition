import React from "react";
import Template from "./Template";
import Titulo from "./Titulo";
import face from "../../img/facebookFitnu.jpg"
import whast from "../../img/whatsapp.jpg"
import devtec from "../../img/devtec.png"

const SitioEnConstruccion = () => {
    return <Template>

        <div className="d-flex justify-content-center h-100 ">
            <div className="">
                <div>
                    <strong className="txt-wcb-4 text-white">
                        SITIO EN CONSTRUCCION
                    </strong>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="m-2">
                        <div>
                            <strong className="txt-wcb-3 text-primary">
                                <a href="https://www.facebook.com/nutritionsfit"> Facebook </a>
                            </strong>
                        </div>
                        <img src={face}/>
                    </div>
                    <div className="m-2">
                        <div>
                            <strong className="txt-wcb-3 text-success">
                                <a href="https://www.facebook.com/devtecx">
                                    WhatsApp
                                </a>
                            </strong>
                        </div>
                        <img src={whast}/>
                    </div>
                </div>
                <div className="m-2">
                    <div>
                        <strong className="txt-wcb-3 text-white">
                            <span> Pagina desarrollada por </span>
                            <a href="https://api.whatsapp.com/send?phone=+527292378324&text=Solicito%20informacio%C3%B3n%20sobre%20las%20consultas">
                                Devtec
                            </a>
                        </strong>
                    </div>
                    <img src={devtec} className="w-100"/>
                </div>
            </div>
        </div>
    </Template>;
};


export default SitioEnConstruccion;
