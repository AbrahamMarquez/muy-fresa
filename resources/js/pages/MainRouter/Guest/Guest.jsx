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
import CravingsCicle from "../../../routes/Guest/CravingsCicle/CravingsCicle";
import LoginCicleRoutes from "../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes";

//routes
import EventsRoute from "../../../routes/Guest/Events/EventsRoutes";
import GalleryRoute from "../../../routes/Guest/Gallery/GalleryRoutes";

const Guest = ({ setAuth, fakeAuth }) => {
    const route = useLocation()
    return (
        <>
            {fakeAuth == "false" ?
                <>
                    <Suspense fallback={<></>}>
                        {
                            route.pathname == '/' ||
                                route.pathname == '/login' ||
                                route.pathname == '/recover-password' ||
                                route.pathname == '/verification-code' ||
                                route.pathname == '/verification-password' ||
                                route.pathname == '/register' ||
                                route.pathname == '/register-code' ||
                                route.pathname == '/conditions' ||
                                route.pathname == '/cravings' ||
                                route.pathname == '/event' ||
                                route.pathname == '/gallery'
                                ?
                                <>
                                    <Header />
                                </> :
                                <HeaderNoChocolate />
                        }
                    </Suspense>
                </> :
                ""}

            <HomeRoutes setAuth={setAuth} />
            <LoginCicleRoutes />
            <ArreglosCicle />
            <CravingsCicle />
            <EventsRoute />
            <GalleryRoute/>

            <Suspense fallback={<div />}>
                <Footer />
            </Suspense>
        </>
    )
}

export default Guest