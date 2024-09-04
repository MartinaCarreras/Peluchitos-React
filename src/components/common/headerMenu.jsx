import { Link } from "react-router-dom";

export const HeaderMenu = ({ path, title }) => {
  return (
    <Link to={`${path}`}>
        <li className="header_li_1">{title}</li>
    </Link>  )
}
