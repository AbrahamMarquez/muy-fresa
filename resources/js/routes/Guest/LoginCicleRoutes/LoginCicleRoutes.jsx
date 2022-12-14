import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RecoverPasswordSkeleton from "../../../pages/guest/loginCicle/RecoverPassword/RecoverPasswordSkeleton";

import RegisterSkeleton from "../../../pages/guest/loginCicle/Register/RegisterSkeleton";
import VerificationCodeSkeleton from "../../../pages/guest/loginCicle/VerificationCode/VerificationCodeSkeleton";
import VerificationPasswordSkeleton from "../../../pages/guest/loginCicle/VerificationPassword/VerificationPasswordSkeleton";
const VerificationCode = lazy(()=>import("../../../pages/guest/loginCicle/VerificationCode/VerificationCode"))
const VerificationPassword = lazy(()=>import("../../../pages/guest/loginCicle/VerificationPassword/VerificationPassword"))
const RecoverPassword = lazy(()=>import("../../../pages/guest/loginCicle/RecoverPassword/RecoverPassword"))
const Register  = lazy(()=>import("../../../pages/guest/loginCicle/Register/Register"))

const LoginCicleRoutes =()=>
{
    return(
        <>
            <Routes>
                <Route 
                    path="/recover-password"
                    element={
                        <Suspense fallback={<RecoverPasswordSkeleton/>}>
                            <RecoverPassword></RecoverPassword>
                        </Suspense>
                    }
                />
                <Route 
                    path="/verification-code"
                    element=
                    {
                        <Suspense fallback={<VerificationCodeSkeleton/>}>
                            <VerificationCode></VerificationCode>
                        </Suspense>
                    }
                />
                <Route 
                    path="/verification-password"
                    element=
                    {
                        <Suspense fallback={<VerificationPasswordSkeleton/>}>
                            <VerificationPassword/>
                        </Suspense>

                    }
                />
                <Route 
                    path="/register"
                    element=
                    {
                        <Suspense fallback={<RegisterSkeleton/>}>
                            <Register/>
                        </Suspense>

                    }
                />
                
            </Routes>
        </>
    )
}
export default LoginCicleRoutes