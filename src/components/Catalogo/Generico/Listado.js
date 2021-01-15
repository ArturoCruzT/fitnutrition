import React from "react";
import {trans} from "../../../services/lang.service";
import {FaPlusCircle, FaTrash} from "react-icons/all";


const Listado = ({registros, selected = {}, onSelected = ()=>{}, eliminar= ()=>{}}) => {
    return  <div className="card border-secondary">
        <div className="card-header d-flex justify-content-between">
                    <span>
                        {trans('catalogo.registros')}
                    </span>
            <button className="btn btn-sm btn-outline-primary"
            onClick={e=>onSelected({id:null, nombre: '', descripcion:''})}><FaPlusCircle/></button>
        </div>
        <div>
            <table className="table table-borderless w-100 table-condensed">
                <thead className="table-dark  thead-dark">
                <tr>
                    <th>
                        {trans('catalogo.id')}
                    </th>
                    <th>
                        {trans('catalogo.nombre')}
                    </th>
                    <th>
                        {trans('catalogo.descripcion')}
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {(registros || []).map(registro =>
                    <tr key={registro.id} className={selected && registro.id === selected.id ? 'bg-primary': ''}>
                        <td  onClick={e=>onSelected(registro)}>
                            {registro.id}
                        </td>
                        <td  onClick={e=>onSelected(registro)}>
                            {registro.nombre}
                        </td>
                        <td  onClick={e=>onSelected(registro)}>
                            {registro.descripcion}
                        </td>
                        <td>
                            <button className="btn btn-sm btn-outline-danger"
                                    onClick={()=>eliminar(registro.id)}>
                                <FaTrash/>
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    </div>
}

export default Listado;