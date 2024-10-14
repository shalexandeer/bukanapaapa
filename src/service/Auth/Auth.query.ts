import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AuthServices } from "./Auth.url";

// Define the useAdminLogin hook
export function useAdminLogin(
  options?: UseMutationOptions<LoginResponse, unknown, LoginForm>,
) {
  const { mutate, isPending, isSuccess } = useMutation<
    LoginResponse,
    unknown,
    LoginForm
  >({
    mutationFn: async ({ username, password }: LoginForm) => {
      console.log(username, password);
      const response = await AuthServices.login(username, password);
      return response.data; // This should now correctly match LoginResponse
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });

  return { mutate, isPending, isSuccess };
}

// Define the useAdminLogout hook
export function useAdminLogout(
  options?: UseMutationOptions<void, unknown, void>,
) {
  const { mutate, isPending, isSuccess } = useMutation<void, unknown, void>({
    mutationFn: async () => {
      const response = await AuthServices.logout();
      return response?.data;
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });

  return { mutate, isPending, isSuccess };
}
