import { Link } from "react-router-dom";

export const HeaderMenu = ({ path, title, id }) => {
  return (
    <Link to={`${path}`}>
        <li className="header_li_1" id={id}>{title}</li>
    </Link>  )
}
