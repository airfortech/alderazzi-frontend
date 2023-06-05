import { LocationAddRequest, LocationUpdateRequest } from "../types/Location";
import { QueryKey } from "../types/QueryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addLocation,
  deleteLocation,
  getLocations,
  updateLocation,
} from "../api/locations";
import { queryClient } from "../api/queryClient";

export const useLocations = () => {
  const query = useQuery([QueryKey.locations], getLocations, {
    select: data => data.data.locations,
  });

  const deleteLocationMutation = useMutation(deleteLocation, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.locations]);
    },
  });

  const { mutate: addLocationMutation, isLoading: isAddingLocation } =
    useMutation((location: LocationAddRequest) => addLocation(location), {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.locations]);
      },
    });

  const { mutate: updateLocationMutation, isLoading: isUpdatingLocation } =
    useMutation(
      ({ id, location }: { id: string; location: LocationUpdateRequest }) =>
        updateLocation(id, location),
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QueryKey.locations]);
        },
      }
    );

  return {
    ...query,
    addLocationMutation,
    isAddingLocation,
    updateLocationMutation,
    isUpdatingLocation,
    deleteLocationMutation,
  };
};
