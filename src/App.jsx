import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Dashboard from "@components/dashboard/Dashboard";
import Navbar from "@components/template/Navbar";
import Login from "@components/login/Login";
import ResetPassword from "@components/login/ResetPassword";
import Menu from "@components/template/Menu";
import User from "@components/autenticacion/User";
import UserForm from "@components/autenticacion/UserForm";
import ChangePassword from "@components/login/ChangePassword";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/restablecer-password"
        element={
          <AuthLayout>
            <ResetPassword />
          </AuthLayout>
        }
      />
      <Route
        path="/cambiar-password"
        element={
          <AuthLayout>
            <ChangePassword />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;

function MainLayout() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("tokenSesion");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // En segundos
      if (decodedToken.exp < currentTime) {
        navigate("/login");
        return;
      }
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error decodificando el token:", error);
      navigate("/login");
    }
  }, [navigate]);

  return isAuthenticated ? (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Menu />
        <div className="main-panel">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/estadisticas" element={<Dashboard />} />
              <Route path="/usuarios" element={<User />} />
              <Route path="/usuarios/nuevo" element={<UserForm />} />
              <Route path="/usuarios/editar/:id" element={<UserForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

// eslint-disable-next-line react/prop-types
function AuthLayout({ children }) {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth error-page">
          <div className="row flex-grow">{children}</div>
        </div>
      </div>
    </div>
  );
}
