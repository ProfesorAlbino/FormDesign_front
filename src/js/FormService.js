import api from "./AxiosConfig";

// cantidad de formularios de un usuario
export const getNumForms = async (request) => {
  try {
    const response = await api.get("/form/GetTotalForms?idUser="+request.idUsuario);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener formularios");
  }
};

//Top de formularios
export const getTopForms = async (request) => {
  try {
    const response = await api.get("/form/GetTopForms?num="+request.numForms+"&idUsuario="+request.idUsuario);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener formularios");
  }
};