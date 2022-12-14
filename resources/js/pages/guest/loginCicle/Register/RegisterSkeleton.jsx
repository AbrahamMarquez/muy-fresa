import React, { useEffect, useState } from "react";
import './Register.scss'
import "../../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes.scss";
import InputText from "../../../../components/atoms/InputText/InputText";
import Button from "../../../../components/atoms/Button/Button";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../../utilities/Validations";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const RegisterSkeleton =()=>
{   
    return(
        <>
            <div className="generalBackground">
                <div className="RecoverPassword Register">
                    <div className="card">
                        <div className="title" style={{display:'flex',justifyContent:'center'}}>
                            <Skeleton width="200px" height="26px" ></Skeleton>
                        </div>
                        <div className="subtitle" style={{display:'flex',justifyContent:'center'}} >
                            <Skeleton width="250px" height="16px" ></Skeleton>
                        </div>
                        <div className="container-input-register">
                            <Skeleton width="150px" height="20px" ></Skeleton>
                            <Skeleton width="100%" height="30px" ></Skeleton>
                        </div>
                        <div className="container-input-register">
                            <Skeleton width="150px" height="20px" ></Skeleton>
                            <Skeleton width="100%" height="30px" ></Skeleton>
                        </div>
                        <div className="container-input-register">
                            <Skeleton width="150px" height="20px" ></Skeleton>
                            <Skeleton width="100%" height="30px" ></Skeleton>
                        </div>
                        <div className="buttons-container" style={{paddingTop:"15px"}}>
                            <Skeleton width="100%" height="36px"  className={"button"}></Skeleton>
                            <Skeleton width="100%" height="36px"  className={"button"}></Skeleton>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default RegisterSkeleton