import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import "./Login.scss";

const Login = () => {

    return(
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

                                </div>

                                {/* passwords */}
                                <div className="txb-subtitle">
                                    Contraseña
                                </div>

                                <div className="txb">

                                </div>
                            </div>
                        </div>
                        {/* remember password */}
                        <div className="remember-box">
                                    <div style={{ display: "flex" }}>
                                        <input type="checkbox" id="radioRememberPassword" name="rememberPassword" value="1" />
                                        <label for="radioRememberPassword" className="txt-remember">Recuerdame</label>
                                    </div>
                                    <div className="link">
                                        <Link to="#">Olvidé mi contraseña</Link>
                                    </div>

                                </div>
                                <div className="button-container">

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