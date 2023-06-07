import { useLocations } from "../../../hooks/useLocations";
import { LocationUpdateRequest } from "../../../types/Location";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataUpdateLocation";
import classes from "./UpdateLocation.module.css";

interface Props {
  id: string;
}

export const UpdateLocation = ({ id }: Props) => {
  const {
    data: locations,
    updateLocationMutation,
    isUpdatingLocation,
  } = useLocations();
  const location = locations?.find(location => location.id === id);

  const submit = (formData: LocationUpdateRequest) => {
    updateLocationMutation({ id, location: formData });
  };

  if (!location) return null;

  return (
    <div className={classes.UpdateLocation}>
      <Form<LocationUpdateRequest>
        items={items(location)}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isUpdatingLocation}
      />
    </div>
  );
};
