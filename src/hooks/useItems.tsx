import {
  ItemAddArmorRequest,
  ItemAddRequest,
  ItemAddWeaponRequest,
  ItemUpdateRequest,
  ItemsAddFormRequest,
} from "../types/Item";
import { ItemTypes } from "../types/ItemTypes";
import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { queryClient } from "../api/queryClient";
import {
  addArmor,
  addMultipleItems,
  addOther,
  addShield,
  addWeapon,
  deleteItem,
  getItems,
  updateItem,
} from "../api/items";
import { useMagicItems } from "./useMagicItems";
import { updateItemSuccessGlobal } from "../gobalStates/reactQuery";

export const useItems = (params: string) => {
  const query = useQuery([QueryKey.items, params], () => getItems(params), {
    select: data => data.data.items,
    // refetchOnMount: false,
  });

  return {
    ...query,
  };
};

export const useItemsMutations = () => {
  const [updateItemSuccess, setUpdateItemSuccess] = useAtom(
    updateItemSuccessGlobal
  );
  const { refetch: refetchMagicItems } = useMagicItems();

  const deleteItemMutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.items]);
      refetchMagicItems();
    },
  });

  const { mutate: updateItemMutation, isLoading: isUpdatingItem } = useMutation(
    ({ id, item }: { id: string; item: ItemUpdateRequest }) =>
      updateItem(id, item),
    {
      onSuccess: () => {
        setUpdateItemSuccess(prev => prev + 1);
        queryClient.invalidateQueries([QueryKey.items]);
        refetchMagicItems();
      },
    }
  );

  const { mutate: addWeaponMutation, isLoading: isAddingWeapon } = useMutation(
    (weapon: ItemAddWeaponRequest) => addWeapon(weapon),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.items]);
        refetchMagicItems();
      },
    }
  );

  const { mutate: addArmorMutation, isLoading: isAddingArmor } = useMutation(
    (armor: ItemAddArmorRequest) => addArmor(armor),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.items]);
        refetchMagicItems();
      },
    }
  );

  const { mutate: addShieldMutation, isLoading: isAddingShield } = useMutation(
    (shield: ItemAddRequest) => addShield(shield),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.items]);
        refetchMagicItems();
      },
    }
  );

  const { mutate: addOtherMutation, isLoading: isAddingOther } = useMutation(
    ([other, endpoint]: [ItemAddRequest, keyof typeof ItemTypes]) =>
      addOther(other, endpoint),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.items]);
        refetchMagicItems();
      },
    }
  );

  const { mutate: addMultipleItemsMutation, isLoading: isAddingMultipleItems } =
    useMutation((data: ItemsAddFormRequest) => addMultipleItems(data), {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.items]);
        refetchMagicItems();
      },
    });

  return {
    deleteItemMutation,
    addWeaponMutation,
    isAddingWeapon,
    addArmorMutation,
    isAddingArmor,
    addShieldMutation,
    isAddingShield,
    addOtherMutation,
    isAddingOther,
    updateItemMutation,
    isUpdatingItem,
    updateItemSuccess,
    addMultipleItemsMutation,
    isAddingMultipleItems,
  };
};
