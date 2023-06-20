import { BackupResponse } from "../types/Backup";
import { ApiResponse } from "../types/responseMessages";
import { api } from "./api";

export interface GetBackups extends ApiResponse {
  data: {
    backups: BackupResponse;
  };
}

export const getBackups = async () => {
  const { data } = await api.get<GetBackups>("/backups");
  return data;
};

export const createBackup = async () => {
  const { data } = await api.post<ApiResponse>("/backups");
  return data;
};

export const restoreBackup = async (fileName: string) => {
  const { data } = await api.post<ApiResponse>("/backups/" + fileName);
  return data;
};

export const deleteBackup = async () => {
  const { data } = await api.delete<ApiResponse>("/backups/");
  return data;
};
