import React, { useState } from "react";
import './CheckoutCard.scss'
import cardImd from '../../../img/arreglos/cards/c10.jpg';
import trash from '../../../img/icons/trash.svg';
import Counter from '../../molecules/Counter/Counter'

const CheckoutCard = ({ title, description, price, onClick, cuatity }) => {
    const [counter, setCounter] = useState(1)
    return (
        <>
            <div className="CarCard-checkout" >
                <div className="content">
                    <div className="z-index">
                        <div className="x-button-container">
                            <img src={cardImd} className={"img-product"}></img>
                            <div className="x-button">x</div>
                            {
                            window.screen.width < 1024 ?
                                <>
                                    <div className="cuatity">x{cuatity}</div>
                                </> : ""
                        }
                        </div>

                    </div>
                    <div className="description">
                        <div className="z-index">
                            <div className="title">{title}</div>
                            <div className="text">{description}</div>
                        </div>
                        {
                            window.screen.width > 1023 ?
                                <>
                                    <div className="cuatity">x{cuatity}</div>
                                </> : ""
                        }
                        <div className="price-container">
                            <div className="z-index">
                                <div className="price">{price}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coverCarCard" onClick={onClick}></div>
            </div>

        </>
    )
}
export default CheckoutCard 