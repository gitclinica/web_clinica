import PropTypes from "prop-types";

const UserSearchModal = ({ setShowModalSearch }) => {
  return (
    <div className="modal show d-block" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" style={{ zIndex: 3000 }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="card">
            <div className="card-body">
              <div className="col-12" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="card-title mb-0">Búsqueda</h4>
                  <button type="button" className="close" aria-label="Close" onClick={() => setShowModalSearch(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>

              <form className="forms-sample">
                <div className="form-group">
                  <label htmlFor="txtUsuario">Usuario</label>
                  <input type="text" className="form-control" id="txtUsuario" />
                </div>
                <div className="form-group">
                  <label htmlFor="txtNombreCompleto">Nombre Completo</label>
                  <input type="text" className="form-control" id="txtNombreCompleto" />
                </div>
                <div className="form-group">
                  <label htmlFor="cboEstado">Estado</label>
                  <select className="form-control" id="cboEstado">
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary mr-2">
                    Aceptar
                  </button>
                  <button className="btn btn-secondary" onClick={() => setShowModalSearch(false)}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show" style={{ zIndex: -3000 }}></div>
    </div>
  );
};

UserSearchModal.propTypes = {
  setShowModalSearch: PropTypes.func.isRequired,
};

export default UserSearchModal;
