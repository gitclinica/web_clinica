const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Inicio de sesión
export const fetchLogin = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al crear el comentario");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
