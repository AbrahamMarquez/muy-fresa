import React from "react";
import './Description.scss'

const Description = ({ title, className, children }) => {
    return (
        <>
            <div className={`Description ${className}`}>
                <div className="titleDescription">{"Descripción del producto"}</div>
            </div>
            <div className="contentDescription">
            <div className="title">{title}</div>
                    {children}
                </div>
        </>
    )
}
export default Description