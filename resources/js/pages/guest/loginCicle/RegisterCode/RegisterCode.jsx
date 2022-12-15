import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import './RegisterCode.scss'
import '../RecoverPassword/RecoverPassword.scss'
import '../VerificationCode/VerificationCode.scss'
import ReactCodeInput from "react-verification-code-input";
import Button from "../../../../components/atoms/Button/Button";

const RegisterCode = ()=>
{
    const timeCookieRegister = new Cookies();
    const navigate = useNavigate()
    const [code, setCode] = useState('');
    const [isCliked, setIsCliked] = useState(false);

    const validateCode = (code) => {
        if (code !== "12345") {
            setIsCliked(true)
        }
        else {
            setIsCliked(false)
            navigate("/conditions")
        }
    }
    // tiempo 
    const [timeTotal, setTimeTotal] = useState()


    
    function timer(start) {
        var sec = start;
        var timer = setInterval(function () {
            document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
            // console.log("sec",sec);
            setTimeTotal(sec)
            timeCookieRegister.set("time", sec, { path: '/verification-code' })
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                document.getElementById('safeTimerDisplay').innerHTML = 'Reenviar código';
            }
        }, 1000);
    }
    useEffect(() => {
        const infoCokie = timeCookieRegister.get('time')
        if (infoCokie) {
            timer(infoCokie)
        }
        else {
            timer(0)
        }

    }, [])
    return(
        <>
            <div className="generalBackground">
                <div className="RecoverPassword VerificationCode">
                    <div className="card">
                        <div className="title">
                            Registra tu código
                        </div>
                        <div className="subtitle">
                            Ingresa el código enviado
                        </div>
                        {/* codigo de verificacion */}
                        <div className={isCliked ? "code-box-red" : "code-border"}>
                            <div className="code-border-red" style={{ zIndex: "1" }}>
                                <ReactCodeInput fields={5} fieldWidth={50} fieldHeight={80} onComplete={(e) => setCode(e)} autoFocus={true} ></ReactCodeInput>
                            </div>
                            <div className="contorn"></div>
                        </div>
                        {/* --------------------------> */}
                        <div className="buttons-container"  style={{display:"block"}}>
                            {/* <Button className={"button"} onClick={() => { navigate('/login') }}>Cancelar</Button> */}
                            <Button className={"button"} onClick={() => { validateCode(code) }} color={'red'}>Validar código</Button>
                        </div>
                        {/* time */}
                        <div className="time-cotainer" onClick={() => { }}>
                            <div id="safeTimerDisplay" style={{cursor: "pointer"}} onClick={() => { timeTotal == 0 ? timer(60) : "" }}></div>
                        </div>
                        {/* --------> */}
                    </div>
                </div>

            </div>
        </>
    )
}
export default RegisterCode