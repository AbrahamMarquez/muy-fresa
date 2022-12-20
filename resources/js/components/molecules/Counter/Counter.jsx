import React, { useEffect } from "react";
import './Counter.scss'


const Counter = ({ className, value, setValue }) => {
    useEffect(()=>
    {
        if(value<0)
        {
            setValue(value=value+1)
        }
    },[value])
    return (
        <>
            <div className={`Counter ${className}`}>
                <div className="title-Counter">Cantidad</div>
                <div className="container-counter">
                    <div className="icon" onClick={()=>{setValue(value=value+1)}}>+</div>
                    <div className="">{value}</div>
                    <div className="icon" onClick={()=>{setValue(value=value-1)}}>-</div>
                </div>

            </div>
        </>
    )
}
export default Counter