import React, { useState } from "react";
import './Checkout.scss'
import "../../../MainRouter/MainRouter.scss";
import Button from "../../../../components/atoms/Button/Button";
import calendarIcon from '../../../../img/icons/calendar.svg'
import CheckoutCard from "../../../../components/organisms/CheckoutCard/CheckoutCard";
import Calendar from "../../../../components/molecules/GeneralCalendar/GeneralCalendar";
import { useNavigate } from "react-router-dom";
import SendDirectionModal from "../../../../components/molecules/SendDirectionModal/SendDirectionModal";

const Checkout = () => {
    const navigate = useNavigate()
    const cardData = [
        {
            price: "$115.00 MXN",
            cuatity: 1,
            title: "Fresas con chocolate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."
        },
        {
            price: "$115.00 MXN",
            cuatity: 1,
            title: "Fresas con chocolate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."
        },
        {
            price: "$115.00 MXN",
            cuatity: 1,
            title: "Fresas con chocolate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."
        },
        {
            price: "$115.00 MXN",
            cuatity: 1,
            title: "Fresas con chocolate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."
        },
    ]
    const [date, setDate] = useState()
    const [showCalendar,setShowCalendar] = useState(false)
    const [openModalAddress,setOpenModalAddress] = useState(true)
    return (
        <>
            <div className="generalBackground-mr">
                <div className="Checkout">
                    <div className="checkout-grid">

                        <div className="col1">
                            <div className="card" onClick={() => { setShowCalendar(true) }}>
                                <div className="calndar-container">
                                    <div className="content-calendar" >
                                        <img className="img-calendar" src={calendarIcon} />
                                        <div className="color-calendar">Selecciona fecha y horario</div>

                                    </div>
                                </div>
                            </div>
                            <div className="card-2">
                                {
                                    window.screen.width < 1024 ?
                                        <>
                                            <div className="envio mb36" onClick={()=>{setOpenModalAddress(true)}}>{"Envío(Añadir direccion)"} </div>
                                        </> : ""
                                }
                                <div className="content">
                                    <div className="left">
                                        <div className="subtotal-f">Subtotal:</div>
                                        <div className="subtotal">Costo de envío:</div>
                                        {
                                            window.screen.width > 1023 ?
                                                <>
                                                    <div className="envio">{"Envío(Añadir direccion)"}</div>
                                                </> : ""
                                        }
                                        <div className="total">Total:</div>
                                    </div>
                                    <div className="right">
                                        <div className="price">$805.00 MXN</div>
                                        <div className="price">$100.00 MXN</div>
                                        {
                                            window.screen.width > 1023 ?
                                                <>
                                                    <div></div>
                                                </> : ""
                                        }
                                        <div className="total-green">$905.00 MXN</div>
                                    </div>
                                </div>
                                <div className="buttons-container">
                                    <Button color={"red"} onClick={() => { navigate('/arrangements/checkout/product') }}>Realizar pedido</Button>
                                </div>
                                <Button onClick={() => { navigate('#') }}>Seguir comprando</Button>
                            </div>

                        </div>
                        <div className="col2">
                            <div className="cards-container">
                                {
                                    cardData.map((item) => {
                                        return (
                                            <>
                                                <CheckoutCard price={item.price} cuatity={item.cuatity} title={item.title} description={item.description}></CheckoutCard>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            
            </div>
            {
                showCalendar?
                <Calendar value={date} setValue={setDate} openModal={setShowCalendar}></Calendar>
                :""
            }
            {
                openModalAddress?
                <SendDirectionModal setOpenModalAddress={setOpenModalAddress}></SendDirectionModal>
                :""
            }

        </>
    )
}
export default Checkout