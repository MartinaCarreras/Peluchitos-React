import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="">
      <h4>Siguenos en nuestras redes sociales!!</h4>
      <span>
        <Link to='https://www.instagram.com/tupeluchito.oficial/' target="_blank">
          <img src="https://i.imgur.com/VfAUJSr.png" alt="Logo de instagram" />
        </Link>
        <p>@tupeluchito.oficial</p>
      </span>
    </footer>
  )
}
