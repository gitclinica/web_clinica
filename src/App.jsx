import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "@components/dashboard/Dashboard";
import Navbar from "@components/template/Navbar";
import Menu from "@components/template/Menu";
import User from "@components/autenticacion/User";
import UserForm from "./components/autenticacion/UserForm";

function App() {
  return (
    <>
      <div className="container-scroller">
        <Navbar />

        <div className="container-fluid page-body-wrapper">
          <Menu />

          <div className="main-panel">
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Navigate to="/estadisticas" />} />
                <Route path="/estadisticas" element={<Dashboard />}></Route>
                <Route path="/usuarios" element={<User />}></Route>
                <Route path="/usuarios/nuevo" element={<UserForm />}></Route>
                <Route path="/usuarios/editar/:id" element={<UserForm />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
