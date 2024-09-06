import { useContext, useEffect } from "react"
import { HeaderContext } from "../../../context/headerContext"
import { Home } from "./Home"
import { FullHeaderContainer } from "../../common"
import { products } from '../../../mocks/products.mock'
import './home.css'
import Swal from "sweetalert2"

export const HomeContainer = () => {
    const { showHamb } = useContext( HeaderContext )
    const fixedPrice = ( price ) => {
      return price.toLocaleString('es-ES', {minimumFractionDigits: 2})
    }
    const alertQR = () => {
      Swal.fire({
        text: "¡Puedes escanear este QR con tu billetera virtual!",
        imageUrl: "https://i.imgur.com/jSYU7KO.png",
        imageWidth: 300,
        background: "#C6C5B9",
        imageAlt: "QR de Donaciones"
      })
    }
    const homeProducts = products.slice(0, 6)
    

  return (
    <>
        {showHamb 
        ? <FullHeaderContainer/> 
        : <Home products={homeProducts} fixedPrice={fixedPrice} alertQR={alertQR} />}
    </>
  )
}
