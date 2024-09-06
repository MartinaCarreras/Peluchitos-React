import './productItem.css'

export const ProductItem = ({ title, img, alt, price, size}) => {
  return (
    <article className='article'>
        <img src={img} alt={alt} className="img"/>
        <h3>{title}</h3>
        <h3>${price}</h3>
    </article>
  )
}
