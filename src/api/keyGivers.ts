import { KeyGiver } from "../types/KeyGiver";
import { ApiResponse } from "../types/responseMessages";

import { api } from "./api";

export interface GetKeyGivers extends ApiResponse {
  data: {
    keyGivers: KeyGiver[];
  };
}

export const getKeyGivers = async () => {
  const { data } = await api.get<GetKeyGivers>("/keygivers");
  return data;
};

export const addKeyGiver = async (name: string) => {
  const { data } = await api.post<ApiResponse>("/keygivers", { name });
  return data;
};

export const deleteKeyGiver = async (id: string) => {
  const { data } = await api.delete<ApiResponse>("/keygivers/" + id);
  return data;
};
