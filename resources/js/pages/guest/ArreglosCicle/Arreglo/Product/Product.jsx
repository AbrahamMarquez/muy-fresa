import React, { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Product.scss'
import "../../../../MainRouter/MainRouter.scss";
import imageCrd from '../../../../../img/arreglos/cards/c4.jpg'
import cardImg from '../../../../../img/arreglos/cards/cards.png'
import visa from '../../../../../img/arreglos/cards/visa.png'
import masterCard from '../../../../../img/arreglos/cards/master.png'
import americanExpress from '../../../../../img/arreglos/cards/american-express.png'
import calendar from '../../../../../img/icons/calendar.svg'
import SimpleCard from "../../../../../components/organisms/SimpleCard/SimpleCard";
import TextArea from "../../../../../components/atoms/TextArea/TextArea";
import InputText from "../../../../../components/atoms/InputText/InputText";
import Button from "../../../../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([
        {
            cardData: {
                img: imageCrd,
                title: "Fresas con chocolate",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."
            },
            price: "$115.00 MXN",
            cuantity: "1",
            total: "$115.00 MXN"
        },
        {
            cardData: {
                img: imageCrd,
                title: "Fresas con chocolate",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."
            },
            price: "$115.00 MXN",
            cuantity: "1",
            total: "$115.00 MXN"
        },
        {
            cardData: {
                img: imageCrd,
                title: "Fresas con chocolate",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."
            },
            price: "$115.00 MXN",
            cuantity: "1",
            total: "$115.00 MXN"
        },
        {
            cardData: {
                img: imageCrd,
                title: "Fresas con chocolate",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."
            },
            price: "$115.00 MXN",
            cuantity: "1",
            total: "$115.00 MXN"
        },
    ]);
    const calcTotal = {
        subtotal: "$345.00 MNX",
        direction: " (Federico E. Ibarra 2345)",
        envio: "$100.00 MNX",
        total: "$445.00 MXN"
    }

    const getCard = (rowData) => {
        console.log("rowData", rowData)
        return (
            <>
                <SimpleCard data={rowData.cardData}></SimpleCard>
            </>
        )
    }

    return (
        <>
            <div className="generalBackground-mr" >
                <div className="Product-arr">
                    <div className="title-general">1. Datos del pedido</div>
                    <DataTable value={products} responsiveLayout="scroll">
                        <Column body={getCard} header="Producto"></Column>
                        <Column field="price" header="Precio"></Column>
                        <Column field="cuantity" header={window.screen.width<1024?"Cant.":"Cantidad"}></Column>
                        <Column field="total" header="total"></Column>
                    </DataTable>
                    <div className="calcs">
                        <div className="container-c">
                            <div className="calc">Subtotal:</div>
                            <div className="datac">{calcTotal.subtotal}</div>
                        </div>
                        <div className="container-c">
                            <div className="calc">Costo de envío {calcTotal.direction}:</div>
                            <div className="datac">{calcTotal.subtotal}</div>
                        </div>
                    </div>
                    <div className="calcs margin-bottomtitle">
                        <div className="container-c">
                            <div className="total">Total:</div>
                            <div className="datac">{calcTotal.total}</div>
                        </div>
                    </div>
                    {/* ----------------------------------------------------------------------------------------------------->2. Datos de envío y formas de pago: */}
                    <div className="title-general">2. Datos de envío y formas de pago:</div>
                    <div className="part2-grid">
                        <div className="col1">
                            <div className="title-red mb-21">1.Datos de envío:</div>
                            <div className="date-container">
                                <img className="img-calendar" src={calendar} alt="" />
                                <div className="text-calendar">
                                    <div>
                                        Vie.1, julio
                                    </div>
                                    <div>
                                        2:30 pm - 5:00pm
                                    </div>
                                </div>
                            </div>
                            {/* --------------------------------------------------------------->data */}
                            <div className="container-data-general">
                                <div className="data-container">
                                    <div className="dataTitle">Nombre del comprador :</div>
                                    <div className="dataInfo">Elizabeth Spencer</div>
                                </div>
                                <div className="data-container">
                                    <div className="dataTitle">Nombre del destinatario:</div>
                                    <div className="dataInfo">Nataly Bernal Sánchez</div>
                                </div>
                                <div className="data-container">
                                    <div className="dataTitle">Información de envío:</div>
                                    <div className="dataInfo">Dirección: Federico E. Ibarra No. 2345 Jalisco, Zapopan</div>
                                    <div className="dataInfo">Código Postal: 3456</div>
                                    <div className="dataInfo">Tipo de domicilio: Residencia</div>
                                </div>
                                <div className="data-container">
                                    <div className="dataTitle">Telefono de contacto:</div>
                                    <div className="dataInfo">No. 1: 3323456585</div>
                                    <div className="dataInfo"> No. 2: 3823456585</div>
                                </div>
                            </div>

                            <div className="title-red mb-21">2. Dedicatoria:</div>
                            <div className="message-container">
                                <div className="title-message">Mensaje</div>
                                <div className="message">
                                    <TextArea></TextArea>
                                </div>
                                <div className="title-message">Firma</div>
                                <InputText placeholder={"Scott Houston"}></InputText>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="title-red mb-21">3. Metodos de pago:</div>
                            <div className="pay-container">

                                <img src={cardImg} className='cardImg-pay' />
                                <div className="description">
                                    Aún no tienes métodos de pago guardados
                                </div>
                                <Button className={"buttonPay"}>Agregar tarjeta</Button>
                            </div>
                            <div className="payTota-container">
                                <div className="pay">1 Pago de <b> $445.00 MXN</b></div>
                                <div className="visa-container">
                                    <div className="visaText">
                                        Aceptamos las siguientes tarjetas de debito
                                    </div>
                                    <div className="visaContainerImg">
                                        <img src={visa} className="imgVisa" />
                                        <img src={masterCard} className="imgVisa" />
                                        <img src={americanExpress} className="imgVisa" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-contianer">
                                <Button color={"red"} className={"btnVisa" } onClick={()=>{navigate("/arrangements/checkout/payment")}}>Realizar pedido</Button>
                                <Button onClick={()=>{navigate("/shopping")}}  className={"btnVisa"}>Regresar al carrito</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Product