import { KeyAddRequest, KeyUpdateRequest } from "../types/Key";
import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addKey, deleteKey, getKeys, updateKey } from "../api/keys";
import { queryClient } from "../api/queryClient";

export const useKeys = () => {
  const query = useQuery([QueryKey.keys], getKeys, {
    select: data => data.data.keys,
  });

  const deleteKeyMutation = useMutation(deleteKey, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.keys]);
    },
  });

  const { mutate: addKeyMutation, isLoading: isAddingKey } = useMutation(
    (key: KeyAddRequest) => addKey(key),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.keys]);
      },
    }
  );

  const { mutate: updateKeyMutation, isLoading: isUpdatingKey } = useMutation(
    ({ id, key }: { id: string; key: KeyUpdateRequest }) => updateKey(id, key),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.keys]);
      },
    }
  );

  return {
    ...query,
    addKeyMutation,
    isAddingKey,
    updateKeyMutation,
    isUpdatingKey,
    deleteKeyMutation,
  };
};
