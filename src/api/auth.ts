import { ApiResponse } from "../types/responseMessages";
import { User } from "../types/User";
import { UserRole } from "../types/UserRole";

import { api } from "./api";

export interface GetMe extends ApiResponse {
  data: {
    auth: {
      role: UserRole;
      token: string;
    };
  };
}

export interface Login extends ApiResponse {
  data: {
    token: string;
  };
}

export const login = async ({ role, password }: User) => {
  const { data } = await api.post<Login>("/auth/login", { role, password });
  return data;
};

export const getMe = async () => {
  try {
    const { data } = await api.get<GetMe>("/auth/getme");
    return data;
  } catch (e) {
    return null;
  }
};

export const logout = async () => {
  const { data } = await api.get<ApiResponse>("/auth/logout");
  return data;
};
