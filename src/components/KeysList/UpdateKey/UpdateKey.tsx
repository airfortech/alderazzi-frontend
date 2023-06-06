import { EnemyRequest } from "../../../types/Enemy";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataUpdateKey";

import { KeyUpdateRequest } from "../../../types/Key";
import { useKeys } from "../../../hooks/useKeys";
import classes from "./UpdateKey.module.css";

interface Props {
  id: string;
}

export const UpdateKey = ({ id }: Props) => {
  const { data: keys, updateKeyMutation, isUpdatingKey } = useKeys();
  const key = keys?.find(key => key.id === id);

  const submit = (formData: KeyUpdateRequest) => {
    updateKeyMutation({ id, key: formData });
  };

  if (!key) return null;

  return (
    <div className={classes.UpdateKey}>
      <Form<EnemyRequest>
        items={items(key)}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isUpdatingKey}
      />
    </div>
  );
};
