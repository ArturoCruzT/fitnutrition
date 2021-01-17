import React from 'react';
import {useGlobal} from 'reactn';
import Template from "./Template";
import ImgHome from "../../img/home.jpg";
import {trans} from "../../services/lang.service";
import Titulo from "./Titulo";
import baner from "../../img/breakfast-1869132_1920.jpg"
import fondo from "../../img/FitNutrition.jpg"
import fondo1 from "../../img/writing-pad-3193199_1920.jpg"
import fondo2 from "../../img/yogurt-2104327_1920.jpg"
import conocenos from "../../img/contactanos.png"
import {esMovil} from "../../helpers/generalHelper";


const Home = () => {
    const [control, setControl] = useGlobal('control');
    return (
        <Template>
            <div>
                <br/>
                <div className="d-flex justify-content-center">
                    <div id="carouselExampleCaptions"
                         className={`carousel slide   rounded z-depth-3 ${esMovil() ? "w-100" : "w-90 border-primary"}`}
                         data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={fondo} className="d-block" style={{width: "100%", height: "300px"}}
                                     alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <strong className="txt-wcb-4">Fit Nutrition </strong>
                                    <br/>
                                    <strong className="txt-wcb-3">Salud y Bienestar.</strong>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fondo1} className="d-block" style={{width: "100%", height: "300px"}}
                                     alt="..."/>
                                <div className="carousel-caption d-none d-md-block h-100">
                                    <div className="d-flex justify-content-end w-100 align-content-start pt-5">
                                        <div className="w-50">
                                            <strong className="txt-wcb-3">Menu del dia</strong>
                                            <br/>
                                            <div>
                                                <strong className="flex-wrap txt-acb-1-2">
                                                    Tostadas de tinga con peregil
                                                    Tostadas de tinga con peregil
                                                    Tostadas de tinga con peregil
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fondo2} className="d-block " style={{width: "100%", height: "300px"}}
                                     alt="..."/>
                                <div className="carousel-caption d-none d-md-block h-100">
                                    <div className="d-flex justify-content-end w-100 align-content-start pt-5">
                                        <div className="w-50">
                                            <strong className="txt-wcb-3">Nutri Tips</strong>
                                            <br/>
                                            <div>
                                                <strong className="flex-wrap txt-acb-1-2">
                                                    Dale vida a tu cuerpo tomando dos litros de agua al dia
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <br/>
                <div className="d-flex justify-content-center text-center w-90 bg-primary">
                   <div className="d-flex justify-content-around">
                       <div className="card opacity-95">
                           <div>
                               {
                                   esMovil() ?
                                       <strong className="text-dark text-4">CONÓCENOS</strong> :
                                       <div className="d-flex flex-column w-100">
                                           <strong className="text-dark text-4 p-0 m-0">CONÓCENOS</strong>
                                           <img src={conocenos} className="img-conocenos"/>

                                       </div>
                               }
                           </div>
                           <div>
                               {
                                   esMovil() ?
                                       <div>

                                       </div> :
                                       <div className="text-justify  texto-grueso text-wrap text-1 ">
                                           <strong className="text-dark"> Somos un grupo de expertos de la salud dedicados a
                                               mejorar la calidad de vida de las personas atraves de la alimentacion y el
                                               ejercicio
                                           </strong>
                                       </div>
                               }
                           </div>
                       </div>
                       <div className="card opacity-95">
                           <div>
                               {
                                   esMovil() ?
                                       <strong className="text-dark text-4">CONÓCENOS</strong> :
                                       <div className="d-flex flex-column w-100">
                                           <strong className="text-dark text-4 p-0 m-0">CONÓCENOS</strong>
                                           <img src={conocenos} className="img-conocenos"/>

                                       </div>
                               }
                           </div>
                           <div>
                               {
                                   esMovil() ?
                                       <div>

                                       </div> :
                                       <div className="text-justify  texto-grueso text-wrap text-1 ">
                                           <strong className="text-dark"> Somos un grupo de expertos de la salud dedicados a
                                               mejorar la calidad de vida de las personas atraves de la alimentacion y el
                                               ejercicio
                                           </strong>
                                       </div>
                               }
                           </div>
                       </div>
                   </div>
                </div>
                <br/>
                <br/>
            </div>
        </Template>
    )
};


export default Home;
