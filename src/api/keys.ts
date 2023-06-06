import { ApiResponse } from "../types/responseMessages";
import { KeyAddRequest, KeyResponse, KeyUpdateRequest } from "../types/Key";
import { api } from "./api";

export interface GetKeys extends ApiResponse {
  data: {
    keys: KeyResponse[];
  };
}

export const getKeys = async () => {
  const { data } = await api.get<GetKeys>("/keys");
  return data;
};

export const addKey = async (key: KeyAddRequest) => {
  const { data } = await api.post<ApiResponse>("/keys", key);
  return data;
};

export const updateKey = async (id: string, key: KeyUpdateRequest) => {
  const { data } = await api.patch<ApiResponse>("/keys/" + id, key);
  return data;
};

export const deleteKey = async (id: string) => {
  const { data } = await api.delete<ApiResponse>("/keys/" + id);
  return data;
};
