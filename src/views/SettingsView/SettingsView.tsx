import { BackupsList } from "../../components/BackupsList/BackupsList";
import { ChangePassword } from "../../components/ChangePassword/ChangePassword";
import { MobileWrapper } from "../../components/MobileWrapper/MobileWrapper";
import classes from "./SettingsView.module.css";

export const SettingsView = () => {
  return (
    <div className={classes.SettingsView}>
      <MobileWrapper>
        <ChangePassword />
      </MobileWrapper>
      <BackupsList />
    </div>
  );
};
