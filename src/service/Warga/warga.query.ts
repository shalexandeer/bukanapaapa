import { useQuery } from "@tanstack/react-query";
import { WargaServices } from "./warga.url";

export interface WargaParams {
  page: number;
  pageSize: number;
  orderBy?: string;
  orderMode?: string;
}

export const useGetAllWargaData = (params: WargaParams) => {
  return useQuery({
    queryKey: ["warga-data", params],
    queryFn: async () => WargaServices.getAllWargaData(params),
  });
};
