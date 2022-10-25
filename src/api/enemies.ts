import { ApiResponse } from "../types/responseMessages";
import { Enemy } from "../types/Enemy";
import { api } from "./api";

export interface GetEnemies extends ApiResponse {
  data: {
    enemies: Enemy[];
  };
}

export const getEnemies = async () => {
  const { data } = await api.get<GetEnemies>("/enemies2");
  return data;
};

export const addEnemy = async (name: string) => {
  return await api.post<ApiResponse>("/enemies", { name });
};

export const deleteEnemy = async (id: string) => {
  return await api.post<ApiResponse>("/enemies/" + id);
};
