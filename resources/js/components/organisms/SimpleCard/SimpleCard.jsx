import React from "react";
import './SimpleCard.scss'

const SimpleCard = ({data})=>
{
    return(
        <>
            <div className="SimpleCard">
                <div className="container">
                    <img className="img" src={data.img}></img>
                    <div className="text-contaiener">
                        <div className="title">{data.title}</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SimpleCard