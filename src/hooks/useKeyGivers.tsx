import { KeyGiverAddRequest, KeyGiverUpdateRequest } from "../types/KeyGiver";
import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addKeyGiver,
  deleteKeyGiver,
  getKeyGivers,
  updateKeyGiver,
} from "../api/keyGivers";
import { queryClient } from "../api/queryClient";

export const useKeyGivers = () => {
  const query = useQuery([QueryKey.keygivers], getKeyGivers, {
    select: data =>
      data.data.keyGivers.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : 0
      ),
  });

  const deleteKeyGiverMutation = useMutation(deleteKeyGiver, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.keygivers]);
    },
  });

  const { mutate: addKeyGiverMutation, isLoading: isAddingKeyGiver } =
    useMutation((keyGiver: KeyGiverAddRequest) => addKeyGiver(keyGiver), {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.keygivers]);
      },
    });

  const { mutate: updateKeyGiverMutation, isLoading: isUpdatingKeyGiver } =
    useMutation(
      ({ id, keyGiver }: { id: string; keyGiver: KeyGiverUpdateRequest }) =>
        updateKeyGiver(id, keyGiver),
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QueryKey.keygivers]);
        },
      }
    );

  return {
    ...query,
    addKeyGiverMutation,
    isAddingKeyGiver,
    updateKeyGiverMutation,
    isUpdatingKeyGiver,
    deleteKeyGiverMutation,
  };
};
