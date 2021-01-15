import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import SinSesion from "./SinSesion";
import {isLogged} from "../../helpers/authHelper";
import fondo from "../../img/christmas-2918569_1920.jpg";

function Template(props) {
    return (
        <div>
            <Navbar/>
            <div style={{backgroundImage: `url(${fondo})`}} className=" w-100 ">
                {/*{isLogged() ? props.children : <SinSesion/>}*/}
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}

export default Template;
