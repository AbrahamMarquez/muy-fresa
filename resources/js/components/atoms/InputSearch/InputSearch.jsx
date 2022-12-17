import React from "react";
import './InputSearch.scss'
import lupa from '../../../img/icons/lupa.svg'

const InputSearch = ({className})=>
{
    return(
        <>
            <div className="InputSearch">
            
                <div class="input-wrapper">
                <input type="search" className={`input password ${className}`} placeholder="Search"/>
                <img src={lupa} className="input-icon password" />
                </div>
            </div>
        </>
    )
}
export default InputSearch