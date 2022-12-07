import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import InputText from "../../../components/atoms/InputText/InputText";
import InputPassword from "../../../components/atoms/InputPassword/InputPassword";
import eye from '../../../img/icons/Eye.svg'
import closeEye from '../../../img/icons/EyeClose.svg'

import "./Login.scss";

const Login = () => {

    return (
        <>
            <div className="fs-LoginP">
                <div className="fs-background">
                    <div className="fs-Login">
                        <div className="body-register">
                            <div className="title-container">
                                <div className="title">
                                    Inicio de sesión
                                </div>
                                <div className="sub-title">
                                    Ingresa ahora
                                </div>

                            </div>
                            <div className="txb-container">
                                <div style={{ padding: "5px" }}>
                                    <div className="txb-title">
                                        Correo electrónico
                                    </div>
                                    <div className="txb" >
                                        <InputText className={'input-text'} width="307px" height="33px" placeholder="Correo electrónico" />
                                    </div>

                                    {/* passwords */}
                                    <div className="txb-subtitle">
                                        Contraseña
                                    </div>

                                    <div className="txb">
                                        <InputPassword title={"Contraseña"} width="307px" height="33px" placeholder="Contraseña" UnlockPassIcon={eye} UnlockPassIconClose={closeEye} />
                                    </div>
                                </div>
                            </div>
                            {/* remember password */}
                            <div className="remember-box">
                                <div style={{ display: "flex" }}>
                                {/* <label class="radio">One
                                    <input type="radio" name="radio"/>
                                    <span class="check"></span>
                                </label> */}
                                <label class="radio">
                                    <input type="radio"  id="radioRememberPassword" name="radio" value="1" />
                                    <span class="check"></span>
                                    <label htmlFor="radioRememberPassword" className="txt-remember">Recuerdame</label>
                                </label>
                                </div>
                                <div className="link">
                                    <Link to="#">Olvidé mi contraseña</Link>
                                </div>

                            </div>
                            <div className="button-container">
                                <button className="btnRed">Iniciar sesión</button>
                            </div>
                            <div className="bottom-text">
                                <Link to="#">Aún no tengo cuenta</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;