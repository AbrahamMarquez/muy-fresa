import React, { useEffect, useState } from "react";
import './CheckoutPayment.scss'
import "../../../MainRouter/MainRouter.scss";
import charge from '../../../../img/icons/compra-procesando.gif'
import error from '../../../../img/icons/compra-error.gif'
import valid from '../../../../img/icons/compra-exitosa.gif'
import Button from "../../../../components/atoms/Button/Button";
import { Navigate, useNavigate } from "react-router-dom";
const CheckoutPayment = () => {
    const navigate = useNavigate();
    const [correct, setCorrect] = useState(false)
    const [incorrect, setIncorrect] = useState(false)
    const [chargest, setChargest] = useState(true)
    const [complete,setCompete] = useState(false)


    useEffect(() => {
        setTimeout(function () {
            setChargest(false)
            setIncorrect(true)
        }, 3000);
    }, [])
    const refresh = () => {
        
        setChargest(true)
        setIncorrect(false)
        setCorrect(false)
        setCompete(true)
    }
    useEffect(()=>
    {
        if(complete == true)
        {
            setTimeout(function () {
                setChargest(false)
                setCorrect(true)
            }, 3000);
        }
    },[complete])
    return (
        <>
            <div className="generalBackground-mr" >
                <div className="CheckoutPayment">
                    <div className="content">
                        {
                            chargest ?
                                <>
                                    <img src={charge} className="img"></img>
                                    <div className="upss">Procesando Pago...</div>
                                </> :
                                ""
                        }
                        {
                            correct ?
                                <>
                                    <img src={valid} className="img"></img>
                                    <div className="upss">¡Pago exitoso!</div>
                                    <div style={{ marginBottom: "30px" }} className="text">Su pago fue procesado Exitosamente</div>
                                    <div className="button-gree-container">
                                        <button className="button-green" onClick={()=>{navigate("/cravings")}}>Aceptar</button>
                                    </div>
                                </> :
                                ""
                        }
                        {
                            incorrect ?
                                <>
                                    <img src={error} className="img"></img>
                                    <div className="upss">Oops...</div>
                                    <div style={{ marginBottom: "30px" }} className="text">Ha ocurrido un error con tu pago</div>
                                    <div className="buttons-container">
                                        <Button classNames={"btn"} onClick={() => { refresh() }}>Reintentar</Button>
                                        <Button classNames={"btn"} color="red" onClick={()=>{navigate("/arrangements/checkout/product")}}>Cerrar</Button>
                                    </div>
                                </> : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckoutPayment