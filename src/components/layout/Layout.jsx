import { Outlet } from "react-router-dom"
import { HeaderContainer, FooterContainer } from "./index"

export const Layout = () => {
  return (
    <>
        <HeaderContainer/>
        <Outlet/>
        <FooterContainer/>
    </>
  )
}
