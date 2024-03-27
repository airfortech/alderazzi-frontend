import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { addArmor, addWeapon, deleteItem, getItems } from "../api/items";
import { ItemAddArmorRequest, ItemAddWeaponRequest } from "../types/Item";

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
    ...query,
    deleteItemMutation,
    addWeaponMutation,
    isAddingWeapon,
    addArmorMutation,
    isAddingArmor,
  };
};
