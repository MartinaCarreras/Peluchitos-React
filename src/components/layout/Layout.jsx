import { Outlet } from "react-router-dom"
import { HeaderContainer, Footer } from "./index"

export const Layout = () => {
  return (
    <>
        <HeaderContainer/>
        <Outlet/>
        <Footer/>
    </>
  )
}
