import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";

export const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <h4>Siguenos en nuestras redes sociales!!</h4>
      <span>
        <Link to='https://www.instagram.com/tupeluchito.oficial/' target="_blank">
          <FaInstagram size={50} color="black"/>
        </Link>
        <p>@tupeluchito.oficial</p>
      </span>
    </footer>
  )
}
