import { useEffect, useMemo, useState } from "react";
import { useBackups } from "../../hooks/useBackups";
import { Heading } from "../Heading/Heading";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { Loader } from "../Loader/Loader";
import { Table } from "../Table/Table";
import { columns, tableData } from "./dataBackupsList";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { useSettings } from "../../hooks/useSettings";
import { Prompt } from "../Prompt/Prompt";
import { UpdateBackupSettings } from "./UpdateBackupSettings/UpdateBackupSettings";
import { monthsToString } from "../../utils/formatDate";
import classes from "./BackupsList.module.css";

export const BackupsList = () => {
  const {
    data: backups,
    isLoading,
    createBackupMutation,
    createBackupSuccess,
    deleteBackupMutation,
    deleteBackupSuccess,
  } = useBackups();
  const { data: settings, updateSettingsSuccess } = useSettings();
  const [openBackupSettings, setOpenBackupSettings] = useState(false);
  const [openCreateBackup, setOpenCreateBackup] = useState(false);
  const [openDeleteBackup, setOpenDeleteBackup] = useState(false);

  const backupsData = useMemo(() => tableData(backups), [backups]);

  const handleCreateBackup = () => {
    createBackupMutation();
  };

  const handleDeleteBackup = () => {
    deleteBackupMutation();
  };

  useEffect(() => {
    setOpenBackupSettings(false);
  }, [updateSettingsSuccess]);
  useEffect(() => {
    setOpenCreateBackup(false);
  }, [createBackupSuccess]);
  useEffect(() => {
    setOpenDeleteBackup(false);
  }, [deleteBackupSuccess]);

  return (
    <div className={classes.BackupsList}>
      <MobileWrapper>
        <Heading align="left" marginBottom={false}>
          Zarządzanie kopiami zapasowymi bazy danych
        </Heading>
      </MobileWrapper>
      {!settings ? (
        <Loader />
      ) : (
        <>
          <MobileWrapper>
            <div className={classes.actions}>
              <Button
                variant="contained"
                color="info"
                size="normal"
                icon="settings"
                onClick={() => setOpenBackupSettings(true)}
              >
                Opcje
              </Button>
              <Button
                variant="contained"
                color="warning"
                size="normal"
                icon="file"
                onClick={() => setOpenCreateBackup(true)}
              >
                Nowy backup
              </Button>
              <Button
                variant="contained"
                color="danger"
                size="normal"
                icon="file"
                onClick={() => setOpenDeleteBackup(true)}
              >
                Usuń starsze backupy
              </Button>
              <Modal
                title="Opcje kopii zapasowych:"
                open={openBackupSettings}
                onClose={() => setOpenBackupSettings(false)}
                closeOnBackdropClick={false}
              >
                <UpdateBackupSettings />
              </Modal>
              <Prompt
                title="Czy na pewno chcesz utworzyć nową kopię zapasową?"
                open={openCreateBackup}
                onClose={() => setOpenCreateBackup(false)}
                onAccept={handleCreateBackup}
              />
              <Prompt
                title={`Czy na pewno chcesz usunąć pliki backupu starsze niż ${monthsToString(
                  settings.backupKeepMonths
                )}?`}
                open={openDeleteBackup}
                onClose={() => setOpenDeleteBackup(false)}
                onAccept={handleDeleteBackup}
              />
            </div>
          </MobileWrapper>
          {isLoading ? (
            <Loader isLoading />
          ) : (
            <Table
              data={backupsData}
              columns={columns}
              title="Lista Plików Kopii Zapasowych"
              titleTag="h2"
              initialSorting={{ field: "fileName", order: "desc" }}
              stickyHeaderPosition={50}
              expandableRowsComponentPaddingsDisabled
              horizontalScroll="top"
            />
          )}
        </>
      )}
    </div>
  );
};
