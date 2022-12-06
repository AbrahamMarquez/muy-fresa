import { lazy, Suspense, useState } from "react"
import { Route, Routes } from "react-router-dom";

//components
const Header = lazy(() => import("../../../components/organisms/Header/Header"));
const Login = lazy(() => import("../../../pages/guest/Login/Login"));

//skeleton
import HeaderSkeleton from "../../../components/organisms/Header/HeaderSkeleton";

const Guest = () => {
    const [openMenu, setOpenMenu] = useState(0);

    return (
        <>
            <Suspense fallback={<></>}>
                {/* <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} /> */}
            </Suspense>

            <Suspense fallback={<HeaderSkeleton/>}>
                <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </Suspense>

            <Routes>
                <Route 
                    path="/login"
                    element={<Suspense fallback={<div />}>
                        <Login />
                    </Suspense>}
                />
            </Routes>
        </>
    )
}

export default Guest