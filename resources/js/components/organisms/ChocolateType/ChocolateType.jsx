import { zip } from "lodash";
import React, { useEffect, useState } from "react";
import CheckboxCircle from "../../atoms/CheckBoxCircle/CheckboxCircle";
import './ChocolateType.scss'


const ChocolateType = (props) => {

    return (
        <>
            <div className={`ChocolateType ${props.className}`}>
                <div className="img-check">
                    <img  src={props.img} />
                    <div className="checkarreglo">
                        <CheckboxCircle  id={props.id} value={props.check} setValue={props.setCheck}></CheckboxCircle>
                    </div>
                    {
                        props.discount != '0' ?
                            <>
                                <div className="discount-container">
                                    <div className="background">
                                        <div className="porcent">+ {props.discount}%</div>
                                    </div>
                                </div>
                            </> :""
                    }
                    <div className="description">
                        {props.description}
                    </div>

                </div>
            </div>
        </>
    )
}
export default ChocolateType