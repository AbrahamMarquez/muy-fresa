import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const Home = lazy(() => import("../../../pages/Guest/Home/Home"));
const Login = lazy(() => import("../../../pages/Guest/Login/Login"))

//skeleton
import HomeSkeleton from "../../../pages/Guest/Home/HomeSkeleton";
import LoginSkeleton from "../../../pages/guest/Login/LoginSkeleton";

export default function () {
    return (
        <Routes>
            <Route
                path="/"
                element={<Suspense fallback={<HomeSkeleton />}>
                    <Home />
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