import React from "react";
import './cardPay.scss'

import card from '../../../img/icons/cardPayG.svg'
const CardPay = ({ name, account }) => {
    return (
        <>
            <div className="cardPay">
                <div className="card">
                    <img className="img" src={card} />
                    <div className="text-container">
                        <div className="text">{name}</div>
                        <div className="text">{account}</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardPay