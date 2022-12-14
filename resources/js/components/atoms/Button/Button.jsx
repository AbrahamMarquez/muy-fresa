import React from "react";
import './Button.scss'

const Button = ({children,onClick,color,className})=>
{
    return(
        <>
            <div className="Button">
                <button className={`button-general ${color=='red'?"red":'white'} ${className}`} onClick={onClick}>{children}</button>
            </div>
        </>
    )
}
export default Button