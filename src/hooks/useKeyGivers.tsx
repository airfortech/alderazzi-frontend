import { useMutation, useQuery } from "@tanstack/react-query";

import { addKeyGiver, deleteKeyGiver, getKeyGivers } from "../api/keyGivers";
import { queryClient } from "../api/queryClient";
import { QueryKey } from "../types/QueryKey";

export const useKeyGivers = () => {
  const query = useQuery([QueryKey.keygivers], getKeyGivers, {
    select: data => data.data.keyGivers,
  });

  const deleteKeyGiverMutation = useMutation(deleteKeyGiver, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.keygivers]);
    },
  });

  const addKeyGiverMutation = useMutation(addKeyGiver, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.keygivers]);
    },
  });

  return { ...query, addKeyGiverMutation, deleteKeyGiverMutation };
};
