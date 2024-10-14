import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { RtRwServices } from "./rtrw.url";

export interface RtRwParams {
  page: number;
  pageSize: number;
  totalPage?: number;
  orderBy?: string;
  orderMode?: string;
  search?: string;
}

export const useGetAllRTRWData = (params: RtRwParams) => {
  return useQuery({
    queryKey: ["rtrwData", params],
    queryFn: async () => RtRwServices.getAllRTRWData(params),
  });
};

export function useDeleteRTRWData(
  options?: UseMutationOptions<void, unknown, string>,
) {
  const { mutate, isPending, isSuccess } = useMutation<void, unknown, string>({
    mutationFn: async (uniqueId: string) => {
      await RtRwServices.deleteRTRWData(uniqueId);
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });

  return { mutate, isPending, isSuccess };
}
