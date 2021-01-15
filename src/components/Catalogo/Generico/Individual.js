import React, {useEffect, useState} from "react";
import {trans} from "../../../services/lang.service";
import {FaSave} from "react-icons/all";
import produce from "immer";

const Individual = ({registro = {}, onSave = ()=>{}}) => {
    const [registro_local, setRegistroLocal] = useState({});

    useEffect(()=>{
        setRegistroLocal(registro);
    }, [registro]);

    const actualizaRegistroLocal = (parametro, valor ) => {
        setRegistroLocal(produce(draft =>{
            draft[parametro] = valor;
        }));
    }
    return  <div className="card border-primary">
        <div className="card-header">
            { registro.id ? trans('catalogo.nuevoRegistro') : trans('catalogo.editandoRegistro')}
        </div>
        <div className="card-body">
            <div className="pb-2 d-flex justify-content-between">
                        <span>
                            {trans('catalogo.nombre')}
                        </span>
                <input value={registro_local.nombre} typeof="text"
                       onChange={e=>actualizaRegistroLocal('nombre',e.target.value)}/>
            </div>
            <div className="pb-2 d-flex justify-content-between ">
                        <span>
                         {trans('catalogo.descripcion')}
                        </span>
                <div>
                    <input value={registro_local.descripcion} typeof="text"
                           onChange={e=>actualizaRegistroLocal('descripcion',e.target.value)}/>
                </div>
            </div>
            <button className="btn btn-sm btn-outline-success w-100" onClick={e=>onSave(registro_local)}>
                <FaSave/>
                {trans('general.guardar')}
            </button>
        </div>
    </div>
}

export default Individual;