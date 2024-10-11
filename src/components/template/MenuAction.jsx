import propTypes from "prop-types";

const MenuAction = ({ icon, title, onClick }) => {
  return (
    <li className="nav-item sidebar-user-actions">
      <div className="sidebar-user-menu">
        <a href="#" className="nav-link" onClick={onClick}>
          <i className={`mdi ${icon} menu-icon`}></i>
          <span className="menu-title">{title}</span>
        </a>
      </div>
    </li>
  );
};

MenuAction.propTypes = {
  icon: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default MenuAction;
