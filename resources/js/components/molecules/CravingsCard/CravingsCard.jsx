import React from "react";
import "./CravingsCard.scss"

const CravingsCard = ({ img,name,description,price }) => {
    return (
        <>
            <div className="CravingsCard">
                <img src={img} className="imgCard" />
                <div className="info-container">
                    <div className="name">{name}</div>
                    <div className="description">
                        contiene:
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    <div className="price-container">
                        <div className="title-price">De venta solo en sucursales</div>
                        <div className="price-container-green">
                            <div className="price-subtitle">Precio :</div>
                            <div className="price">${price}</div>
                        </div>
                    </div>
                    <div className="button-container">
                            <button className="button-green">Pedir</button>
                        </div>
                </div>
            </div>
        </>
    )
}
export default CravingsCard