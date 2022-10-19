import axios from "axios";
import { ApiResponse, messages, Status } from "../types/responseMessages";
import { User } from "../types/User";
import { UserRole } from "../types/UserRole";
import { api } from "./api";

interface LoginResponse extends ApiResponse {
  data: {
    role: UserRole;
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
