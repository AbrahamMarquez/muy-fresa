import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const Event = lazy(() =>import("../../../pages/Guest/Event/Event.jsx"));

//skeletons
import EventSkeleton from "../../../pages/Guest/Event/EventSkeleton.jsx";


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