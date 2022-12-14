import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import InputText from "../../../components/atoms/InputText/InputText";
import InputPassword from "../../../components/atoms/InputPassword/InputPassword";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../utilities/Validations";


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
                                <div className="txb-container1" style={{ padding: "5px",width: '290px' }}>
                                   
                                    <div className="txb" >
                                        <InputText title={' Correo electrónico'}  onChange={(e) => { UpdateValue(e, "email", inputList, setInputList) }} id={'email'} placeholder="Correo electrónico" />
                                    </div>

                                    {/* passwords */}
                                    <div className="txb">
                                        <InputPassword title={"Contraseña"}  onChange={(e) => { UpdateValue(e, "password", inputList, setInputList) }} id={'password'} placeholder="Contraseña" />
                                    </div>
                                </div>
                            </div>
                            {/* remember password */}
                            <div className="remember-box">
                                <div style={{ display: "flex" }}>
                               
                                <label className="radio">
                                    <input type="radio"  id="radioRememberPassword" name="radio" value="1" />
                                    <span className="check"></span>
                                    <label htmlFor="radioRememberPassword" className="txt-remember">Recuerdame</label>
                                </label>
                                </div>
                                <div className="link">
                                    <Link to="/recover-password">Olvidé mi contraseña</Link>
                                </div>

                            </div>
                            <div className="button-container">
                                <button className="btnRed"  onClick={() => nextPage()}>Iniciar sesión</button>
                            </div>
                            <div className="bottom-text">
                                <Link to="/register">Aún no tengo cuenta</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;