import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // extend stale time to one minute
      // if this time set here hasn't gone by it shouldn't hit the server again
      // the default is 20 seconds
      staleTime: 1000 * 60,
    },
    mutations: {
      onError: (error) => {
        handleErrors(error as AxiosError);
      },
    },
  },
});

export function handleErrors(error: AxiosError | string) {
  const message =
    typeof error !== "string" ? extractErrorMessage(error) : error;

  toast.error(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export function extractErrorMessage(error: AxiosError) {
  const errorResponse = error?.response?.data as { msg?: string };
  return errorResponse?.msg ?? "Something went wrong";
}

export function handleSuccess(msg: string) {
  toast.success(msg, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
