import React from "react";
import './Select.scss'


const Select = ({optionArr,value,onChange,id,title})=>
{
    console.log("optionArr",optionArr)
    return(
        <>
            <div className="Select">
                <div className="titleSe">{title}</div>
            <select  value={value} id={id} onChange={onChange} className="select-componet">
                {
                    optionArr.map((item)=>
                    {
                      return(
                        <>
                            <option>{item.label}</option>   
                        </>
                      )     
                    })
                }
                </select>
            </div>
        </>
    )
}
export default Select