import { LocationAddRequest } from "../../../types/Location";
import { useLocations } from "../../../hooks/useLocations";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataAddLocation";
import classes from "./AddLocation.module.css";

export const AddLocation = () => {
  const { addLocationMutation, isAddingLocation } = useLocations();

  const submit = (formData: LocationAddRequest) => {
    addLocationMutation(formData);
  };

  return (
    <div className={classes.AddLocation}>
      <Form<LocationAddRequest>
        items={items}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isAddingLocation}
      />
    </div>
  );
};
