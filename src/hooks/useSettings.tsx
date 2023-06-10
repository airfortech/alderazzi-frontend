import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSettings, updateBackupSettings } from "../api/settings";
import { SettingsRequest } from "../types/Settings";
import { queryClient } from "../api/queryClient";

export const useSettings = () => {
  const query = useQuery([QueryKey.settings], getSettings, {
    select: data => data.data.settings,
  });

  const { mutate: updateSettingsMutation, isLoading: isUpdatingSettings } =
    useMutation((settings: SettingsRequest) => updateBackupSettings(settings), {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.settings]);
      },
    });

  return { ...query, updateSettingsMutation, isUpdatingSettings };
};
