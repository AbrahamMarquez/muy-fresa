import { lazy, Suspense } from "react"

//components
const HomeRoutes = lazy(() => import("../../../routes/Guest/Home/HomeRoutes"));
const Header = lazy(() => import("../../../components/organisms/Header/Header"));
const Footer = lazy(() => import("../../../components/organisms/Footer/Footer"));

//skeleton
import HeaderSkeleton from "../../../components/organisms/Header/HeaderSkeleton";
import LoginCicleRoutes from "../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes";

const Guest = () => {

    return (
        <>
            <Suspense fallback={<HeaderSkeleton/>}>
                <Header/>
            </Suspense>

            <LoginCicleRoutes></LoginCicleRoutes>
            <HomeRoutes/>
            

            

            <Suspense fallback={<div/>}>
                <Footer />
            </Suspense>
        </>
    )
}

export default Guest