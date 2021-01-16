import React from 'react';
import {FaHeart} from "react-icons/fa";
import bandera from "../../img/mexico.png";
import Facebook from "../../img/fb.png";
import whatsapp from "../../img/whatsapp.png";

function Footer() {
    return (
        <div className="w-100 color-base text-white d-flex justify-content-center d-print-none">
            <div className="text-center w-50 d-flex justify-content-end">
                <stron>
                    <code className="text-white">
                         Developed for  &lt;Softwenv/&gt;
                        in&nbsp;
                        <img src={bandera} style={{height: '1rem'}}/>
                       
                    </code>
                </stron>
            </div>
            <div className="d-flex justify-content-center w-50">
                <div>
                    <a href="https://www.facebook.com/nutritionsfit" className="text-white">
                        <img style={{width: 45, height: 45}} src={Facebook}/>
                        <span>Siguenos</span>
                    </a>
                </div>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=+527292378324&text=%27Solicito%20informacio%C3%B3n%20sobre%20las%20consultas%27"
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
