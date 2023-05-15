import { useMutation, useQuery } from "@tanstack/react-query";

import { addEnemy, deleteEnemy, getEnemies } from "../api/enemies";
import { queryClient } from "../api/queryClient";
import { QueryKey } from "../types/QueryKey";

export const useEnemies = () => {
  const query = useQuery(
    [QueryKey.enemies],
    getEnemies,
    {
      select: data => data.data.enemies,
    }
    // INFO: add to notes, optional sorting after get data
    // {
    //   select: data =>
    //     data.data.enemies.sort((a, b) =>
    //       a.name.toLowerCase() < b.name.toLowerCase()
    //         ? -1
    //         : a.name.toLowerCase() > b.name.toLowerCase()
    //         ? 1
    //         : 0
    //     ),
    // }
  );

  const deleteEnemyMutation = useMutation(deleteEnemy, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.enemies]);
    },
  });

  const addEnemyMutation = useMutation(addEnemy, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.enemies]);
    },
  });

  return { ...query, addEnemyMutation, deleteEnemyMutation };
};
