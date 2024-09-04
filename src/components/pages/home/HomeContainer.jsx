import { useContext, useEffect } from "react"
import { HeaderContext } from "../../../context/headerContext"
import { Home } from "./Home"
import { FullHeaderContainer } from "../../common"
import './home.css'


export const HomeContainer = () => {
    const { showHamb, fullHamb } = useContext( HeaderContext )

  return (
    <>
        {/* {showHamb && fullHamb ? <FullHeaderContainer/> : <Home/>} */}
        {/* <FullHeaderContainer/> */}
        <Home/>
    </>
  )
}
