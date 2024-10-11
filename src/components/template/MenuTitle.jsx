import propTypes from "prop-types";

const MenuTitle = ({ title, icon, href, children }) => {
  return (
    <>
      <a className="nav-link" data-toggle="collapse" href={`#${href}`} aria-expanded="false" aria-controls={`${href}`}>
        <span className="icon-bg">
          <i className={`mdi ${icon} menu-icon`}></i>
        </span>
        <span className="menu-title">{title}</span>
        <i className="menu-arrow"></i>
      </a>
      <div className="collapse" id={`${href}`}>
        <ul className="nav flex-column sub-menu">{children}</ul>
      </div>
    </>
  );
};

MenuTitle.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default MenuTitle;
