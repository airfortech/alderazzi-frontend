import { EnemyRequest } from "../../../types/Enemy";
import { useEnemies } from "../../../hooks/useEnemies";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataAddEnemy";

import classes from "./AddEnemy.module.css";

export const AddEnemy = () => {
  const { addEnemyMutation, isAddingEnemy } = useEnemies();

  const submit = (formData: EnemyRequest) => {
    addEnemyMutation(formData);
  };

  return (
    <div className={classes.AddEnemy}>
      <Form<EnemyRequest>
        items={items}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isAddingEnemy}
      />
    </div>
  );
};
