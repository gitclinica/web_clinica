import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFetch from "@hooks/useFetch";
import LoginTitle from "@components/login/LoginTitle";
import { fetchEnviarcorreoRestablecerClave } from "@services/auth";
import { NotifyError, NotifySucess } from "@components/utils/NotifyToast";
import Loading from "@components/utils/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const isMounted = useRef(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, loading, error, fetchData } = useFetch();

  const onSubmit = (data) => {
    isMounted.current = true;
    fetchData(() => fetchEnviarcorreoRestablecerClave(data.Email));
  };

  useEffect(() => {
    if (isMounted.current) {
      if (!loading) {
        if (error !== null) {
          NotifyError({ title: "ERROR", message: error });
        } else {
          console.log(data);
          NotifySucess({ title: "SUCESS", message: "Se envió el correo correctamente" });
        }
      }
    }
  }, [loading, error, data]);

  return (
    <>
      <ToastContainer />
      {loading && isMounted.current && <Loading />}
      <div className="col-lg-4 mx-auto">
        <div className="auth-form-light text-left py-5">
          <LoginTitle title="Recuperar password" />
          <form className="pt-4 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-2">
              <input
                id="txtUsuario"
                type="text"
                className="form-control form-control-lg"
                placeholder="Correo electrónico"
                maxLength={60}
                {...register("Email", {
                  required: {
                    value: true,
                    message: "Ingrese el correo electrónico",
                  },
                  maxLength: {
                    value: 60,
                    message: "El Nombre de Usuario debe tener máximo 20 caracteres",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de correo electrónico no válido",
                  },
                })}
              />
            </div>
            {errors.Email && <p className="text-danger">{errors.Email.message}</p>}
            <div className="mt-4">
              <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                ENVIAR
              </button>
            </div>
          </form>

          <div className="text-center mt-3 font-weight-light">
            <Link to="/login" className="text-primary">
              Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
