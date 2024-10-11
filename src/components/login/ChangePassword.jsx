import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { fetchValidarToken, fetchModificarClaveUsuario } from "@services/auth";
import useFetch from "@hooks/useFetch";
import LoginTitle from "@components/login/LoginTitle";
import InputPassword from "@components/login/InputPassword";
import Error404 from "@components/utils/Error404";
import Loading from "@components/utils/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OkDialog from "@components/utils/OkDialog";

const ChangePassword = () => {
  const [showModalOk, setShowModalOk] = useState(false);
  const { data: dataToken, loading: loadingToken, error: errorToken, fetchData: fetchDataToken } = useFetch();
  const { data: dataPwd, loading: loadingPwd, error: errorPwd, fetchData: fetchDataPwd } = useFetch();
  const isMounted = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Validar token al montar el componente
  useEffect(() => {
    if (!isMounted.current) {
      const searchParams = new URLSearchParams(location.search);
      const tokenParam = searchParams.get("token");
      fetchDataToken(() => fetchValidarToken(tokenParam));
      isMounted.current = true;
    }
  }, [location, fetchDataToken]);

  useEffect(() => {
    if (isMounted.current) {
      if (!loadingToken) {
        if (errorToken !== null) {
          console.log("error token: " + errorToken);
        }
      }
    }
  }, [loadingToken, errorToken, dataToken]);

  // Cambiar password
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    let dataModified = { ...data };
    delete dataModified.NuevoPassword;
    delete dataModified.ConfirmarPassword;
    dataModified.idUsuario = dataToken.idUsuario;
    dataModified.clave = data.NuevoPassword;
    fetchDataPwd(() => fetchModificarClaveUsuario(dataModified));
  };

  useEffect(() => {
    if (isMounted.current) {
      if (!loadingPwd) {
        if (errorPwd !== null) {
          console.log("error pwd: " + errorPwd);
        } else {
          setShowModalOk(true);
        }
      }
    }
  }, [loadingPwd, errorPwd, dataPwd]);

  const handleModalAccept = () => {
    console.log("El botón Aceptar del modal fue presionado");
    setShowModalOk(false);
    navigate("/login", { replace: true });
  };

  // Loadin y Errores
  if (loadingToken && loadingPwd) {
    return <Loading />;
  }
  if (errorToken) {
    return <Error404 />;
  }
  if (errorPwd) {
    return <Error404 />;
  }

  return (
    <>
      <ToastContainer />
      <div className="col-lg-4 mx-auto">
        <div className="auth-form-light text-left py-5">
          <LoginTitle title="Modificar Password" />
          <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-2">
              <InputPassword register={register} name="NuevoPassword" placeholder="Nuevo Password" />
            </div>
            {errors.NuevoPassword && <p className="text-danger mb-0">{errors.NuevoPassword.message}</p>}
            <div className="input-group mt-4 mb-2">
              <InputPassword
                register={register}
                name="ConfirmarPassword"
                placeholder="Confirmar Nuevo Password"
                additionalValidations={{
                  validate: (value) => value === getValues("NuevoPassword") || "Las contraseñas no coinciden",
                }}
              />
            </div>
            {errors.ConfirmarPassword && <p className="text-danger">{errors.ConfirmarPassword.message}</p>}
            <div className="mt-4">
              <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                ACEPTAR
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

      {showModalOk && <OkDialog setShowModalOk={setShowModalOk} message={"Se modificaron los datos de forma correcta"} onAccept={handleModalAccept} />}
    </>
  );
};

export default ChangePassword;
