import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate("/usuarios");
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="col-sm-12">
                <h4 className="card-title">Datos de Usuario</h4>

                <form>
                  <div className="form-group">
                    <label htmlFor="txtUsuario">Usuario</label>
                    <input type="text" className="form-control" id="txtUsuario" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtNombreCompleto">Nombre Completo</label>
                    <input type="text" className="form-control" id="txtNombreCompleto" />
                  </div>

                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary mr-2">
                      Aceptar
                    </button>
                    <button className="btn btn-outline-secondary" onClick={handleVolver}>
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
