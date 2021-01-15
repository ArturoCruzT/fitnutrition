import React, {useEffect, useState} from "react";
import {useGlobal} from "reactn";
import Template from "../../Template/Template";
import {trans} from "../../../services/lang.service";
import {FaPlusCircle, FaSave} from "react-icons/all";
import Titulo from "../../Template/Titulo";
import Listado from "./Listado";
import Individual from "./Individual";
import {eliminarGenerico, getCatalogos, guardarGenerico} from "../../../api/catalogosApi";
import {confirmar} from "../../../helpers/swalHelper";

const Generico = ({match}) => {
    //---------Hoock---------------//
    const [control, setControl] = useGlobal('control');
    const [catalogo_id, setCatalogoid] = useState('');
    const [registro, setRegistro] = useState(null);
    const [registros, setRegistros] = useState([]);

    //---------UseEffect---------------//

    useEffect(() => {
        if(match.params.catalogo_id) {
            setCatalogoid(match.params.catalogo_id);
        }
    }, [match]);

    useEffect(()=>{
        consultarRestros();
    }, [catalogo_id])
    //-------------Api----------//
    const consultarRestros = () => {
        getCatalogos([{nombre: catalogo_id, relaciones: []}]).then(res => {
            setRegistros(res[catalogo_id].data);

        });
    }
    const guardarRegistro = (data) => {
        guardarGenerico(catalogo_id, data).then(res => {
            consultarRestros();
            seleccionaRegistro({id:null, nombre:'', descripcion:''})
        });
    }

    const eliminarRegistro = (id) => {
        confirmar('error', `${trans('catalogo.eliminar')} ${id}`, trans('catalogo.advertencia')).then(res => {
            if (res.isConfirmed)
                eliminarGenerico(catalogo_id, id).then(res => {
                    consultarRestros();
                });
        });

    }

    //---------Operaciones-------//
    const seleccionaRegistro = registro => setRegistro(Object.assign({}, registro ));


    return <Template>
        <Titulo titulo={trans(`catalogo.${catalogo_id}Titulo`)}/>
        <div className="d-flex justify-content-center">
            <div className="pr-5">
                <Listado registros={registros} selected={registro}
                         onSelected={seleccionaRegistro}
                         eliminar={eliminarRegistro}
                />
            </div>
            <div>
                {
                    registro && <Individual registro={registro} onSave={guardarRegistro}/>
                }

            </div>
        </div>
    </Template>
}

export default Generico;