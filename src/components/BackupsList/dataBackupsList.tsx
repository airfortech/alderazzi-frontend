import { Columns } from "../../types/Table";
import { BackupResponse } from "../../types/Backup";
import { Button } from "../Button/Button";

interface BackupData {
  id: string;
  fileName: string;
}

export const tableData = (
  backups: BackupResponse | undefined = []
): BackupData[] =>
  backups.map(backup => {
    return {
      id: backup,
      fileName: backup,
    };
  });

export const columns: Columns<BackupData> = [
  {
    selector: "fileName",
    header: "Nazwa pliku",
    isFilterable: true,
    isSortable: true,
  },
  {
    selector: "fileName",
    align: "right",
    cell: fileName => (
      <Button variant="outlined" color="warning">
        Załaduj backup
      </Button>
    ),
  },
];
