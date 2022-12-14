import React, { useEffect, useState } from "react";
import './VerificationPassword.scss'
import "../../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes.scss";
import InputText from "../../../../components/atoms/InputText/InputText";
import Button from "../../../../components/atoms/Button/Button";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../../utilities/Validations";
import { useNavigate } from "react-router-dom";
import InputPassword from "../../../../components/atoms/InputPassword/InputPassword";
import { Skeleton } from "primereact/skeleton";

const VerificationPasswordSkeleton =()=>
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
                navigate('#')
                
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
                        <div className="title"  style={{display:'flex',justifyContent:'center'}}>
                            <Skeleton width="310px" height="26px" ></Skeleton>
                        </div>
                        <div className="subtitle"  style={{display:'flex',justifyContent:'center'}}>
                            <Skeleton width="200px" height="26px" ></Skeleton>
                        </div>
                        <div className="container-input">
                            <Skeleton width="150px" height="20px" ></Skeleton>
                            <Skeleton width="100%" height="30px" ></Skeleton>
                            <div style={{marginTop:'17px'}}>
                            <Skeleton width="150px" height="20px" ></Skeleton>
                            <Skeleton width="100%" height="30px" ></Skeleton>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <Skeleton width="100%" height="36px"  className={"button"}></Skeleton>
                            <Skeleton width="100%" height="36px"  className={"button"}></Skeleton>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default VerificationPasswordSkeleton