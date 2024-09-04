import { useContext } from "react"
import { HeaderContext } from "../../../context/headerContext"
import { no_show, show } from './Footer.module.css'


export const FooterContainer = () => {
    const { showHamb, fullHamb } = useContext(HeaderContext);
    const classDiv = showHamb && fullHamb ? no_show : show ;

  return (
    <div className={classDiv}>FooterContainer</div>
    // <div className={no_show}>FooterContainer</div>
  )
}
