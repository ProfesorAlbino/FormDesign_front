import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7173/", // URL Local
  //baseURL: "https://formdesing.somee.com", // URL Web
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar token a las solicitudes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Manejo global de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("No autorizado. Por favor, inicia sesión nuevamente.");
    }
    return Promise.reject(error);
  }
);

export default api;