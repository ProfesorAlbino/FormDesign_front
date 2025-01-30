import api from "./AxiosConfig";

export const getDataFormByUser = async (request) => {
    try {
      const response = await api.get("/formdata/GetFormDataByUser?idUser="+request.idUsuario);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al obtener formularios");
    }
  };