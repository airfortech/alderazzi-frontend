import { messages } from "../types/responseMessages";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      const message = (error as any)?.response?.data.message;
      if (message) toast.dismiss();
      toast.error(message ? message : messages.default);
    },
    onSuccess: data => {
      const message = (data as any).message;
      if (message) toast.dismiss();
      toast.success(message);
    },
  }),
  mutationCache: new MutationCache({
    onError: error => {
      const message = (error as any)?.response?.data.message;
      if (message) toast.dismiss();
      toast.error(message ? message : messages.default);
    },
    onSuccess: data => {
      const message = (data as any).message;
      if (message) toast.dismiss();
      toast.success(message);
    },
  }),
});
