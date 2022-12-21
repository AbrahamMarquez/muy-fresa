import React from "react";
import './ShopCar.scss'
import "../../../MainRouter/MainRouter.scss";
import CarCard from "../../../../components/organisms/CarCard/CarCard";
import Button from "../../../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const ShopCarSkeleton = () => {
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
                                                <Skeleton width="100%" height="186px"></Skeleton>
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
                                        <div className="subtotal-f"> <Skeleton width="100px" height="20px"></Skeleton></div>
                                        <div className="subtotal"><Skeleton width="100px" height="20px"></Skeleton></div>
                                        <div className="total"><Skeleton width="100px" height="20px"></Skeleton></div>
                                    </div>
                                    <div className="right">
                                        <div className="price"><Skeleton width="100px" height="20px"></Skeleton></div>
                                        <div className="price"><Skeleton width="100px" height="20px"></Skeleton></div>
                                        <div className="total-green"><Skeleton width="100px" height="20px"></Skeleton></div>
                                    </div>
                                </div>
                                <Skeleton width="100%" height="40px"></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopCarSkeleton