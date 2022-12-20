import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
const Arreglo = lazy(()=>import("../../../pages/guest/ArreglosCicle/Arreglo/Arreglo"))
import ArregloSkeleton from "../../../pages/guest/ArreglosCicle/Arreglo/ArregloSkeleton";
const Show = lazy(()=>import("../../../pages/guest/ArreglosCicle/Arreglo/Show/Show"))
import ShowSkeleton from "../../../pages/guest/ArreglosCicle/Arreglo/Show/ShowSkeleton";

const ArreglosCicle = () => {
    //como no lleva chocolate en el header aqui se le quita 
    
    return (
        <>
            <Routes>
                <Route
                    path="/arrangements"
                    element={
                        <Suspense fallback={<ArregloSkeleton/>}>
                            <Arreglo></Arreglo>
                            {/* <ArregloSkeleton/> */}
                        </Suspense>
                    }
                />
                <Route
                    path="/arrangements/:product/show"
                    element={
                        <Suspense fallback={<ShowSkeleton/>}>
                            <Show></Show>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    )
}
export default ArreglosCicle