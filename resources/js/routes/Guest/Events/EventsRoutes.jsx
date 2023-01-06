import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const Event = lazy(() =>import("../../../pages/guest/Event/Event"));

//skeletons
import EventSkeleton from "../../../pages/guest/Event/EventSkeleton";


const EventsRoute = ()=>
{
    return(
        <>
            <Routes>
                <Route
                        path="/event"
                        element={
                            <Suspense fallback={<EventSkeleton/>}>
                                <Event/>
                            </Suspense>
                        }
                    />
            </Routes>
        </>
    )
}
export default EventsRoute