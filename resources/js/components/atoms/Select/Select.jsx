import React from "react";
import './Select.scss'


const Select = ({ optionArr, value, onChange, id, title, disabled, className }) => {
    return (
        <>
            <div className={`Select ${className}`}>
                <div className="titleSe">{title}</div>
                <select disabled={disabled} value={value} id={id} onChange={onChange} className="select-componet">
                    {
                        optionArr.map((item) => {
                            return (
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