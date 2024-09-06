//CSS
import './ProductList.css'
//Contexto
import { useContext } from "react"
import { HeaderContext } from "../../../context/headerContext"
//Mock de productos
import { products } from "../../../mocks/products.mock"
//Componentes
import { ProductList } from "./ProductList"
import { FullHeaderContainer } from "../../common"


export const ProductListContainer = () => {
    const { showHamb, fullHamb } = useContext( HeaderContext )

    const fixedPrice = ( price ) => {
      return price.toLocaleString('es-ES', {minimumFractionDigits: 2})
    }
    return (
        <>
        {showHamb && fullHamb
        ? <FullHeaderContainer/>
        : <ProductList products={products} fixedPrice={fixedPrice} />
        }
        </>
    )
}
