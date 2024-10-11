const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Inicio de sesión
export const fetchLogin = async (data) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return await response.json();
};

//Enviar correo restablecer clave
export const fetchEnviarcorreoRestablecerClave = async (correo) => {
  const param = new URLSearchParams();
  param.append("correo", correo);

  const response = await fetch(`${API_BASE_URL}/auth/enviar-correo-nuevo-password?correo=${correo}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return await response.text();
};

//Validar token de restablecer clave
export const fetchValidarToken = async (token) => {
  const param = new URLSearchParams();
  param.append("token", token);

  const response = await fetch(`${API_BASE_URL}/auth/validar-token-nuevo-password?token=${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return await response.json();
};

//Modificar clave de usuario
export const fetchModificarClaveUsuario = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/cambiar-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al modificar el password");
    }

    return await response.text();
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
