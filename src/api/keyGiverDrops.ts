import { ApiResponse } from "../types/responseMessages";
import {
  KeyGiverDropAddRequest,
  KeyGiverDropResponse,
  KeyGiverDropUpdateRequest,
  KeyGiverDropsStats,
} from "../types/KeyGiverDrop";

import { api } from "./api";

export interface GetKeyGiverDrops extends ApiResponse {
  data: {
    keyGiverDrops: KeyGiverDropResponse[];
  };
}

export interface GetKeyGiverDropsStats extends ApiResponse {
  data: {
    keyGiverDropsStats: KeyGiverDropsStats[];
  };
}

export const getKeyGiverDrops = async () => {
  const { data } = await api.get<GetKeyGiverDrops>("/keygivers/drops");
  return data;
};

export const getLastKeyGiverDrops = async (days: number) => {
  const { data } = await api.get<GetKeyGiverDrops>("/keygivers/drops/", {
    params: { days },
  });
  return data;
};

export const getEditableKeyGiverDrops = async () => {
  const { data } = await api.get<GetKeyGiverDrops>("/keygivers/drops/edit");
  return data;
};

export const getKeyGiverDropsStats = async (time: string, timezone: string) => {
  const { data } = await api.get<GetKeyGiverDropsStats>(
    "/keygivers/drops/stats/",
    {
      params: { time, timezone },
    }
  );
  return data;
};

export const addKeyGiverDrop = async (keyGiverDrop: KeyGiverDropAddRequest) => {
  const { data } = await api.post<ApiResponse>(
    "/keygivers/drops",
    keyGiverDrop
  );
  return data;
};

export const updateKeyGiverDrop = async (
  id: string,
  keyGiverDrop: KeyGiverDropUpdateRequest
) => {
  const { data } = await api.patch<ApiResponse>(
    "/keygivers/drops/" + id,
    keyGiverDrop
  );
  return data;
};

export const deleteKeyGiverDrop = async (id: string) => {
  const { data } = await api.delete<ApiResponse>("/keygivers/drops/" + id);
  return data;
};
