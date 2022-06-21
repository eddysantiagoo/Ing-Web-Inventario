import { axiosConfig } from "../config/axiosConfig"

export const obtenerTodos = () => {
  return axiosConfig.get(
      '/estados'
  );
}

export const guardar = (estado) => {
  return axiosConfig.post('/estados', estado);
}

export const editarPorId = (id, estado) => {
  return axiosConfig.put('/estados/'+id, estado);
}
