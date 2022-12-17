import { lazy, Suspense, useEffect } from "react"
import { useLocation } from "react-router-dom";
import HeaderNoChocolate from "../../../components/organisms/Header/HeaderNoChocolate";

//components
const HomeRoutes = lazy(() => import("../../../routes/Guest/Home/HomeRoutes"));
const Header = lazy(() => import("../../../components/organisms/Header/Header"));
const Footer = lazy(() => import("../../../components/organisms/Footer/Footer"));

//skeleton
import HeaderSkeleton from "../../../components/organisms/Header/HeaderSkeleton";
import ArreglosCicle from "../../../routes/Guest/ArreglosCicle/ArreglosCicle";
import LoginCicleRoutes from "../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes";

const Guest = () => {
    const route = useLocation()
    
    return (
        <>
            <Suspense fallback={<HeaderSkeleton/>}>
                {
                    route.pathname == '/' ||
                    route.pathname == '/login' ||
                    route.pathname == '/recover-password'||
                    route.pathname == '/verification-code'||
                    route.pathname == '/verification-password'||
                    route.pathname == '/register'||
                    route.pathname == '/register-code'||
                    route.pathname == '/conditions'
                    ?
                    <>
                        <Header/>
                    </>:
                        <HeaderNoChocolate/>
                }
            </Suspense>
            <HomeRoutes/>
            <LoginCicleRoutes/>
            <ArreglosCicle/>
            

            

            <Suspense fallback={<div/>}>
                <Footer />
            </Suspense>
        </>
    )
}

export default Guest