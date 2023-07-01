import {
  KeyGiverDropAddRequest,
  KeyGiverDropUpdateRequest,
} from "../types/KeyGiverDrop";
import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addKeyGiverDrop,
  deleteKeyGiverDrop,
  getEditableKeyGiverDrops,
  getKeyGiverDrops,
  updateKeyGiverDrop,
} from "../api/keyGiverDrops";
import { queryClient } from "../api/queryClient";
import {
  addKeyGiverDropSuccessGlobal,
  updateKeyGiverDropSuccessGlobal,
} from "../gobalStates/reactQuery";
import { useAtom } from "jotai";
import { config } from "../config/config";

export const useKeyGiverDrops = () => {
  const [addKeyGiverDropSuccess, setAddKeyGiverDropSuccess] = useAtom(
    addKeyGiverDropSuccessGlobal
  );
  const [updateKeyGiverDropSuccess, setUpdateKeyGiverDropSuccess] = useAtom(
    updateKeyGiverDropSuccessGlobal
  );

  const {
    data: keyGiverDrops,
    isError: isKeyGiverDropsError,
    isLoading: isKeyGiverDropsLoading,
  } = useQuery([QueryKey.keygiverdrops], getKeyGiverDrops, {
    select: data => data.data.keyGiverDrops,
    refetchInterval: 1000 * 60 * config.keyGiverDropsRefetchIntervalInMinutes,
  });

  const {
    data: editableKeyGiverDrops,
    isError: isEditableKeyGiverDropsError,
    isLoading: isEditableKeyGiverDropsLoading,
  } = useQuery([QueryKey.editablekeygiverdrops], getEditableKeyGiverDrops, {
    select: data => data.data.keyGiverDrops,
    refetchInterval: 1000 * 60 * config.keyGiverDropsRefetchIntervalInMinutes,
  });

  const deleteKeyGiverDropMutation = useMutation(deleteKeyGiverDrop, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.keygiverdrops]);
      queryClient.invalidateQueries([QueryKey.editablekeygiverdrops]);
    },
  });

  const { mutate: addKeyGiverDropMutation, isLoading: isAddingKeyGiverDrop } =
    useMutation(
      (keyGiverDrop: KeyGiverDropAddRequest) => addKeyGiverDrop(keyGiverDrop),
      {
        onSuccess: () => {
          setAddKeyGiverDropSuccess(prev => prev + 1);
          queryClient.invalidateQueries([QueryKey.keygiverdrops]);
          queryClient.invalidateQueries([QueryKey.editablekeygiverdrops]);
        },
      }
    );

  const {
    mutate: updateKeyGiverDropMutation,
    isLoading: isUpdatingKeyGiverDrop,
  } = useMutation(
    ({
      id,
      keyGiverDrop,
    }: {
      id: string;
      keyGiverDrop: KeyGiverDropUpdateRequest;
    }) => updateKeyGiverDrop(id, keyGiverDrop),
    {
      onSuccess: () => {
        setUpdateKeyGiverDropSuccess(prev => prev + 1);
        queryClient.invalidateQueries([QueryKey.keygiverdrops]);
        queryClient.invalidateQueries([QueryKey.editablekeygiverdrops]);
      },
    }
  );

  return {
    keyGiverDrops,
    isKeyGiverDropsError,
    isKeyGiverDropsLoading,
    editableKeyGiverDrops,
    isEditableKeyGiverDropsError,
    isEditableKeyGiverDropsLoading,
    deleteKeyGiverDropMutation,
    addKeyGiverDropMutation,
    isAddingKeyGiverDrop,
    addKeyGiverDropSuccess,
    updateKeyGiverDropMutation,
    isUpdatingKeyGiverDrop,
    updateKeyGiverDropSuccess,
  };
};
