import './header.css';
import { SlArrowDown } from "react-icons/sl";
import { Link } from 'react-router-dom';

export const HiddenMenu = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <SlArrowDown />
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
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
        </div>
      </div>
    </div>
  )
}
