import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { getSettings, updateBackupSettings } from "../api/settings";
import { SettingsRequest } from "../types/Settings";
import { queryClient } from "../api/queryClient";
import { updateSettingsSuccessGlobal } from "../gobalStates/reactQuery";

export const useSettings = () => {
  const [updateSettingsSuccess, setUpdateSettingsSuccess] = useAtom(
    updateSettingsSuccessGlobal
  );
  const query = useQuery([QueryKey.settings], getSettings, {
    select: data => data.data.settings,
  });

  const { mutate: updateSettingsMutation, isLoading: isUpdatingSettings } =
    useMutation((settings: SettingsRequest) => updateBackupSettings(settings), {
      onSuccess: () => {
        setUpdateSettingsSuccess(prev => prev + 1);
        queryClient.invalidateQueries([QueryKey.settings]);
      },
    });

  return {
    ...query,
    updateSettingsMutation,
    isUpdatingSettings,
    updateSettingsSuccess,
  };
};
