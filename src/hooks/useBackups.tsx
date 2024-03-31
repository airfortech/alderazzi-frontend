import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createBackup,
  deleteBackup,
  getBackups,
  restoreBackup,
} from "../api/backups";
import { queryClient } from "../api/queryClient";
import { useAtom } from "jotai";
import {
  createBackupSuccessGlobal,
  deleteBackupSuccessGlobal,
  restoreBackupSuccessGlobal,
} from "../gobalStates/reactQuery";

export const useBackups = () => {
  const [createBackupSuccess, setCreateBackupSuccess] = useAtom(
    createBackupSuccessGlobal
  );
  const [restoreBackupSuccess, setRestoreBackupSuccess] = useAtom(
    restoreBackupSuccessGlobal
  );
  const [deleteBackupSuccess, setDeleteBackupSuccess] = useAtom(
    deleteBackupSuccessGlobal
  );

  const query = useQuery([QueryKey.backups], getBackups, {
    select: data => data.data.backups,
    refetchOnMount: false,
  });

  const { mutate: createBackupMutation, isLoading: isCreatingBackup } =
    useMutation(createBackup, {
      onSuccess: () => {
        setCreateBackupSuccess(prev => prev + 1);
        queryClient.invalidateQueries([QueryKey.backups]);
      },
    });

  const { mutate: restoreBackupMutation, isLoading: isRestoringBackup } =
    useMutation((fileName: string) => restoreBackup(fileName), {
      onSuccess: () => {
        setRestoreBackupSuccess(prev => prev + 1);
        queryClient.invalidateQueries([QueryKey.backups]);
      },
    });

  const { mutate: deleteBackupMutation, isLoading: isDeletingBackup } =
    useMutation(deleteBackup, {
      onSuccess: () => {
        setDeleteBackupSuccess(prev => prev + 1);
        queryClient.invalidateQueries([QueryKey.backups]);
      },
    });

  return {
    ...query,
    createBackupMutation,
    isCreatingBackup,
    createBackupSuccess,
    restoreBackupMutation,
    isRestoringBackup,
    restoreBackupSuccess,
    deleteBackupMutation,
    isDeletingBackup,
    deleteBackupSuccess,
  };
};
