import { KeyAddRequest } from "../../../types/Key";
import { useKeys } from "../../../hooks/useKeys";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataAddKey";
import classes from "./AddKey.module.css";

export const AddKey = () => {
  const { addKeyMutation, isAddingKey } = useKeys();

  const submit = (formData: KeyAddRequest) => {
    addKeyMutation(formData);
  };

  return (
    <div className={classes.AddKey}>
      <Form<KeyAddRequest>
        items={items}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isAddingKey}
      />
    </div>
  );
};
