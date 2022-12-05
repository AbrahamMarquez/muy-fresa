import { lazy, Suspense, useState } from "react"

//components
const Header = lazy(() => import("../../../components/organisms/Header/Header"));

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

        </>
    )
}

export default Guest