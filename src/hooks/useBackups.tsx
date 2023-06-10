import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createBackup,
  deleteBackup,
  getBackups,
  restoreBackup,
} from "../api/backups";
import { queryClient } from "../api/queryClient";

export const useBackups = () => {
  const query = useQuery([QueryKey.backups], getBackups, {
    select: data => data.data.backups,
  });

  const { mutate: createBackupMutation, isLoading: isCreatingBackup } =
    useMutation(createBackup, {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.backups]);
      },
    });

  const { mutate: restoreBackupMutation, isLoading: isRestoringBackup } =
    useMutation((fileName: string) => restoreBackup(fileName), {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.backups]);
      },
    });

  const { mutate: deleteBackupMutation, isLoading: isDeletingBackup } =
    useMutation(deleteBackup, {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.backups]);
      },
    });

  return {
    ...query,
    createBackupMutation,
    isCreatingBackup,
    restoreBackupMutation,
    isRestoringBackup,
    deleteBackupMutation,
    isDeletingBackup,
  };
};
