import { messages } from "../types/responseMessages";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      const message = (error as any)?.response?.data.message;
      toast.error(message ? message : messages.default);
    },
    onSuccess: data => {
      const message = (data as any).message;
      toast.success(message);
    },
  }),
});
