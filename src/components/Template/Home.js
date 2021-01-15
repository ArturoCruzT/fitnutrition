import React from 'react';
import {useGlobal} from 'reactn';
import Template from "./Template";
import ImgHome from "../../img/home.jpg";
import {trans} from "../../services/lang.service";
import Titulo from "./Titulo";
import baner from "../../img/breakfast-1869132_1920.jpg"
import fondo from "../../img/FitNutrition.jpeg"
import fondo1 from "../../img/writing-pad-3193199_1920.jpg"
import fondo2 from "../../img/yogurt-2104327_1920.jpg"

const Home = () => {
    const [control, setControl] = useGlobal('control');
    return (
        <Template>
            <div>
                <br/>
                <div className="d-flex justify-content-center w-100 rounded z-depth-1 swal2-warning">
                    <div id="carouselExampleCaptions" className="carousel slide " style={{width: "84%"}}
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
                <div className="container d-flex justify-content-between">
                    <div className="card  color-3 text-white mr-5 opacity-095 w-50">
                        <div className="card-body">
                            <strong className="txt-wcb-2" > Conocenos </strong>
                            <hr className="color-base"/>
                            <span>
                                Somos un grupo de expertos de la salud dedicados a mejorar
                                la calidad de vida de las personas atraves de la alimentacion y el ejercicio.
                            </span>
                            <hr className="color-base"/>
                            <a className="w-100 text-white d-flex justify-content-end" href="">
                                {trans('general.verMas')}
                            </a>
                        </div>
                    </div>
                    <div className="card  color-3 text-white  opacity-095 w-50">
                        <div className="card-body">
                            <strong className="txt-wcb-2" > Promociones </strong>
                            <hr className="color-base"/>
                            <strong className="txt-wcb-2 text-justify">
                             2 * 1 en consulta deportiva
                            </strong>
                            <span className="w-100 text-white d-flex justify-content-end">
                                valido al 21 de enero de 2021
                            </span>
                            <hr className="color-base"/>
                            <a className="w-100 text-white d-flex justify-content-end" href="">
                                {trans('general.verMas')}
                            </a>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </Template>
    )
};


export default Home;