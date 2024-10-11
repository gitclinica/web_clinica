import LoginForm from "@components/login/LoginForm";
import LoginTitle from "@components/login/LoginTitle";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="col-lg-4 mx-auto">
        <div className="auth-form-light text-left py-5">
          <LoginTitle title="Iniciar sesión para continuar" />
          <LoginForm />
          <div className="text-center mt-3 font-weight-light">
            <Link to="/restablecer-password" className="text-primary">
              Olvidaste tu password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
