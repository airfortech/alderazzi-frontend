import { ApiResponse } from "../types/responseMessages";
import { KeyAddRequest, KeyResponse, KeyUpdateRequest } from "../types/Key";
import { api } from "./api";
import {
  ItemAddArmorRequest,
  ItemAddWeaponRequest,
  ItemResponse,
  ItemUpdateRequest,
} from "../types/Item";

export interface GetItems extends ApiResponse {
  data: {
    items: ItemResponse[];
  };
}

export const getItems = async (params: string) => {
  const { data } = await api.get<GetItems>("/items?type=" + params);
  return data;
};

export const addWeapon = async (weapon: ItemAddWeaponRequest) => {
  const { data } = await api.post<ApiResponse>("/items/weapon", weapon);
  return data;
};

export const addArmor = async (armor: ItemAddArmorRequest) => {
  const { data } = await api.post<ApiResponse>("/items/armor", armor);
  return data;
};

// export const updateKey = async (id: string, key: KeyUpdateRequest) => {
//   const { data } = await api.patch<ApiResponse>("/keys/" + id, key);
//   return data;
// };

export const updateItem = async (id: string, item: ItemUpdateRequest) => {
  const { data } = await api.patch<ApiResponse>("/items/" + id, item);
  return data;
};

export const deleteItem = async (id: string) => {
  const { data } = await api.delete<ApiResponse>("/items/" + id);
  return data;
};
