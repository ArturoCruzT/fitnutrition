import React from "react";
import {useState} from "react";
import {attemp, creaSesion, loginTrabajador} from "../../helpers/authHelper";
import {FaLock, FaUser} from 'react-icons/fa';
import {trans} from "../../services/lang.service";


export const ModalLogin = ({ver_modal, setVerModalCh, lang, lang_ok, permisos_ok, setPermisosOk}) => {
    //|------State------|//
    const [email, setEmail] = useState('');
    const [mail_input, setMailInput] = useState(null);
    const [password, setPassword] = useState('');

    //|-------Actions-------|//
    const attempLogin = () => {
        if (email && password) {
            attemp(email, password).then(data => {

            });
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            attempLogin();
        }
    };
    const onEnteredHandle = () => {
        mail_input.focus();
    };
    const setRef = (r) => setMailInput(r);

    //|------Render-------|//
    return (
        <div className="modal fade"
             id="modalLogin">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title text-center">
                            <FaLock/>
                            {trans('navbar.iniciarSesion')}
                        </h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column py-1">
                            <Credenciales setEmail={setEmail}
                                          setPassword={setPassword}
                                          handleKeyUp={handleKeyUp}
                                          setRef={setRef}
                            />
                        </div>
                    </div>
                    <Footer attempLogin={attempLogin}/>
                </div>
            </div>
        </div>
    );
};

//|------SubCompoenntes------|//
const Credenciales = ({setEmail, setPassword, handleKeyUp, setRef}) => {
    return (
        <div>
            <div className="text-center">{trans('navbar.insIniciarSesion')}</div>
            <div className="d-flex flex-column">
                <input className="form-control form-control-sm text-center mt-2"
                       id="mail"
                       onKeyUp={handleKeyUp}
                       autoFocus={true}
                       ref={setRef}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder={trans('navbar.email')}
                       type="mail"
                />
                <input type="password"
                       className="form-control form-control-sm text-center mt-2"
                       onKeyUp={handleKeyUp}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder={trans('navbar.password')}
                />
                <a href={`${process.env.REACT_APP_URL_WEB}/admin/resgistro`}>Registro</a>
            </div>
        </div>
    );
};

const Footer = ({attempLogin}) => {
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-primary"
                    onClick={attempLogin}>
                <FaLock/> {trans('navbar.iniciarSesion')}
            </button>
        </div>
    );
};
