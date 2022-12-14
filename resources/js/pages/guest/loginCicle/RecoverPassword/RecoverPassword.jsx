import React, { useEffect, useState } from "react";
import './RecoverPassword.scss'
import "../../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes.scss";
import InputText from "../../../../components/atoms/InputText/InputText";
import Button from "../../../../components/atoms/Button/Button";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../../utilities/Validations";
import { useNavigate } from "react-router-dom";

const RecoverPassword =()=>
{
    const navigate = useNavigate() 
    const [inputList,setInputList] = useState({
        email:{value:null,validationType:'email'}
    })
    useEffect(()=>
    {
        for(const propertyName in inputList)
        {
            if(propertyName == 'email')
            {
                ColorValidation(propertyName,inputList,'email')
            }
        }
    },[inputList])
    const nextPage = ()=>
    {
        if(SubmitValidation(inputList,setInputList))
        {
            navigate('/verification-code')
        }
    }
    return(
        <>
            <div className="generalBackground">
                <div className="RecoverPassword">
                    <div className="card">
                        <div className="title">
                            Recuperar cuenta
                        </div>
                        <div className="subtitle">
                            Actualiza tus accesos. Ingresa tu correo
                        </div>
                        <div className="container-input">
                            <InputText placeholder={'Correo electrónico'} id='email' onChange={(e)=>{UpdateValue(e,'email',inputList,setInputList)}} title={"Correo electrónico"}></InputText>
                        </div>
                        <div className="buttons-container">
                            <Button className={"button"} onClick={()=>{navigate('/login')}} >Volver</Button>
                            <Button className={"button"} onClick={()=>{nextPage()}} color={'red'}>Enviar código</Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default RecoverPassword