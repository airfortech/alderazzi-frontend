import { useMutation, useQuery } from "@tanstack/react-query";

import { addEnemy, deleteEnemy, getEnemies, updateEnemy } from "../api/enemies";
import { queryClient } from "../api/queryClient";
import { QueryKey } from "../types/QueryKey";
import { EnemyRequest } from "../types/Enemy";
import { getKeyGiverDrops } from "../api/keyGiverDrops";

export const useKeyGiverDrops = () => {
  const query = useQuery(
    [QueryKey.keygiverdrops],
    getKeyGiverDrops,
    {
      select: data => data.data.keyGiverDrops,
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

  return {
    ...query,
  };
};
