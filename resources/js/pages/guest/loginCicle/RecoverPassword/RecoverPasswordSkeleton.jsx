import React, { useEffect, useState } from "react";
import './RecoverPassword.scss'
import "../../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes.scss";
import InputText from "../../../../components/atoms/InputText/InputText";
import Button from "../../../../components/atoms/Button/Button";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../../utilities/Validations";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const RecoverPasswordSkeleton =()=>
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
                        <div className="title" style={{display:'flex',justifyContent:'center'}}>
                            <Skeleton width="200px" height="26px" ></Skeleton>
                        </div>
                        <div className="subtitle" style={{display:'flex',justifyContent:'center'}} >
                            <Skeleton width="250px" height="16px" ></Skeleton>
                        </div>
                        <div className="container-input">
                            <Skeleton width="150px" height="20px" ></Skeleton>
                            <Skeleton width="100%" height="30px" ></Skeleton>
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
export default RecoverPasswordSkeleton