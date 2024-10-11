import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "@components/utils/DeleteDialog";
import UserSearchModal from "@components/autenticacion/UserSearchModal";

const User = () => {
  const navigate = useNavigate();
  const [showModalSearch, setShowModalSearch] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleAdicionar = () => {
    navigate("/usuarios/nuevo");
  };

  const handleEditar = (id) => {
    navigate(`/usuarios/editar/${id}`);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="col-sm-12">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="card-title mb-0">Lista de Usuarios</h4>

                  <div className="dropdown dropdown-arrow-none">
                    <button className="btn p-0 text-dark dropdown-toggle" type="button" onClick={() => setShowModalSearch(true)}>
                      <i className="mdi mdi-magnify"></i>
                    </button>
                    <button className="btn p-0 text-dark dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="mdi mdi-dots-vertical"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuIconButton1">
                      <a className="dropdown-item text-dark" href="#">
                        Exportar a excel
                      </a>
                      <a className="dropdown-item text-dark" href="#">
                        Exportar a pdf
                      </a>
                      <a className="dropdown-item text-dark" href="#">
                        Exportar a txt
                      </a>
                    </div>
                  </div>
                </div>

                <button type="button" className="btn btn-primary mb-2" onClick={() => handleAdicionar()}>
                  Adicionar
                </button>
                <table className="table table-bordered table-striped table-list">
                  <thead>
                    <tr>
                      <th className="td-auto"></th>
                      <th className="td-auto"></th>
                      <th>Usuario</th>
                      <th> Nombre Completo </th>
                      <th> Grupo de usuario </th>
                      <th> Estado </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td-auto">
                        <button type="button" className="btn btn-outline-primary" onClick={() => handleEditar(1)}>
                          <i className="mdi mdi-square-edit-outline"></i>
                        </button>
                      </td>
                      <td className="td-auto">
                        <button type="button" className="btn btn-outline-primary" onClick={() => setShowModalDelete(true)}>
                          <i className="mdi mdi-delete"></i>
                        </button>
                      </td>
                      <td>mzenteno</td>
                      <td> Juan Marcelo Zenteno Molina </td>
                      <td> Administrador </td>
                      <td> Activo </td>
                    </tr>
                    <tr>
                      <td className="td-auto">
                        <button type="button" className="btn btn-outline-primary" onClick={() => handleEditar(2)}>
                          <i className="mdi mdi-square-edit-outline"></i>
                        </button>
                      </td>
                      <td className="td-auto">
                        <button type="button" className="btn btn-outline-primary" onClick={() => setShowModalDelete(true)}>
                          <i className="mdi mdi-delete"></i>
                        </button>
                      </td>
                      <td>mzenteno</td>
                      <td> Juan Marcelo Zenteno Molina </td>
                      <td> Administrador </td>
                      <td> Activo </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModalSearch && <UserSearchModal setShowModalSearch={setShowModalSearch} />}
      {showModalDelete && <DeleteDialog setShowModalDelete={setShowModalDelete} />}
    </>
  );
};

export default User;
