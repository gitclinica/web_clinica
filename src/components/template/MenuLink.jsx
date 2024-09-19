import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const MenuLink = ({ text, path }) => {
  const location = useLocation();
  const isPathActive = () => {
    return path.some((p) => location.pathname.includes(p)) ? "active" : "";
  };

  return (
    <li className="nav-item">
      <Link className={`nav-link ${isPathActive()}`} to={path[0]}>
        {text}
      </Link>
    </li>
  );
};

MenuLink.propTypes = {
  text: propTypes.string.isRequired,
  path: propTypes.arrayOf(propTypes.string).isRequired,
};

export default MenuLink;
