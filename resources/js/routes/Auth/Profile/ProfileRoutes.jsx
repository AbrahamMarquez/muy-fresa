import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
const Profile = lazy(() => import("../../../pages/Auth/Profile/Profile"));

//skeletons
import ProfileSkeleton from "../../../pages/Auth/Profile/ProfileSkeleton";

const ProfileRoute = ()=>
{
    return(
        <>
            <Routes>
                <Route
                        path="/profile"
                        element={
                            <Suspense fallback={<ProfileSkeleton/>}>
                                <Profile/>
                            </Suspense>
                        }
                    />
            </Routes>
        </>
    )
}
export default ProfileRoute