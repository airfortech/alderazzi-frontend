import { ApiResponse } from "../types/responseMessages";
import { Enemy } from "../types/Enemy";
import { api } from "./api";

export interface GetEnemies extends ApiResponse {
  data: {
    enemies: Enemy[];
  };
}

export const getEnemies = async () => {
  const { data } = await api.get<GetEnemies>("/enemies");
  return data;
};

export const addEnemy = async (name: string) => {
  const { data } = await api.post<ApiResponse>("/enemies", { name });
  return data;
};

export const deleteEnemy = async (id: string) => {
  const { data } = await api.delete<ApiResponse>("/enemies/" + id);
  return data;
};
