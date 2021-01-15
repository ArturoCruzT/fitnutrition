import React from "react";
import Template from "../Template/Template";
import {useGlobal} from "reactn";
import {trans} from "../../services/lang.service";

const Registro = () => {
    //---------Hoock---------------//
    const [control, setControl] = useGlobal('control');
    return <Template>
        <div className="d-flex justify-content-center container">
            <div className="border-info">
                <div className="border-info">
                    {trans('general.registrando')}
                </div>
                <div className="border-info">
                    <div>
                        <span>
                              {trans('general.usuario')}
                        </span>
                        <div>
                            <input/>
                        </div>
                    </div>
                    <div>
                        <span>
                              {trans('general.email')}
                        </span>
                        <div>
                            <input/>
                        </div>
                    </div>
                    <div>
                        <span>
                              {trans('general.passwor')}
                        </span>
                        <div>
                            <input/>
                        </div>
                    </div>
                </div>
                <div className="border-info">

                </div>
            </div>
        </div>
    </Template>
}

export default Registro;