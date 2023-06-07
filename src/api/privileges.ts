import { ApiResponse } from "../types/responseMessages";
import { UserPrivilegesResponse } from "../types/UserPrivileges";
import { api } from "./api";

export interface GetPrivileges extends ApiResponse {
  data: UserPrivilegesResponse;
}

export const getPrivileges = async () => {
  const { data } = await api.get<GetPrivileges>("/privileges");
  return data;
};
