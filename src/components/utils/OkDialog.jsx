import propTypes from "prop-types";

const OkDialog = ({ setShowModalOk, message, onAccept }) => {
  return (
    <div className="modal show d-block" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" style={{ zIndex: 3000 }}>
      <div className="modal-dialog modal-dialog-centered" role="document" style={{ width: "300px" }}>
        <div className="modal-content">
          <div className="card text-center">
            <div className="card-body">
              <div className="col-12" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="card-title mb-0"></h4>
                  <button type="button" className="close" aria-label="Close" onClick={() => setShowModalOk(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>

              <p className="mb-4">{message}</p>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-100 mx-5" onClick={onAccept}>
                  Aceptar
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

OkDialog.propTypes = {
  setShowModalOk: propTypes.func.isRequired,
  message: propTypes.string.isRequired,
  onAccept: propTypes.func.isRequired,
};

export default OkDialog;
