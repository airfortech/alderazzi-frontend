import { ApiResponse } from "../types/responseMessages";
import {
  KeyGiverAddRequest,
  KeyGiverResponse,
  KeyGiverUpdateRequest,
} from "../types/KeyGiver";

import { api } from "./api";

export interface GetKeyGivers extends ApiResponse {
  data: {
    keyGivers: KeyGiverResponse[];
  };
}

export const getKeyGivers = async () => {
  const { data } = await api.get<GetKeyGivers>("/keygivers");
  return data;
};

export const addKeyGiver = async (keyGiver: KeyGiverAddRequest) => {
  const { data } = await api.post<ApiResponse>("/keygivers", keyGiver);
  return data;
};

export const updateKeyGiver = async (
  id: string,
  keyGiver: KeyGiverUpdateRequest
) => {
  const { data } = await api.patch<ApiResponse>("/keygivers/" + id, keyGiver);
  return data;
};

export const deleteKeyGiver = async (id: string) => {
  const { data } = await api.delete<ApiResponse>("/keygivers/" + id);
  return data;
};
