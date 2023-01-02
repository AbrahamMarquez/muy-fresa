import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
const Arreglo = lazy(()=>import("../../../pages/guest/ArreglosCicle/Arreglo/Arreglo"))
import ArregloSkeleton from "../../../pages/guest/ArreglosCicle/Arreglo/ArregloSkeleton";
import Product from "../../../pages/guest/ArreglosCicle/Arreglo/Product/Product";
const Show = lazy(()=>import("../../../pages/guest/ArreglosCicle/Arreglo/Show/Show"))
import ShowSkeleton from "../../../pages/guest/ArreglosCicle/Arreglo/Show/ShowSkeleton";
import Checkout from "../../../pages/guest/ArreglosCicle/Checkout/Checkout";
import CheckoutPayment from "../../../pages/guest/ArreglosCicle/CheckoutPayment/CheckoutPayment";

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
                <Route
                    path="/arrangements/checkout"
                    element={
                        <Suspense fallback={<></>}>
                            <Checkout></Checkout>
                        </Suspense>
                    }
                />
                <Route
                    path="/arrangements/checkout/payment"
                    element={
                        <Suspense fallback={<></>}>
                            <CheckoutPayment></CheckoutPayment>
                        </Suspense>
                    }
                />
                <Route
                    path="/arrangements/checkout/product"
                    element={
                        <Suspense fallback={<></>}>
                            <Product></Product>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    )
}
export default ArreglosCicle