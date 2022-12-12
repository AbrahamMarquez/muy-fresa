import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const Home = lazy(() => import("../../../pages/guest/Home/Home"));
const Login = lazy(() => import("../../../pages/guest/Login/Login"))

//skeleton
import HomeSkeleton from "../../../pages/guest/Home/HomeSkeleton";
import LoginSkeleton from "../../../pages/guest/Login/LoginSkeleton";

export default function () {
    return (
        <Routes>
            <Route
                path="/"
                element={<Suspense fallback={<HomeSkeleton />}>
                    <Home />
                    {/* <HomeSkeleton /> */}
                </Suspense>}
            />

            <Route
                path="/login"
                element={<Suspense fallback={<LoginSkeleton />}>
                    <Login />
                </Suspense>}
            />
        </Routes>
    )
}