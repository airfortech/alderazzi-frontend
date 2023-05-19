import { ApiResponse } from "../types/responseMessages";
import { UserPrivileges } from "../types/UserPrivileges";
import { api } from "./api";

export interface GetPrivileges extends ApiResponse {
  data: {
    privileges: UserPrivileges[];
  };
}

export const getPrivileges = async () => {
  const { data } = await api.get<GetPrivileges>("/privileges");
  return data;
};
