import { ApiResponse, messages, Status } from "../types/responseMessages";
import { User } from "../types/User";
import { UserRole } from "../types/UserRole";

import axios from "axios";

import { api } from "./api";

interface LoginResponse extends ApiResponse {
  data: {
    role: UserRole;
    token: string;
  };
}

export const login = async ({
  role,
  password,
}: User): Promise<LoginResponse | undefined> => {
  try {
    const { data: response }: { data: LoginResponse } = await api.post(
      "/auth/login",
      {
        role,
        password,
      }
    );
    api.defaults.headers.common["Authorization"] =
      "Bearer " + response.data.token;
    return response;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return e.response?.data
        ? e.response?.data
        : {
            status: Status.error,
            message: messages.default,
          };
    }
  }
};

export const logout = async (): Promise<void> => {
  await api.get("/auth/logout");
};
