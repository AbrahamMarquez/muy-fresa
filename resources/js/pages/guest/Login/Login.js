import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import InputText from "../../../components/atoms/InputText/InputText";
import InputPassword from "../../../components/atoms/InputPassword/InputPassword";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../utilities/Validations";
import eye from '../../../img/icons/Eye.svg'
import closeEye from '../../../img/icons/EyeClose.svg'

import "./Login.scss";

const Login = (props) => {

    const [inputList, setInputList] = useState({
        email: { value: null, validationType: "email" },
        password: { value: null, validationType: "empty" }
    })
    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList)
            }
            if (propertyName == "email") {
                ColorValidation(propertyName, inputList, "email")
            }
        }
    }, [inputList])

    const navigate = useNavigate()
    const nextPage = () => {
        if (SubmitValidation(inputList, setInputList)) {
            console.log(inputList?.email?.value?.includes("@employ"), inputList?.email?.value)
            if(inputList?.email?.value.includes("@employ")){
                dispatch(changeCollaboratorState(true))
                localStorage.setItem("isColab", 1);
            }else{
                localStorage.setItem("isColab", 0);
            }
            props.setAuth(true);
            localStorage.setItem("auth", 1);
            navigate("#")
        }
    }
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
                                <div className="txb-container1" style={{ padding: "5px" }}>
                                    <div className="txb-title">
                                        Correo electrónico
                                    </div>
                                    <div className="txb" >
                                        <InputText className={'input-text'} onChange={(e) => { UpdateValue(e, "email", inputList, setInputList) }} id={'email'} width="307px" height="33px" placeholder="Correo electrónico" />
                                    </div>

                                    {/* passwords */}
                                    <div className="txb-subtitle">
                                        Contraseña
                                    </div>
                                    <div className="txb">
                                        <InputPassword title={"Contraseña"}  onChange={(e) => { UpdateValue(e, "password", inputList, setInputList) }} id={'password'} width="307px" height="33px" placeholder="Contraseña" UnlockPassIcon={eye} UnlockPassIconClose={closeEye} />
                                    </div>
                                </div>
                            </div>
                            {/* remember password */}
                            <div className="remember-box">
                                <div style={{ display: "flex" }}>
                               
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
                                <button className="btnRed"  onClick={() => nextPage()}>Iniciar sesión</button>
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