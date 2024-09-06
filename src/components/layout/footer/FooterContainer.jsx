import { useContext, useEffect } from "react"
import { HeaderContext } from "../../../context/headerContext"

import { no_show, show } from './css/Footer.module.css'

import { Footer } from './Footer'


export const FooterContainer = () => {
    const { showHamb } = useContext(HeaderContext);

    let classDiv = showHamb ? no_show : show ;

    useEffect(() => {

      classDiv = showHamb ? no_show : show ;
      console.log( showHamb );
      
    }, [showHamb])
    

  return (
    <>
    <Footer className={classDiv}/>
    </>
  )
}
