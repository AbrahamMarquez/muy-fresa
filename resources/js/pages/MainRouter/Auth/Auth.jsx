import { Suspense } from "react"
import { useLocation } from "react-router-dom"
import Footer from "../../../components/organisms/Footer/Footer"
import Header from "../../../components/organisms/Header/Header"
import HeaderAuth from "../../../components/organisms/Header/HeaderAuth"
import HeaderAuthChocolate from "../../../components/organisms/Header/HeaderAuthChocolate"
import HeaderNoChocolate from "../../../components/organisms/Header/HeaderNoChocolate"
import HeaderSkeleton from "../../../components/organisms/Header/HeaderSkeleton"
import userIcon from '../../../img/login/profile.jpg'
import ArreglosCicleAuth from "../../../routes/Auth/ArreglosCileAuth/ArreglosCileAuth"
import ArreglosCicle from "../../../routes/Guest/ArreglosCicle/ArreglosCicle"
import CravingsCicle from "../../../routes/Guest/CravingsCicle/CravingsCicle"
import EventsRoute from "../../../routes/Guest/Events/EventsRoutes"
import GalleryRoute from "../../../routes/Guest/Gallery/GalleryRoutes"
import HomeRoutes from "../../../routes/Guest/Home/HomeRoutes"
import UsRoutes from "../../../routes/Guest/Us/UsRoutes"


const Auth = ({ fakeAuth }) => {
  const route = useLocation()

  return (
    <>
      {fakeAuth=="true" ?
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
                route.pathname == '/gallery'||
                route.pathname == '/us'
                ?
                <>
                  <HeaderAuthChocolate userIcon={userIcon}/>
                </> :
                 <HeaderAuth userIcon={userIcon} />
            }
          </Suspense>
        </> : ""}

      <Suspense fallback={<HeaderSkeleton />}>

       
      </Suspense>


      <ArreglosCicleAuth></ArreglosCicleAuth>
      <ArreglosCicle />
      <HomeRoutes />
      <CravingsCicle />
      <EventsRoute/>
      <GalleryRoute/>
      <UsRoutes/>

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  )
}

export default Auth
