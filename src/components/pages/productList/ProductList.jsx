import { products } from "../../../mocks/products.mock"
import { ProductItem } from "../../common"

export const ProductList = ({ products, fixedPrice }) => {
  return (
    <main className="main">
      {products.map(({ title, img, price, key, alt })=> {
        return <ProductItem
          key={key}
          title={title}
          img={img[0]}
          price={fixedPrice(price)}
          alt={alt}
        />
      })}
    </main>
  )
}
