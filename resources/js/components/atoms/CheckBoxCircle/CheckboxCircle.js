
import React, { useEffect, useState } from "react";
import './CheckboxCircle.scss'

const CheckboxCircle = ({id,children,textContentSetting,className,value,setValue,isValid=true,onClick})=>
{

    return(
        <>
        <div className={`GeneralCheckbox ${className}`}   style={{position:"relative"}}>
            <div className={isValid?"normal":"red"}>
                <input type="checkbox" id={id}   className={"input"} onChange={(e)=>{ setValue(e.target.checked)}} /><label onClick={onClick} className={`${value==true?"selected":''}`}  for={id} name={id} style={{marginBottom:textContentSetting,position:"relative"}}>{children}</label>
            </div>
        </div>
        </>
    )
}
export default CheckboxCircle