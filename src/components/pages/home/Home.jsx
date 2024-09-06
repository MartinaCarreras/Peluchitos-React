import './home.css'   //CSS

//Íconos de React-Icons
import { CiMail, CiHeart } from "react-icons/ci";
import { PiTipJarThin } from "react-icons/pi";
import { IoMdArrowUp } from "react-icons/io";

// Elementos
import { ProductItem } from '../../common'
import { Link } from 'react-router-dom';
import { ProductList } from '../index';


export const Home = ({ products, fixedPrice, alertQR }) => {
  
  return (
    <main className="main">
      <div id="carouselExample" className="carousel slide">   {/* Carrousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.imgur.com/tvNv4ZT.png" className="d-block w-100" alt="¡Bienvenidos!"/>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/BTdqDsc.png" className="d-block w-100" alt="Aqui hay todo tipos de peluches"/>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/eCT9jS6.png" className="d-block w-100" alt="Envíos por todo Capital Federal"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className='body-main'>
        <section className='products-main'>
          {products.map(({ title, img, price, key, alt })=> {
            return <ProductItem
              key={key}
              title={title}
              img={img[0]}
              price={fixedPrice(price)}
              alt={alt}
            />
          })}
        </section>
        <section className='info-main'>
          <div>
            <CiHeart size={65} color='#595959'/>
            <h3>Si tienes algún diseño específico en mente, haz una cotización <Link to='/productos'>aquí</Link></h3>
          </div>
          <p className='my-border-bottom'></p>
          <div>
            <Link to='/contacto'>
              <CiMail size={62} color='#333333'/>
            </Link>
            <IoMdArrowUp className='arrow' size={20}/>
            <h3>Contactanos Por mail!</h3>
          </div>
          <p className='my-border-bottom'></p>
          <div>
            <PiTipJarThin size={62} color='#333333'onClick={alertQR} cursor="pointer"/>
            <IoMdArrowUp className='arrow' size={20}/>
            <h3>O puedes apoyar este emprendimiento</h3>
            <h4>¡Cada centavo ayuda!</h4>
          </div>
        </section>
      </section>
    </main>
  )
}
