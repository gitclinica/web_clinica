import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuLink from "@components/template/MenuLink";
import MenuTitle from "@components/template/MenuTitle";
import MenuAction from "@components/template/MenuAction";
import LogOut from "../autenticacion/LogOut";

const Menu = () => {
  const [showModalLogOut, setShowModalLogOut] = useState(false);
  const location = useLocation();
  const isPathActive = (keywords) => {
    return keywords.some((keyword) => location.pathname.includes(keyword)) ? "active" : "";
  };

  const onConfiguracionClick = () => {
    console.log("Configuracion");
  };

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
            <MenuTitle title="Autenticación" icon="mdi-crosshairs-gps" href="ui-autenticacion">
              <MenuLink text="Usuarios" path={["/usuarios", "/usuarios/nuevo"]} />
              <MenuLink text="Permisos" path={["/permisos"]} />
              <MenuLink text="Backup" path={["/backup"]} />
            </MenuTitle>
          </li>
          <li className={`nav-item ${isPathActive(["/configuracion", "/seguros"])}`}>
            <MenuTitle title="Registros" icon="mdi-crosshairs-gps" href="ui-registros">
              <MenuLink text="Configuración" path={["/configuracion"]} />
              <MenuLink text="Seguros" path={["/seguros"]} />
            </MenuTitle>
          </li>
          <li className={`nav-item ${isPathActive(["/pacientes", "/consultas"])}`}>
            <MenuTitle title="Consultas" icon="mdi-crosshairs-gps" href="ui-consultas">
              <MenuLink text="Pacientes" path={["/pacientes"]} />
              <MenuLink text="Consultas/re-consultas" path={["/consultas"]} />
              <MenuLink text="Agenda" path={["/agenda"]} />
            </MenuTitle>
          </li>
          <li className={`nav-item ${isPathActive(["/reporte-consultas"])}`}>
            <MenuTitle title="Reportes" icon="mdi-crosshairs-gps" href="ui-reportes">
              <MenuLink text="Pacientes" path={["/reporte-consultas"]} />
            </MenuTitle>
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
          <MenuAction icon="mdi-settings" title="Configuración" onClick={onConfiguracionClick} />
          <MenuAction icon="mdi-logout" title="Cerrar sesión" onClick={() => setShowModalLogOut(true)} />
        </ul>
      </nav>

      {showModalLogOut && <LogOut setShowModalLogOut={setShowModalLogOut} />}
    </>
  );
};

export default Menu;
