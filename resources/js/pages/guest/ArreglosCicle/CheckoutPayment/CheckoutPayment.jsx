import React, { useEffect, useState } from "react";
import './CheckoutPayment.scss'
import "../../../MainRouter/MainRouter.scss";
import charge from '../../../../img/icons/compra-procesando.gif'
import error from '../../../../img/icons/compra-error.gif'
import valid from '../../../../img/icons/compra-exitosa.gif'
const CheckoutPayment = () => {
    const [timer, setTimer] = useState(false)
    const [validPay, setValidPay] = useState(false)
    useEffect(() => {
        setTimeout(function () {
            setTimer(true)
        }, 2000);
    }, [timer])
    return (
        <>
            <div className="generalBackground-mr" >
                <div className="CheckoutPayment">
                    <div className="content">
                        {
                            timer ?
                                <>
                                    <img src={charge}></img>
                                </> :
                                validPay ?
                                    <>
                                        <img src={valid}></img>
                                    </> :
                                    <img src={error}></img>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckoutPayment