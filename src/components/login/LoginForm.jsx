import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useFetch from "@hooks/useFetch";
import { fetchLogin } from "@services/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { NotifyError } from "@components/utils/NotifyToast";
import InputPassword from "@components/login/InputPassword";
import Loading from "@components/utils/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const isMounted = useRef(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { data: token, loading, error, fetchData } = useFetch();

  const onSubmit = (data) => {
    isMounted.current = true;
    fetchData(() => fetchLogin(data));
  };

  useEffect(() => {
    if (isMounted.current) {
      if (!loading) {
        if (error !== null) {
          NotifyError({ title: "ERROR", message: error });
        } else {
          Cookies.set("tokenSesion", token.token, {
            expires: 1,
            secure: true,
            sameSite: "Strict",
          });
          navigate("/estadisticas");
        }
      }
    }
  }, [loading, error, token, navigate]);

  return (
    <>
      <ToastContainer />
      {loading && isMounted.current && <Loading />}
      <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Nombre de Usuario"
            maxLength={20}
            {...register("UserName", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
              minLength: {
                value: 8,
                message: "El Nombre de Usuario debe tener al menos 8 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El Nombre de Usuario debe tener máximo 20 caracteres",
              },
            })}
          />
        </div>
        {errors.UserName && <p className="text-danger mb-0">{errors.UserName.message}</p>}
        <div className="input-group mt-4 mb-2">
          <InputPassword register={register} name="Password" placeholder="Password" />
        </div>
        {errors.Password && <p className="text-danger">{errors.Password.message}</p>}
        <div className="mt-4">
          <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
            INICIAR SESION
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
