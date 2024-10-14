import { BASE_URL } from "../url";
import axiosInstance from "../axiosInstance";
import { WargaParams } from "./warga.query";

const getAllWargaData = (params?: WargaParams) => {
  return axiosInstance.get(`${BASE_URL}/api/listuser/warga`, { params });
};

export const WargaServices = {
  getAllWargaData,
};
