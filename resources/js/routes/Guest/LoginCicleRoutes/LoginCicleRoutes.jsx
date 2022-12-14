import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RecoverPasswordSkeleton from "../../../pages/guest/loginCicle/RecoverPassword/RecoverPasswordSkeleton";
import VerificationCodeSkeleton from "../../../pages/guest/loginCicle/VerificationCode/VerificationCodeSkeleton";
import VerificationPassword from "../../../pages/guest/loginCicle/VerificationPassword/VerificationPassword";
import VerificationPasswordSkeleton from "../../../pages/guest/loginCicle/VerificationPassword/VerificationPasswordSkeleton";
const VerificationCode = lazy(()=>import("../../../pages/guest/loginCicle/VerificationCode/VerificationCode"))
const RecoverPassword = lazy(()=>import("../../../pages/guest/loginCicle/RecoverPassword/RecoverPassword"))
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
                
            </Routes>
        </>
    )
}
export default LoginCicleRoutes