import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="col-lg-4 mx-auto text-center">
        <div className="row align-items-center d-flex flex-row">
          <div className="col pr-lg-4">
            <h1 className="display-1 mb-0">404</h1>
          </div>
        </div>
        <div className="row align-items-center d-flex flex-row">
          <div className="col pl-lg-4">
            <h2 className="mb-4">PAGINA NO ENCONTRADA</h2>
            <h3 className="text-secondary font-weight-light">
              Lo sentimos pero la página que estás buscando no existe o ha sido eliminada. <br />
              nombre cambiado o no está disponible temporalmente
            </h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <Link to="/login" className="text-primary">
              Ir al Inicio de Sesión
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
