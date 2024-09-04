import { Outlet } from "react-router-dom"
import { HeaderContainer, FooterContainer } from "./index"

export const Layout = () => {
  return (
    <>
      {/* <div className="fullMain"> */}
        <HeaderContainer/>
        <Outlet/>
        <FooterContainer/>
      {/* </div> */}
    </>
  )
}
