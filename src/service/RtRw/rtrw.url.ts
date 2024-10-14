import { RtRwParams } from "./rtrw.query";
import axiosInstance from "../axiosInstance";

const getAllRTRWData = (params?: RtRwParams) => {
  return axiosInstance.get(`/api/listuser/rtrw`, { params });
};

const deleteRTRWData = (uniqueId: string) => {
  return axiosInstance.delete(`/api/listuser/delete/${uniqueId}`);
};

export const RtRwServices = {
  getAllRTRWData,
  deleteRTRWData,
};
