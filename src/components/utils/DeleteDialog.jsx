import propTypes from "prop-types";

const DeleteDialog = ({ setShowModalDelete }) => {
  return (
    <div className="modal show d-block" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" style={{ zIndex: 3000 }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="card">
            <div className="card-body">
              <div className="col-12" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="card-title mb-0">Eliminar</h4>
                  <button type="button" className="close" aria-label="Close" onClick={() => setShowModalDelete(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>

              <p className="mb-5">Está seguro que desea eliminar el registro?</p>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary mr-2">
                  Aceptar
                </button>
                <button className="btn btn-secondary" onClick={() => setShowModalDelete(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show" style={{ zIndex: -3000 }}></div>
    </div>
  );
};

DeleteDialog.propTypes = {
  setShowModalDelete: propTypes.func.isRequired,
};

export default DeleteDialog;
