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

export const useKeyGiverDrops = () => {
  const {
    data: keyGiverDrops,
    isError: isKeyGiverDropsError,
    isLoading: isKeyGiverDropsLoading,
  } = useQuery([QueryKey.keygiverdrops], getKeyGiverDrops, {
    select: data => data.data.keyGiverDrops,
  });

  const {
    data: editableKeyGiverDrops,
    isError: isEditableKeyGiverDropsError,
    isLoading: isEditableKeyGiverDropsLoading,
  } = useQuery([QueryKey.editablekeygiverdrops], getEditableKeyGiverDrops, {
    select: data => data.data.keyGiverDrops,
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
    updateKeyGiverDropMutation,
    isUpdatingKeyGiverDrop,
  };
};
