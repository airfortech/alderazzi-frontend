import { LocationsList } from "../../components/LocationsList/LocationsList";
import classes from "./LocationsView.module.css";

export const LocationsView = () => {
  return (
    <div className={classes.LocationsView}>
      <LocationsList />
    </div>
  );
};
