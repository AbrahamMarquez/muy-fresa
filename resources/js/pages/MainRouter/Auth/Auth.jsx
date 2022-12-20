import { Suspense } from "react"
import { useLocation } from "react-router-dom"
import Footer from "../../../components/organisms/Footer/Footer"
import Header from "../../../components/organisms/Header/Header"
import HeaderAuth from "../../../components/organisms/Header/HeaderAuth"
import HeaderSkeleton from "../../../components/organisms/Header/HeaderSkeleton"
import userIcon from '../../../img/login/profile.jpg'
import ArreglosCicleAuth from "../../../routes/Auth/ArreglosCileAuth/ArreglosCileAuth"
import ArreglosCicle from "../../../routes/Guest/ArreglosCicle/ArreglosCicle"
import HomeRoutes from "../../../routes/Guest/Home/HomeRoutes"


const Auth = () => {
  const route = useLocation()
    
  return (
      <>
          <Suspense fallback={<HeaderSkeleton/>}>
              
            <HeaderAuth userIcon={userIcon}/>
          </Suspense>

          
          <ArreglosCicleAuth></ArreglosCicleAuth>
          <ArreglosCicle/>
          <HomeRoutes/>


          <Suspense fallback={<div/>}>
              <Footer />
          </Suspense>
      </>
  )
}

export default Auth
