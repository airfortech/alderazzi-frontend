import { useMutation, useQuery } from "@tanstack/react-query";
import { addEnemy, deleteEnemy, getEnemies } from "../api/enemies";
import { queryClient } from "../api/queryClient";

export const useEnemies = () => {
  const query = useQuery(["enemies"], getEnemies, {
    select: data =>
      data.data.enemies.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : 0
      ),
  });

  const deleteEnemyMutation = useMutation(deleteEnemy, {
    onSuccess: () => {
      queryClient.invalidateQueries(["enemies"]);
    },
  });

  const addEnemyMutation = useMutation(addEnemy, {
    onSuccess: () => {
      queryClient.invalidateQueries(["enemies"]);
    },
  });

  return { ...query, addEnemyMutation, deleteEnemyMutation };
};
