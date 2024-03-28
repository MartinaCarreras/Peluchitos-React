import { Link } from "react-router-dom";
import style from "./Header.module.css";
const { header, logo, header_1, menu } = style;
import { IoIosMenu } from "react-icons/io";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={header}>
          <Link to="/">
            <img
              src="https://i.imgur.com/DjsgGIx.jpg"
              alt="logo"
              className={logo}
            />
          </Link>
          <Link to="/productos">
            <li className={header_1}>Productos</li>
          </Link>
          <Link to="/productos">
            <li className={header_1}>Cotización</li>
          </Link>
          <Link to="/productos">
            <li className={header_1}>Blog</li>
          </Link>
          <Link to="/productos">
            <li className={header_1}>Contacto</li>
          </Link>
          <label htmlFor="menuHamb"><IoIosMenu className={menu}/></label>
        </ul>
      </nav>
    </header>
  );
};
