import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const Gallery = lazy(() => import("../../../pages/guest/Gallery/Gallery"));

//skeletons
import GallerySkeleton from "../../../pages/guest/Gallery/GallerySkeleton";


const GalleryRoute = ()=>
{
    return(
        <>
            <Routes>
                <Route
                        path="/gallery"
                        element={
                            <Suspense fallback={<GallerySkeleton/>}>
                                <Gallery/>
                            </Suspense>
                        }
                    />
            </Routes>
        </>
    )
}
export default GalleryRoute