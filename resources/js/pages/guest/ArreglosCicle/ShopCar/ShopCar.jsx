import React from "react";
import './ShopCar.scss'
import "../../../MainRouter/MainRouter.scss";
import CarCard from "../../../../components/organisms/CarCard/CarCard";

const ShopCar = () => {
    return (
        <>
            <div className="generalBackground-mr">
                <div className="ShopCar">
                    <div className="grid-display">
                        <div className="col1">
                        <CarCard></CarCard>
                        </div>
                        <div className="col2">no</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopCar