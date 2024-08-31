import { Link } from "react-router-dom";
import { HiddenMenu } from "./HiddenMenu.jsx";
import './header.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header">
          <Link to="/">
            <img
              src="https://i.imgur.com/DjsgGIx.jpg"
              alt="logo"
              className="logo"
            />
          </Link>
          <Link to="/productos">
            <li className="header_li_1">Productos</li>
          </Link>
          <Link to="/productos">
            <li className="header_li_1">Cotización</li>
          </Link>
          <Link to="/productos">
            <li className="header_li_1">Blog</li>
          </Link>
          <Link to="/productos">
            <li className="header_li_1">Contacto</li>
          </Link>
        </ul>
        <HiddenMenu/>
      </nav>
    </header>
  );
};
