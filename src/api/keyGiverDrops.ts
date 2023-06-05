import { ApiResponse } from "../types/responseMessages";
import { KeyGiverDropResponse } from "../types/KeyGiverDrop";

import { api } from "./api";

export interface GetKeyGiverDrops extends ApiResponse {
  data: {
    keyGiverDrops: KeyGiverDropResponse[];
  };
}

export const getKeyGiverDrops = async () => {
  const { data } = await api.get<GetKeyGiverDrops>("/keygivers/drops");
  return data;
};

// export const addEnemy = async (enemy: EnemyRequest) => {
//   const { data } = await api.post<ApiResponse>("/enemies", enemy);
//   return data;
// };

// export const updateEnemy = async (id: string, enemy: EnemyRequest) => {
//   const { data } = await api.patch<ApiResponse>("/enemies/" + id, enemy);
//   return data;
// };

// export const deleteEnemy = async (id: string) => {
//   const { data } = await api.delete<ApiResponse>("/enemies/" + id);
//   return data;
// };
