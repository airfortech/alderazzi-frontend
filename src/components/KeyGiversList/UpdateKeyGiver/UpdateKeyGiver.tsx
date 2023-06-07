import { useKeyGivers } from "../../../hooks/useKeyGivers";
import { useLocations } from "../../../hooks/useLocations";
import {
  KeyGiverAddRequest,
  KeyGiverUpdateRequest,
} from "../../../types/KeyGiver";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataUpdateKeyGiver";
import classes from "./UpdateKeyGiver.module.css";

interface Props {
  id: string;
}

export const UpdateKeyGiver = ({ id }: Props) => {
  const {
    data: keyGivers,
    updateKeyGiverMutation,
    isUpdatingKeyGiver,
  } = useKeyGivers();
  const { data: locations } = useLocations();
  const keyGiver = keyGivers?.find(keyGiver => keyGiver.id === id);

  const submit = (formData: KeyGiverUpdateRequest) => {
    updateKeyGiverMutation({ id, keyGiver: formData });
  };

  if (!keyGiver) return null;
  if (!locations) return null;

  return (
    <div className={classes.UpdateKeyGiver}>
      <Form<KeyGiverAddRequest>
        validationSchema={validationSchema}
        items={items(keyGiver, locations)}
        submit={submit}
        isLoading={isUpdatingKeyGiver}
      />
    </div>
  );
};
