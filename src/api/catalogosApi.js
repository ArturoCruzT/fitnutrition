import API from './axios';
import {
    cargando,
    ocultableDanger,
    guardadoCorrecto,
    cerrarAlert,
    cargadoCorrecto
} from "../helpers/swalHelper";
import {isLogged} from "../helpers/authHelper";
import {trans} from "../services/lang.service";
//----------Métodos Generales-------------------//
export const getCatalogos = (solicitados, msg_cargando = true) => {
    if (msg_cargando)
        cargando();
    return API.post('catalogos/getMultiAllGenerico', { 'peticiones': solicitados })
        .then(
            (res) => {
                cerrarAlert();
                return res.data;
            }
        ).catch((error) => {
            if (isLogged())
                ocultableDanger(trans('general.errorAlCargar'), trans('general.error'));
            throw (error);
        });
};
export const guardarGenerico = (catalogo,datos) => {
    let direccion='catalogos/guardarGenerico/';
    let url=direccion+catalogo;
    return API.post(url, datos)
        .then(
            (res) => {
                guardadoCorrecto();
                return res.data;
            }
        ).catch((error) => {
            if (isLogged()) {
                ocultableDanger(trans('general.errorAlGuardar'), trans('general.error'));
                throw (error);
            }
        });
};

export const eliminarGenerico = (catalogo,id) => {
    let direccion='catalogos/eliminarGenerico/';
    let url=direccion+catalogo;
    return API.post(url, {id:id})
        .then(
            (res) => {
                guardadoCorrecto();
                return res.data;
            }
        ).catch((error) => {
            if (isLogged()) {
                ocultableDanger(trans('general.errorAlGuardar'), trans('general.error'));
                throw (error);
            }
        });
};
