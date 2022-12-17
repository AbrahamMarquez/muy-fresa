import { Skeleton } from "primereact/skeleton";
import React, { useState, useEffect } from "react";
import './InputPassword.scss';
import eye from '../../../img/login/Eyes.svg'
import closeEye from '../../../img/login/EyeClose.svg'

const InputPassword = ({ placeholder, id, onChange, value, className, title, required = true, autoComplete = 'on', disabled, skeleton }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [iconsChange, setIconchange] = useState(true);
    const togglePassword = () => {
        if (!disabled) {
            setPasswordShown(!passwordShown);
            setIconchange(!iconsChange);
        }
    };
    return (!skeleton ?
        <>

            <div className={`input-text-password ${className}`}>
                <div className="title_INPUT_PASSWORD">{title}</div>
                <div className="input-wrapper" >


                    <input id={id} value={value} onChange={onChange} className={`input-pass`} placeholder={placeholder}
                        type={passwordShown ? "text" : 'password'} autoComplete={autoComplete} disabled={disabled}
                    />
                    {
                        iconsChange ?
                            <>
                                <div>
                                    <img className="input-icon-password" src={eye} onClick={togglePassword}></img>
                                </div>
                            </> :
                            <>
                                <div>
                                    <img className="input-icon-password" src={closeEye} onClick={togglePassword}></img>
                                </div>
                            </>

                    }


                </div>
            </div>
        </>

        : <Skeleton width={width || "100%"} className={className} height="73px" />
    );
}
export default InputPassword;