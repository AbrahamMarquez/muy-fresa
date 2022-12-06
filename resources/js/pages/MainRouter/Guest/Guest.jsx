import { lazy, Suspense } from "react"

//components
const HomeRoutes = lazy(() => import("../../../routes/Guest/Home/HomeRoutes"));
const Header = lazy(() => import("../../../components/organisms/Header/Header"));

//skeleton
import HeaderSkeleton from "../../../components/organisms/Header/HeaderSkeleton";

const Guest = () => {

    return (
        <>
            <Suspense fallback={<HeaderSkeleton/>}>
                <Header/>
            </Suspense>

            
            <HomeRoutes/>

        </>
    )
}

export default Guest