import { axiosConfig } from "../config/axiosConfig"

export const obtenerTodosUsuarios = () => {
  return axiosConfig.get(
      '/usuarios'
  );
}