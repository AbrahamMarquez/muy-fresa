import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Arreglo from "../../../pages/guest/ArreglosCicle/Arreglo/Arreglo";

const ArreglosCicle = () => {
    //como no lleva chocolate en el header aqui se le quita 
    
    return (
        <>
            <Routes>
                <Route
                    path="/arrangements"
                    element={
                        <Suspense fallback={<></>}>
                            <Arreglo></Arreglo>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    )
}
export default ArreglosCicle