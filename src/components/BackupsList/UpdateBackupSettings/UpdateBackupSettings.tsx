import { useSettings } from "../../../hooks/useSettings";
import { SettingsRequest } from "../../../types/Settings";
import { Form } from "../../Form/Form";
import { items, validationSchema } from "./dataUpdateBackupSettings";
import classes from "./UpdateBackupSettings.module.css";

export const UpdateBackupSettings = () => {
  const {
    data: settings,
    updateSettingsMutation,
    isUpdatingSettings,
  } = useSettings();

  const submit = (formData: SettingsRequest) => {
    const { autoDeleteBackup, backupDays, backupKeepMonths } = formData;
    const newData = {
      autoDeleteBackup: autoDeleteBackup
        ? JSON.parse(autoDeleteBackup as unknown as string)
        : undefined,
      backupKeepMonths: backupKeepMonths || undefined,
      backupDays: backupDays?.map(day => Number(day)),
    };
    updateSettingsMutation(newData);
  };

  if (!settings) return null;

  return (
    <div className={classes.UpdateBackupSettings}>
      <Form<SettingsRequest>
        items={items(settings)}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isUpdatingSettings}
      />
    </div>
  );
};
