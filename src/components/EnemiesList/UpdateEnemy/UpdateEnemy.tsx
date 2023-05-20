import { EnemyRequest } from "../../../types/Enemy";
import { useEnemies } from "../../../hooks/useEnemies";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataUpdateEnemy";

import classes from "./UpdateEnemy.module.css";

interface Props {
  id: string;
}

export const UpdateEnemy = ({ id }: Props) => {
  const { data: enemies, updateEnemyMutation, isUpdatingEnemy } = useEnemies();
  const enemy = enemies?.find(enemy => enemy.id === id);

  const submit = (formData: EnemyRequest) => {
    updateEnemyMutation({ id, enemy: formData });
  };

  if (!enemy) return null;

  return (
    <div className={classes.UpdateEnemy}>
      <Form<EnemyRequest>
        items={items(enemy)}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isUpdatingEnemy}
      />
    </div>
  );
};
