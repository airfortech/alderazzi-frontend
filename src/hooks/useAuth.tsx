import { QueryKey } from "../types/QueryKey";
import { User } from "../types/User";

import { useMutation, useQuery } from "@tanstack/react-query";

import { api } from "../api/api";
import { login, logout, getMe } from "../api/auth";
import { queryClient } from "../api/queryClient";

export const useAuth = () => {
  const query = useQuery([QueryKey.auth], getMe, {
    enabled: false,
    select: data => (data ? data.data.auth : null),
    onSuccess: data => {
      if (data)
        api.defaults.headers.common["Authorization"] = "Bearer " + data.token;
    },
  });

  const { mutate: loginUserMutation, isLoading } = useMutation(
    (userData: User) => login(userData),
    {
      onSuccess: () => {
        query.refetch();
      },
    }
  );

  const { mutate: logoutUserMutation } = useMutation(() => logout(), {
    onSuccess: () => {
      queryClient.setQueryData([QueryKey.auth], null);
    },
  });

  return {
    ...query,
    loginUserMutation,
    logoutUserMutation,
    auth: query.data,
    isLoading: isLoading || query.isFetching,
  };
};
