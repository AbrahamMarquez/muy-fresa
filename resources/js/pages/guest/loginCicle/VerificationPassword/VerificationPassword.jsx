import React, { useEffect, useState } from "react";
import './VerificationPassword.scss'
import "../../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes.scss";
import InputText from "../../../../components/atoms/InputText/InputText";
import Button from "../../../../components/atoms/Button/Button";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../../utilities/Validations";
import { useNavigate } from "react-router-dom";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";

const VerificationPassword =()=>
{
    const navigate = useNavigate() 
    const [inputList,setInputList] = useState({
        newPass:{value:null,validationType:'empty'},
        confirmPass:{value:null,validationType:'empty'},
    })
    useEffect(()=>
    {
        for(const propertyName in inputList)
        {
            if(document.getElementById(propertyName))
            {
                ColorValidation(propertyName,inputList)
            }
        }
    },[inputList])
    const nextPage = ()=>
    {
        if(SubmitValidation(inputList,setInputList))
        {
            if(inputList.newPass.value === inputList.confirmPass.value)
            {
                document.getElementById('newPass').style.border = '1px solid #a6c285';
                document.getElementById('confirmPass').style.border = '1px solid #a6c285';
                navigate('/')
                
            }
            else
            {
                document.getElementById('newPass').style.border = '1px solid red';
                document.getElementById('confirmPass').style.border = '1px solid red';
            }
            
        }
    }
    return(
        <>
            <div className="generalBackground">
                <div className="RecoverPassword VerificationPassword">
                    <div className="card">
                        <div className="title">
                            Actualiza tus accesos
                        </div>
                        <div className="subtitle">
                            Ingresa una nueva contraseña
                        </div>
                        <div className="container-input">
                            {/* <InputText placeholder={'Correo electrónico'} id='email' onChange={(e)=>{UpdateValue(e,'email',inputList,setInputList)}} title={"Correo electrónico"}></InputText> */}
                            <InputPassword placeholder={'Contraseña'} id={'newPass'} onChange={(e)=>{UpdateValue(e,'newPass',inputList,setInputList)}} title={'Nueva contraseña'} className='input-ps-vp'></InputPassword>
                            <InputPassword placeholder={'Contraseña'} id={'confirmPass'} onChange={(e)=>{UpdateValue(e,'confirmPass',inputList,setInputList)}} title={'Confirmar contraseña'}></InputPassword>
                        </div>
                        <div className="buttons-container">
                            <Button className={"button"} onClick={()=>{navigate('/login')}} >Cancelar</Button>
                            <Button className={"button"} onClick={()=>{nextPage()}} color={'red'}>Guardar</Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default VerificationPassword