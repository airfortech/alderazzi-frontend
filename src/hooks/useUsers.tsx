import { ChangeUserPasswordRequest } from "../types/User";
import { QueryKey } from "../types/QueryKey";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../api/users";
import { queryClient } from "../api/queryClient";

export const useUsers = () => {
  const { mutate, isLoading: isChangingPassword } = useMutation(
    ({ role, password }: ChangeUserPasswordRequest) =>
      changePassword({ role, password }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.enemies]);
      },
    }
  );

  return {
    changePassword: mutate,
    isChangingPassword,
  };
};
