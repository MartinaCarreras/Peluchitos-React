import './header.css';
import { SlArrowDown } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { HeaderMenu } from './headerMenu';

export const HiddenMenu = ({hamb}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <SlArrowDown />
        </button>
      </h2>
      <div id="collapseTwo " className="accordion-collapse collapse accordion-body-container animate__slideOutDown" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {hamb.map(({ key, path, title })=>{
            return(
              <HeaderMenu
                key={key}
                path={path}
                title={title}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
