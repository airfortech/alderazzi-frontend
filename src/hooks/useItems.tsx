import { KeyAddRequest, KeyUpdateRequest } from "../types/Key";
import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addKey, deleteKey, getKeys, updateKey } from "../api/keys";
import { queryClient } from "../api/queryClient";
import { useAtom } from "jotai";
import { updateKeySuccessGlobal } from "../gobalStates/reactQuery";
import { deleteItem, getItems } from "../api/items";

export const useItems = (params: string) => {
  // const [updateKeySuccess, setUpdateKeySuccess] = useAtom(
  //   updateKeySuccessGlobal
  // );

  const query = useQuery([QueryKey.items, params], () => getItems(params), {
    select: data => data.data.items,
  });

  const deleteItemMutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.items]);
    },
  });

  return {
    ...query,
    deleteItemMutation,
  };
};
