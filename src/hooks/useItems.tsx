import {
  ItemAddArmorRequest,
  ItemAddWeaponRequest,
  ItemUpdateRequest,
} from "../types/Item";
import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { queryClient } from "../api/queryClient";
import {
  addArmor,
  addWeapon,
  deleteItem,
  getItems,
  updateItem,
} from "../api/items";
import { updateItemSuccessGlobal } from "../gobalStates/reactQuery";

export const useItems = (params: string) => {
  const query = useQuery([QueryKey.items, params], () => getItems(params), {
    select: data => data.data.items,
    refetchOnMount: false,
  });

  return {
    ...query,
  };
};

export const useItemsMutations = () => {
  const [updateItemSuccess, setUpdateItemSuccess] = useAtom(
    updateItemSuccessGlobal
  );

  const deleteItemMutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.items]);
    },
  });

  const { mutate: updateItemMutation, isLoading: isUpdatingItem } = useMutation(
    ({ id, item }: { id: string; item: ItemUpdateRequest }) =>
      updateItem(id, item),
    {
      onSuccess: () => {
        setUpdateItemSuccess(prev => prev + 1);
        queryClient.invalidateQueries([QueryKey.items]);
      },
    }
  );

  const { mutate: addWeaponMutation, isLoading: isAddingWeapon } = useMutation(
    (weapon: ItemAddWeaponRequest) => addWeapon(weapon),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.items]);
      },
    }
  );

  const { mutate: addArmorMutation, isLoading: isAddingArmor } = useMutation(
    (armor: ItemAddArmorRequest) => addArmor(armor),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.items]);
      },
    }
  );

  return {
    deleteItemMutation,
    addWeaponMutation,
    isAddingWeapon,
    addArmorMutation,
    isAddingArmor,
    updateItemMutation,
    isUpdatingItem,
    updateItemSuccess,
  };
};
