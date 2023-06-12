import { useEffect, useState } from "react";
import { useBackups } from "../../../hooks/useBackups";
import { Button } from "../../Button/Button";
import { Prompt } from "../../Prompt/Prompt";

interface Props {
  fileName: string;
}

export const RestoreBackupCell = ({ fileName }: Props) => {
  const [open, setOpen] = useState(false);
  const { restoreBackupMutation, restoreBackupSuccess } = useBackups();

  const handleRestoreBackup = (fileName: string) => {
    restoreBackupMutation(fileName);
  };

  useEffect(() => {
    setOpen(false);
  }, [restoreBackupSuccess]);

  return (
    <>
      <Button
        color="warning"
        variant="outlined"
        size="normal"
        onClick={() => setOpen(true)}
      >
        Załaduj backup
      </Button>
      <Prompt
        title={`Czy na pewno chcesz wczytać backup z pliku ${fileName}?`}
        open={open}
        onClose={() => setOpen(false)}
        onAccept={() => handleRestoreBackup(fileName)}
      />
    </>
  );
};
