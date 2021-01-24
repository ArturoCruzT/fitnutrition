import React from 'react';
import {FaHeart} from "react-icons/fa";
import bandera from "../../img/mexico.png";
import Facebook from "../../img/fb.png";
import whatsapp from "../../img/whatsapp.png";
import {esMovil} from "../../helpers/generalHelper";

function Footer() {
    return (
        <div className="w-100 color-base text-white d-flex justify-content-center d-print-none flex-wrap position-relative">
            <div className={`text-center d-flex ${esMovil() ? "flex-wrap justify-content-center w-100" : "justify-content-end w-50"}`}>
                <strong>
                    <code className="text-white">
                         Developed for  &lt;Softwenv/&gt;
                        in&nbsp;
                        <img src={bandera} style={{height: '1rem'}}/>
                       
                    </code>
                </strong>
            </div>
            <div className={`text-center d-flex ${esMovil() ? "flex-wrap justify-content-center w-100" : "justify-content-end w-50"}`}>
                <div>
                    <a href="https://www.facebook.com/nutritionsfit" className="text-white">
                        <img style={{width: 45, height: 45}} src={Facebook}/>
                        <span>Siguenos</span>
                    </a>
                </div>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=+527292378324&text=Solicito%20informacio%C3%B3n%20sobre%20las%20consultas"
                       className="text-white">
                        <img style={{width: 45, height: 45}} src={whatsapp}/>
                        <span> Contáctanos </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
