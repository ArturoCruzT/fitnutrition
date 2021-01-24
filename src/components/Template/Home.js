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
import promociones from "../../img/promocionesdecuentos.png"
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
                                <div className="carousel-caption ">
                                    <strong className={`${esMovil() ? "txt-wcb-3" : "txt-wcb-4"}`}>Fit
                                        Nutrition </strong>
                                    <br/>
                                    <strong className={`${esMovil() ? "txt-wcb-2" : "txt-wcb-3"}`}>Salud y
                                        Bienestar.</strong>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fondo1} className="d-block" style={{width: "100%", height: "300px"}}
                                     alt="..."/>
                                <div className="carousel-caption  w-85  h-100">
                                    <div
                                        className={`d-flex justify-content-end w-100 pt-5 ${esMovil() ? ' align-content-end h-100 ' : 'align-content-start'}`}>
                                        <div className="w-40">
                                            <strong className={`${esMovil() && 'txt-wcb50-2'} txt-wcb-2`}>
                                                Menu del dia</strong>
                                            <br/>
                                            <div>
                                                {!esMovil() &&
                                                <strong className="txt-acb-1-2 flex-wrap ">
                                                    2 Tortitas de avena  con zanahoria
                                                    <br/>
                                                    1/2 taza de  arroz
                                                    <br/>
                                                    Agua de pepino con limon
                                                </strong>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={fondo2} className="d-block " style={{width: "100%", height: "300px"}}
                                     alt="..."/>
                                <div className="carousel-caption   h-100">
                                    <div className="d-flex justify-content-end w-100 align-content-start pt-5">
                                        <div className={esMovil() ? 'w-100' : "w-50"}>
                                            <strong className={'txt-wcb-3'}>Nutri Tips</strong>
                                            <br/>
                                            {!esMovil() && <div>
                                                <strong className="flex-wrap txt-acb-1-2">
                                                    Dale vida a tu cuerpo tomando dos litros de agua al dia
                                                </strong>
                                            </div>}
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
                <div className="d-flex justify-content-center  text-center w-100">
                    <div className={`d-flex justify-content-around w-90 ${esMovil() ? 'flex-wrap' : ''}`}>
                        <div className={`card opacity-95 m-2 text-center ${esMovil() ? 'w-100' : 'w-50'} `}>
                            <div className="">
                                {
                                    esMovil() ?
                                        <div>
                                            <a href=""> <strong className="text-dark text-2">CONÓCENOS</strong></a>
                                            <img src={conocenos} className="img-conocenos"/>
                                        </div> :
                                        <div className="d-flex flex-column">
                                            <strong className="text-dark text-4 p-0 m-0">CONÓCENOS</strong>
                                            <img src={conocenos} className="img-conocenos"/>

                                        </div>
                                }

                            </div>
                            <div>
                                {
                                    !esMovil() &&

                                    <div className="text-justify  texto-grueso text-wrap text-1 card-body ">
                                        <strong className="text-dark">
                                            Somos un grupo de expertos de la salud dedicados a
                                            mejorar la calidad de vida de las personas atraves de la alimentacion y el
                                            ejercicio
                                        </strong>
                                        <br/>
                                        <div className="d-flex justify-content-end  ">
                                            <a href={`${process.env.REACT_APP_URL_WEB}/quienesSomos`}>{trans('general.verMas')} </a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={`card opacity-95 m-2 text-center ${esMovil() ? 'w-100' : 'w-50'} `}>
                            <div>
                                {
                                    esMovil() ?
                                        <div>
                                            <a href=""> <strong className="text-dark text-2">PROMOCIONES</strong></a>
                                            <img src={promociones} className="img-conocenos"/>
                                        </div> :
                                        <div className="d-flex flex-column ">
                                            <strong className="text-dark text-4 p-0 m-0">PROMOCIONES</strong>
                                            <img src={promociones} className="img-conocenos"/>

                                        </div>
                                }
                            </div>
                            <div>
                                {
                                    !esMovil() &&

                                    <div className="text-justify  texto-grueso text-wrap text-1 card-body ">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <strong className="text-dark text-4"> 2 * 1 </strong>
                                            </div>
                                            <div>
                                                <div>
                                            <span className="text-3 text-left ">
                                               Nutrición clinica
                                            </span>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                <span className="text-right text-05 text-primary">
                                                    viegencia al 31 de enero 2021
                                                </span>
                                                </div>
                                            </div>
                                        </div>

                                        <br/>
                                        <div className="d-flex justify-content-end  ">
                                            <a href={`${process.env.REACT_APP_URL_WEB}/quienesSomos`}>{trans('general.verMas')} </a>
                                        </div>
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
