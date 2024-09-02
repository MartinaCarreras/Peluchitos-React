import { Link } from "react-router-dom";
import { HiddenMenu, HeaderMenu } from './index.js'
import './header.css';

export const Header = ({menu, hamb}) => {
  
  return (
    <header>
      <nav>
        <ul className="header">
          <Link to="/">
            <img src="https://i.imgur.com/DjsgGIx.jpg" alt="logo" className="logo"/>
          </Link>
          { menu != [] && menu.map(({key, path, title})=> {
            return(
              <HeaderMenu
                key={key}
                path={path}
                title={title}
              />
            );
          })}
        </ul>
        {hamb != [] && 
          <HiddenMenu
          hamb={hamb}
          />
        }
      </nav>
    </header>
  );
};
