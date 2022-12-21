import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
const ShopCar = lazy(()=>import("../../../pages/guest/ArreglosCicle/ShopCar/ShopCar"))
import ShopCarSkeleton from "../../../pages/guest/ArreglosCicle/ShopCar/ShopCarSkeleton";


const ArreglosCicleAuth = () => {
    //como no lleva chocolate en el header aqui se le quita 
    
    return (
        <>
            <Routes>
                <Route
                    path="/shopping"
                    element={
                        <Suspense fallback={<ShopCarSkeleton/>}>
                            {/* <ShopCarSkeleton/> */}
                            <ShopCar></ShopCar>
                            
                        </Suspense>
                    }
                />
                
                
            </Routes>
        </>
    )
}
export default ArreglosCicleAuth