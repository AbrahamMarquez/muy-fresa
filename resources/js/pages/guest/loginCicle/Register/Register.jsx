import React, { useEffect, useState } from "react";
import './Register.scss'
import "../../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes.scss";
import InputText from "../../../../components/atoms/InputText/InputText";
import Button from "../../../../components/atoms/Button/Button";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../../utilities/Validations";
import { useNavigate } from "react-router-dom";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";

const Register =()=>
{
    const navigate = useNavigate() 
    const [inputList,setInputList] = useState({
        Pass:{value:null,validationType:'empty'},
        confirmPass:{value:null,validationType:'empty'},
        email:{value:null,validationType:'empty'},
    })
    useEffect(()=>
    {
        for(const propertyName in inputList)
        {
            if(document.getElementById(propertyName))
            {
                ColorValidation(propertyName,inputList)
            }
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
            if(inputList.Pass.value === inputList.confirmPass.value)
            {
                document.getElementById('Pass').style.border = '1px solid #a6c285';
                document.getElementById('confirmPass').style.border = '1px solid #a6c285';
                navigate('/register-code')
                
            }
            else
            {
                document.getElementById('Pass').style.border = '1px solid red';
                document.getElementById('confirmPass').style.border = '1px solid red';
            }
            
        }
    }
    return(
        <>
            <div className="generalBackground">
                <div className="RecoverPassword Register">
                    <div className="card">
                        <div className="title">
                            Registro
                        </div>
                        <div className="subtitle">
                            Registrate ahora
                        </div>
                        <div className="container-input">
                            <InputText placeholder={'Correo electrónico'} id='email' onChange={(e)=>{UpdateValue(e,'email',inputList,setInputList)}} title={"Correo electrónico"} className='input-regiter'></InputText>
                            <InputPassword placeholder={'Contraseña'} id={'Pass'} onChange={(e)=>{UpdateValue(e,'Pass',inputList,setInputList)}} title={'Contraseña'} className='input-regiter'></InputPassword>
                            <InputPassword placeholder={'Confirmar contraseña'} id={'confirmPass'} onChange={(e)=>{UpdateValue(e,'confirmPass',inputList,setInputList)}} title={'Confirmar contraseña'}></InputPassword>
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
export default Register