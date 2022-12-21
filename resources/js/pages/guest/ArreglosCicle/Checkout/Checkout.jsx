import React from "react";
import './Checkout.scss'
import "../../../MainRouter/MainRouter.scss";
import Button from "../../../../components/atoms/Button/Button";
import calendarIcon from '../../../../img/icons/calendar.svg'
import CheckoutCard from "../../../../components/organisms/CheckoutCard/CheckoutCard";
const Checkout = () => {
    return (
        <>
            <div className="generalBackground-mr">
                <div className="Checkout">
                    <div className="checkout-grid">

                        <div className="col1">
                            <div className="card">
                                <div className="calndar-container">
                                    <div className="content-calendar">
                                        <img className="img-calendar" src={calendarIcon}/>
                                        <div className="color-calendar">Selecciona fecha y horario</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-2">
                                <div className="content">
                                    <div className="left">
                                        <div className="subtotal-f">Subtotal:</div>
                                        <div className="subtotal">Costo de envío:</div>
                                        <div className="envio">{"Envío(Añadir direccion)"}</div>
                                        <div className="total">Total:</div>
                                    </div>
                                    <div className="right">
                                        <div className="price">$805.00 MXN</div>
                                        <div className="price">$100.00 MXN</div>
                                        <div></div>
                                        <div className="total-green">$905.00 MXN</div>
                                    </div>
                                </div>
                                <div className="buttons-container">
                                    <Button color={"red"} onClick={() => { navigate('#') }}>Realizar pedido</Button>
                                </div>
                                <Button onClick={() => { navigate('#') }}>Seguir comprando</Button>
                            </div>

                        </div>
                        <div className="col2">
                            <CheckoutCard price="$115.00 MXN" cuatity={1} title={"Fresas con chocolate"} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.'></CheckoutCard>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout