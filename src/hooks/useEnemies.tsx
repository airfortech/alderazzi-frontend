import { useMutation, useQuery } from "@tanstack/react-query";

import { addEnemy, deleteEnemy, getEnemies, updateEnemy } from "../api/enemies";
import { queryClient } from "../api/queryClient";
import { QueryKey } from "../types/QueryKey";
import { EnemyRequest } from "../types/Enemy";
import { useAtom } from "jotai";
import { updateEnemySuccessGlobal } from "../gobalStates/reactQuery";

export const useEnemies = () => {
  const [updateEnemySuccess, setUpdateEnemySuccess] = useAtom(
    updateEnemySuccessGlobal
  );
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

  const { mutate: addEnemyMutation, isLoading: isAddingEnemy } = useMutation(
    (enemy: EnemyRequest) => addEnemy(enemy),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QueryKey.enemies]);
      },
    }
  );

  // INFO: mutation with more than one parameter:
  // const updateEnemyMutation = useMutation(
  //   (params: { id: string; enemy: EnemyRequest }) => updateEnemy(params.id, params.enemy),
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries([QueryKey.enemies]);
  //     },
  //   }
  // );

  const { mutate: updateEnemyMutation, isLoading: isUpdatingEnemy } =
    useMutation(
      ({ id, enemy }: { id: string; enemy: EnemyRequest }) =>
        updateEnemy(id, enemy),
      {
        onSuccess: () => {
          setUpdateEnemySuccess(prev => prev + 1);
          queryClient.invalidateQueries([QueryKey.enemies]);
        },
      }
    );

  return {
    ...query,
    addEnemyMutation,
    isAddingEnemy,
    updateEnemyMutation,
    isUpdatingEnemy,
    updateEnemySuccess,
    deleteEnemyMutation,
  };
};
