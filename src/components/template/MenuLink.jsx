import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const MenuLink = ({ text, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path ? "active" : "";

  return (
    <li className="nav-item">
      <Link className={`nav-link ${isActive}`} to={path}>
        {text}
      </Link>
    </li>
  );
};

MenuLink.propTypes = {
  text: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
};

export default MenuLink;
