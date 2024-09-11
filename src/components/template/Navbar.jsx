const Navbar = () => {
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="../../index.html">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="../../index.html">
          <img src="/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="mdi mdi-menu"></span>
        </button>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
              <div className="nav-profile-img">
                <img src="/images/user_navbar.png" alt="image" />
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black">Usuario login</p>
              </div>
            </a>
            <div className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown" data-x-placement="bottom-end">
              <div className="p-2">
                <h5 className="dropdown-header text-uppercase pl-2 text-dark">OPCIONES</h5>
                <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                  <span>Configuración</span>
                  <i className="mdi mdi-settings"></i>
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                  <span>Mi perfil</span>
                  <span className="p-0">
                    <i className="mdi mdi-account-outline ml-1"></i>
                  </span>
                </a>
                <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                  <span>Cerrar sesión</span>
                  <i className="mdi mdi-logout ml-1"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>

        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
