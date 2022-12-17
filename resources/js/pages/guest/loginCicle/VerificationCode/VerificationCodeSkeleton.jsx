import React, { useEffect, useState } from "react";
import '../RecoverPassword/RecoverPassword.scss'
import './VerificationCode.scss'
import "../../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes.scss";
import Button from "../../../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from 'react-verification-code-input';
import Cookies from "universal-cookie";
import { Skeleton } from "primereact/skeleton";
const VerificationCodeSkeleton = () => {
    const navigate = useNavigate()
    const [code, setCode] = useState('');
    const [isCliked, setIsCliked] = useState(false);

    const validateCode = (code) => {
        if (code !== "12345") {
            setIsCliked(true)
        }
        else {
            setIsCliked(false)
            navigate("/update-password")
        }
    }
    // tiempo 
    const [timeTotal, setTimeTotal] = useState()


    const timeCookie = new Cookies();
    function timer(start) {
        var sec = start;
        var timer = setInterval(function () {
            document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
            setTimeTotal(sec)
            timeCookie.set("time", sec, { path: '/verification-code' })
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                document.getElementById('safeTimerDisplay').innerHTML = 'Reenviar código';
            }
        }, 1000);
    }
    useEffect(() => {
        const infoCokie = timeCookie.get('time')
        if (infoCokie) {
            timer(infoCokie)
        }
        else {
            timer(0)
        }

    }, [])
    return (
        <>
            <div className="generalBackground">
                <div className="RecoverPassword VerificationCode">
                    <div className="card">
                        <div className="title" style={{display:'flex',justifyContent:'center'}}>
                            <Skeleton width="300px" height="26px" ></Skeleton>
                        </div>
                        <div className="subtitle"  style={{display:'flex',justifyContent:'center'}}>
                            <Skeleton width="200px" height="20px" ></Skeleton>
                        </div>
                        {/* codigo de verificacion */}
                        <div className={isCliked ? "code-box-red" : "code-border"}>
                            <div className="code-border-red" style={{ zIndex: "1" }}>
                                <Skeleton width="329px" height="100px" ></Skeleton>
                            </div>
                            <div className="contorn"></div>
                        </div>
                        {/* --------------------------> */}
                        <div className="buttons-container">
                            <Skeleton width="100%" height="36px"  className={"button"}></Skeleton>
                            <Skeleton width="100%" height="36px"  className={"button"}></Skeleton>
                        </div>
                        {/* time */}
                        <div className="time-cotainer" onClick={() => { }}>
                         <Skeleton width="110px" height="21px" ></Skeleton>
                        </div>
                        {/* --------> */}
                    </div>
                </div>

            </div>
        </>
    )
}
export default VerificationCodeSkeleton