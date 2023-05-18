import { ApiResponse } from "../types/responseMessages";
import { EnemyRequest, EnemyResponse } from "../types/Enemy";

import { api } from "./api";

export interface GetEnemies extends ApiResponse {
  data: {
    enemies: EnemyResponse[];
  };
}

export const getEnemies = async () => {
  const { data } = await api.get<GetEnemies>("/enemies");
  return data;
};

export const addEnemy = async (enemy: EnemyRequest) => {
  const { data } = await api.post<ApiResponse>("/enemies", enemy);
  return data;
};

export const updateEnemy = async (id: string, enemy: EnemyRequest) => {
  const { data } = await api.patch<ApiResponse>("/enemies/" + id, enemy);
  return data;
};

export const deleteEnemy = async (id: string) => {
  const { data } = await api.delete<ApiResponse>("/enemies/" + id);
  return data;
};
