import { ApiResponse } from "../types/responseMessages";
import { KeyAddRequest, KeyResponse, KeyUpdateRequest } from "../types/Key";
import { api } from "./api";
import {
  ItemAddArmorRequest,
  ItemAddRequest,
  ItemAddShieldRequest,
  ItemAddWeaponRequest,
  ItemResponse,
  ItemShortResponse,
  ItemUpdateRequest,
  ItemsAddFormRequest,
} from "../types/Item";
import { ItemTypes } from "../types/ItemTypes";

export interface GetItems extends ApiResponse {
  data: {
    items: ItemResponse[];
  };
}

export interface GetMagicItems extends ApiResponse {
  data: {
    items: ItemShortResponse[];
  };
}

export const getItems = async (params: string) => {
  const { data } = await api.get<GetItems>("/items?type=" + params);
  return data;
};

export const getMagicItems = async () => {
  const { data } = await api.get<GetMagicItems>("/items/magic");
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

export const addShield = async (shield: ItemAddShieldRequest) => {
  const { data } = await api.post<ApiResponse>("/items/shield", shield);
  return data;
};

export const addOther = async (
  other: ItemAddRequest,
  endpoint: keyof typeof ItemTypes
) => {
  const { data } = await api.post<ApiResponse>("/items/" + endpoint, other);
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

export const addMultipleItems = async (data_: ItemsAddFormRequest) => {
  const { data } = await api.post<ApiResponse>("/items/multiple", data_);
  return data;
};
