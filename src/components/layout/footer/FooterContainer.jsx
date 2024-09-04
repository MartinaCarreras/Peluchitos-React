import { useContext } from "react"
import { HeaderContext } from "../../../context/headerContext"

import './css/footer.css'
import { no_show, show } from './css/Footer.module.css'

import { Footer } from './Footer'


export const FooterContainer = () => {
    const { showHamb, fullHamb } = useContext(HeaderContext);
    const classDiv = showHamb && fullHamb ? no_show : show ;

  return (
    <>
    <Footer/>
    {/* <div className={show}>FooterContainer</div> */}
    {/* <div className={classDiv}>FooterContainer</div> */}
    {/* <div className={no_show}>FooterContainer</div> */}
    </>
  )
}
