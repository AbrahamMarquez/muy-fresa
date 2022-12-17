import React, { useState } from "react";
import './ArreglosCard.scss'
//card images
import heard from '../../../img/icons/heard.svg'
import carrito from '../../../img/icons/carrito.svg'
import eye from '../../../img/icons/eye.svg'
import heardFill from '../../../img/icons/heard-fill.svg'
import porcentCircle from '../../../img/arreglos/cards/porcentCircle.png'
const ArreglosCard = ({ img, title, price, porcent }) => {
    const [like, setLike] = useState(false)
    return (
        <>
            <div className="ArreglosCard">
                <div className="image-container">
                    {
                        porcent !== '0'?
                        <>
                            <div className="porcent-container">
                                <div className="position-porcent">
                                    {/* <img src={porcentCircle}></img> */}
                                    <div className="porcent">%{porcent}</div>
                                </div>
                            </div>
                        </>:""

                    }
                    <img className="image" src={img}></img>
                    <div className="circleCard-left" onClick={() => { setLike(!like) }}>
                        {
                            like ?
                                <>
                                    <img src={heardFill} />
                                </> :
                                <>
                                    <img src={heard} />
                                </>
                        }

                    </div>
                    <div className="circleCard-bottom">
                        <img src={carrito} />
                    </div>
                    <div className="circleCard-right">
                        <img src={eye} />
                    </div>
                </div>
                <div className="description">
                    <div className="title-card">{title}</div>
                    <div className="price-card">{price}</div>
                </div>
            </div>
        </>
    )
}
export default ArreglosCard