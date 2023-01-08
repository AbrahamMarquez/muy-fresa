import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const Us = lazy(() => import("../../../pages/guest/Us/Us"));

//skeleton
import UsSkeleton from "../../../pages/guest/Us/UsSkeleton";


export default function () {
    
    return (
        <Routes>
            <Route
                path="/us"
                element={<Suspense fallback={<UsSkeleton />}>
                    <Us />
                </Suspense>}
            />

        </Routes>
    )
}