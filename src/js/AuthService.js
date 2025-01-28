import api from "./AxiosConfig";

// Función para iniciar sesión
export const login = async (credentials) => {
  try {
    const response = await api.post("/auth", credentials);
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error de autenticación");
  }
};

export const register = async (user) => {
  try {
    console.log(user);
    const response = await api.post("/user", user);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al registrar usuario");
  }
};

// Función para obtener datos protegidos
export const getProtectedData = async () => {
  try {
    const response = await api.get("/protected/data");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener datos");
  }
};
