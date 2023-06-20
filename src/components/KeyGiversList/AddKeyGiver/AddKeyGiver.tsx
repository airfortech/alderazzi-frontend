import { useKeyGivers } from "../../../hooks/useKeyGivers";
import { KeyGiverAddRequest } from "../../../types/KeyGiver";
import { useLocations } from "../../../hooks/useLocations";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataAddKeyGiver";
import classes from "./AddKeyGiver.module.css";

export const AddKeyGiver = () => {
  const { addKeyGiverMutation, isAddingKeyGiver } = useKeyGivers();
  const { data: locations } = useLocations();

  const submit = (formData: KeyGiverAddRequest) => {
    addKeyGiverMutation(formData);
  };

  if (!locations) return null;

  return (
    <div className={classes.AddKeygiver}>
      <Form<KeyGiverAddRequest>
        validationSchema={validationSchema}
        items={items(locations)}
        submit={submit}
        isLoading={isAddingKeyGiver}
      />
    </div>
  );
};
