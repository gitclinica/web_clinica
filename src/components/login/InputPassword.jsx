/* eslint-disable react/prop-types */
import { useState } from "react";

const InputPassword = ({ register, additionalValidations = {}, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Definir las validaciones fijas
  const fixedValidations = {
    required: "Este campo es obligatorio",
    minLength: {
      value: 8,
      message: "El Password debe tener al menos 8 caracteres",
    },
    maxLength: {
      value: 30,
      message: "El Password debe tener máximo 30 caracteres",
    },
    ...additionalValidations, // Agregar validaciones adicionales si las hay
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <input
        type={showPassword ? "text" : "password"}
        className="form-control form-control-lg border-right-0 border"
        placeholder={placeholder}
        maxLength={30}
        {...register(name, fixedValidations)}
      />
      <span className="input-group-append" onClick={togglePasswordVisibility}>
        <div className="input-group-text bg-transparent border-left-0">
          <i className={showPassword ? "mdi mdi-eye" : "mdi mdi-eye-off"}></i>
        </div>
      </span>
    </>
  );
};

export default InputPassword;
