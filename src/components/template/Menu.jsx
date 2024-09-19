import { Link, useLocation } from "react-router-dom";
import MenuLink from "@components/template/MenuLink";

const Menu = () => {
  const location = useLocation();
  const isPathActive = (keywords) => {
    return keywords.some((keyword) => location.pathname.includes(keyword)) ? "active" : "";
  };

  console.log(location.pathname);

  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-category">MENU DE SISTEMA</li>
          <li className={`nav-item ${isPathActive(["/estadisticas"])}`}>
            <Link className="nav-link" to="/estadisticas">
              <span className="icon-bg">
                <i className="mdi mdi-cube menu-icon"></i>
              </span>
              <span className="menu-title">Estadísticas</span>
            </Link>
          </li>
          <li className={`nav-item ${isPathActive(["/usuarios", "/usuarios/nuevo", "/permisos", "/backup"])}`}>
            <a className="nav-link" data-toggle="collapse" href="#ui-autenticacion" aria-expanded="false" aria-controls="ui-autenticacion">
              <span className="icon-bg">
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </span>
              <span className="menu-title">Autenticación</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-autenticacion">
              <ul className="nav flex-column sub-menu">
                <MenuLink text="Usuarios" path={["/usuarios", "/usuarios/nuevo"]} />
                <MenuLink text="Permisos" path={["/permisos"]} />
                <MenuLink text="Backup" path={["/backup"]} />
              </ul>
            </div>
          </li>
          <li className={`nav-item ${isPathActive(["/configuracion", "/seguros"])}`}>
            <a className="nav-link" data-toggle="collapse" href="#ui-registros" aria-expanded="false" aria-controls="ui-registros">
              <span className="icon-bg">
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </span>
              <span className="menu-title">Registros</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-registros">
              <ul className="nav flex-column sub-menu">
                <MenuLink text="Configuración" path={["/configuracion"]} />
                <MenuLink text="Seguros" path={["/seguros"]} />
              </ul>
            </div>
          </li>
          <li className={`nav-item ${isPathActive(["/pacientes", "/consultas"])}`}>
            <a className="nav-link" data-toggle="collapse" href="#ui-consultas" aria-expanded="false" aria-controls="ui-consultas">
              <span className="icon-bg">
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </span>
              <span className="menu-title">Consultas</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-consultas">
              <ul className="nav flex-column sub-menu">
                <MenuLink text="Pacientes" path={["/pacientes"]} />
                <MenuLink text="Consultas/re-consultas" path={["/consultas"]} />
                <MenuLink text="Agenda" path={["/agenda"]} />
              </ul>
            </div>
          </li>
          <li className={`nav-item ${isPathActive(["/reporte-consultas"])}`}>
            <a className="nav-link" data-toggle="collapse" href="#ui-reportes" aria-expanded="false" aria-controls="ui-reportes">
              <span className="icon-bg">
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </span>
              <span className="menu-title">Reportes</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-reportes">
              <ul className="nav flex-column sub-menu">
                <MenuLink text="Pacientes" path={["/reporte-consultas"]} />
              </ul>
            </div>
          </li>
          <li className="nav-item documentation-link">
            <a className="nav-link" href="http://www.bootstrapdash.com/demo/connect-plus-free/jquery/documentation/documentation.html" target="_blank">
              <span className="icon-bg">
                <i className="mdi mdi-file-document-box menu-icon"></i>
              </span>
              <span className="menu-title">Ayuda</span>
            </a>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="user-details">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="sidebar-profile-img">
                      <img src="/images/user_navbar.png" alt="image" />
                    </div>
                    <div className="sidebar-profile-text">
                      <p className="mb-1">Usuario login</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a href="#" className="nav-link">
                <i className="mdi mdi-settings menu-icon"></i>
                <span className="menu-title">Configuración</span>
              </a>
            </div>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a href="#" className="nav-link">
                <i className="mdi mdi-logout menu-icon"></i> <span className="menu-title">Cerrar sesión</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
