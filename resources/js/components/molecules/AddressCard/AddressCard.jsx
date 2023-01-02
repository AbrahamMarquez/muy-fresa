import React from "react";
import './AddressCard.scss'
import hause from "../../../img/icons/hause.svg"
const AddressCard = ({data,onClick})=>
{
    return(
        <>
            <div className={`AddressCard `} id={data.id} onClick={onClick}>
                <img  src={hause} width="20px" height={"20px"}/>
                <div className="info">
                    <div>{data.name}</div>
                    <div>No. 1: {data.no1}</div>
                    <div>No. 2: {data.no2}</div>
                    <div>{data.street}</div>
                    <div>{data.state}</div>
                    <div>{data.reference}</div>
                </div>
            </div>
        </>
    )
}

export default AddressCard