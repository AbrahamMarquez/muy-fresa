import React from "react";
import './ShopCar.scss'
import "../../../MainRouter/MainRouter.scss";
import CarCard from "../../../../components/organisms/CarCard/CarCard";
import Button from "../../../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";


const ShopCar = () => {
    const navigate = useNavigate();

    const dataCards = [
        {
            title: "Fresas con chocolate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
            price: "$115.00 MXN",
            urlClick:"/arrangements/Fresas%20con%20chocolate/show"
        },
        {
            title: "Fresas con chocolate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
            price: "$115.00 MXN",
            urlClick:"/arrangements/Fresas%20con%20chocolate/show"
        },
        {
            title: "Fresas con chocolate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
            price: "$115.00 MXN",
            urlClick:"/arrangements/Fresas%20con%20chocolate/show"
        },
        {
            title: "Fresas con chocolate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
            price: "$115.00 MXN",
            urlClick:"/arrangements/Fresas%20con%20chocolate/show"
        },

    ]
    return (
        <>
            <div className="generalBackground-mr">
                <div className="ShopCar">
                    <div className="grid-display">
                        <div className="col1">
                            <div className="cards-container">
                                {
                                    dataCards.map((item) => {
                                        return (
                                            <>
                                                <CarCard
                                                    title={item.title} description={item.description} price={item.price} onClick={()=>{navigate(item.urlClick)}}/>
                                            </>
                                        )
                                    })
                                }

                            </div>

                        </div>
                        <div className="col2">
                            <div className="card-col2">
                                <div className="content">
                                    <div className="left">
                                        <div className="subtotal-f">Subtotal:</div>
                                        <div className="subtotal">Costo de envío:</div>
                                        <div className="total">Total:</div>
                                    </div>
                                    <div className="right">
                                        <div className="price">$805.00 MXN</div>
                                        <div className="price">$100.00 MXN</div>
                                        <div className="total-green">$905.00 MXN</div>
                                    </div>
                                </div>
                                <Button color={"red"} onClick={()=>{navigate('/arrangements/checkout')}}>Proceder al pago</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopCar