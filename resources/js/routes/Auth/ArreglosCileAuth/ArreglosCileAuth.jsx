import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ShopCar from "../../../pages/guest/ArreglosCicle/ShopCar/ShopCar";


const ArreglosCicleAuth = () => {
    //como no lleva chocolate en el header aqui se le quita 
    
    return (
        <>
            <Routes>
                <Route
                    path="/arrangements/car"
                    element={
                        <Suspense fallback={<></>}>
                            
                            <ShopCar></ShopCar>
                            
                        </Suspense>
                    }
                />
                
            </Routes>
        </>
    )
}
export default ArreglosCicleAuth