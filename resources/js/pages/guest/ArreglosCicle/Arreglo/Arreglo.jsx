import React, { useEffect } from "react";
import './Arreglo.scss'
import '../../../MainRouter/MainRouter.scss'
import SideSearchArregement from "../../../../components/organisms/SideSearchArregement/SideSearchArregement";


const Arreglo = () => {
    
    return (
        <>
            <div className="generalBackground-mr">
                <div className="Arreglo ">
                    <div className="grid-arreglo">
                        <div className="col1">
                            <SideSearchArregement></SideSearchArregement>
                        </div>
                        <div className="col2">no</div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Arreglo