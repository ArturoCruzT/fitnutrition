import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Template/Home';
import Generico from "./components/Catalogo/Generico/Generico";
import Registro from "./components/Admin/Registro";
import SitioEnConstruccion from "./components/Template/SitioEnConstruccion"

const ROUTES = [
    {path: '/quienesSomos', component:SitioEnConstruccion},
    {path: '/ideasNutritivas', component:SitioEnConstruccion},
    {path: '/nutriTips', component:SitioEnConstruccion},
    {path: '/contactanos', component:SitioEnConstruccion},
    {path: '/promociones', component:SitioEnConstruccion},
    {path: '/admin/resgistro', component:Registro},
    {path: '/catalogos/generico/:catalogo_id', component:Generico},
    { exact: true, path: '/404', component: NotFound },
    { exact: true, path: '/', component: Home },
];

function NotFound() {
    return (
        <div>
            <h1>Page not found</h1>
            <a onClick={() => BrowserRouter.goBack()}>Presione aquí para regresar</a>
        </div>
    )
}

export default ROUTES;
