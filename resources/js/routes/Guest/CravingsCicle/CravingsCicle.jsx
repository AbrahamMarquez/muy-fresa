import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Cravings from "../../../pages/guest/ClavingsCicle/Cravings/Cravings";
import  "../../../pages/MainRouter/MainRouter.scss";
import './CravingsCicle.scss'


const CravingsCicle = ()=>
{
    return(
        <>
            <Routes>
                <Route
                        path="/cravings"
                        element={
                            <Suspense fallback={<>skeleton</>}>
                                <Cravings></Cravings>
                            </Suspense>
                        }
                    />
            </Routes>
        </>
    )
}
export default CravingsCicle