import React, { useState } from "react";
import './CarCard.scss'
import cardImd from '../../../img/arreglos/cards/c10.jpg';
import trash from '../../../img/icons/trash.svg';
import Counter from '../../molecules/Counter/Counter'

const CarCard = ({ title, description, price, onClick }) => {
    const [counter, setCounter] = useState(1)
    return (
        <>
            <div className="CarCard" >
                <div className="content">
                    <div className="z-index">
                        <img src={cardImd} className={"img-product"}></img>
                        {
                            window.screen.width < 1024 ?
                                <>
                                    
                                        <Counter value={counter} setValue={setCounter} title={""} className={"conter-class"}></Counter>
                                    
                                </> : ""
                        }
                    </div>
                    <div className="description">
                        <div className="z-index">
                            <div className="title">{title}</div>
                            <div className="text">{description}</div>
                            <div className="front">
                                {
                                    window.screen.width > 1023 ?
                                        <>
                                            <Counter value={counter} setValue={setCounter} title={""} className={"conter-class"}></Counter>
                                        </> : ""
                                }
                            </div>
                        </div>
                        <div className="price-container">
                            <div className="z-index">
                                <div className="title">Precio</div>
                                <div className="price">{price}</div>
                            </div>
                            <img className="img-trash" src={trash}></img>
                        </div>
                    </div>
                </div>
                <div className="coverCarCard" onClick={onClick}></div>
            </div>

        </>
    )
}
export default CarCard 