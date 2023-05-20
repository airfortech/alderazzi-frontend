import { ApiResponse } from "../types/responseMessages";
import { ChangeUserPasswordRequest } from "../types/User";
import { api } from "./api";

export const changePassword = async (user: ChangeUserPasswordRequest) => {
  const { data } = await api.patch<ApiResponse>("/users", user);
  return data;
};
