import { ApiResponse } from "../types/responseMessages";
import {
  LocationAddRequest,
  LocationResponse,
  LocationUpdateRequest,
} from "../types/Location";
import { api } from "./api";

export interface GetLocations extends ApiResponse {
  data: {
    locations: LocationResponse[];
  };
}

export const getLocations = async () => {
  const { data } = await api.get<GetLocations>("/location");
  return data;
};

export const addLocation = async (location: LocationAddRequest) => {
  const { data } = await api.post<ApiResponse>("/location", { location });
  return data;
};

export const updateLocation = async (
  id: string,
  location: LocationUpdateRequest
) => {
  const { data } = await api.patch<ApiResponse>("/location", { location });
  return data;
};

export const deleteLocation = async (id: string) => {
  const { data } = await api.delete<ApiResponse>("/location/" + id);
  return data;
};
