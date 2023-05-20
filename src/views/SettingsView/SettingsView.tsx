import { ChangePassword } from "../../components/ChangePassword/ChangePassword";
import { MobileWrapper } from "../../components/MobileWrapper/MobileWrapper";
import classes from "./SettingsView.module.css";

export const SettingsView = () => {
  return (
    <MobileWrapper>
      <div className={classes.SettingsView}>
        <ChangePassword />
      </div>
    </MobileWrapper>
  );
};
