import { ApiResponse } from "../types/responseMessages";
import { SettingsRequest, SettingsResponse } from "../types/Settings";
import { api } from "./api";

export interface GetSettings extends ApiResponse {
  data: {
    settings: SettingsResponse;
  };
}

export const getSettings = async () => {
  const { data } = await api.get<GetSettings>("/settings");
  return data;
};

export const updateBackupSettings = async (settings: SettingsRequest) => {
  const { data } = await api.patch<ApiResponse>("/settings/backup", settings);
  return data;
};
