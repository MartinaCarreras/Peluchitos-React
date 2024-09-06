import { Link } from "react-router-dom";
import { HeaderMenu, HiddenMenu } from "../../common";
import './header.css';

export const Header = ({menu, hamb, fullHamb, changeTo}) => {
  return (
    <header>
      <nav>
        <ul className="header">
          <Link to="/">
            <img src="https://i.imgur.com/DjsgGIx.jpg" alt="logo" className="logo"/>
          </Link>
          { menu != [] && menu.map(({key, path, title, id})=> {
            return(
              <HeaderMenu
                key={key}
                path={path}
                title={title}
                id={id}
              />
            );
          })}
        </ul>
        <HiddenMenu
        hamb={hamb}
        fullHamb={fullHamb}
        changeTo={changeTo}
        />
      </nav>
    </header>
  );
};
