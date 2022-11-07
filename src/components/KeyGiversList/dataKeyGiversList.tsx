import { KeyGiver } from "../../types/KeyGiver";
// import { SortingFn } from "react-table";
import {
  createColumnHelper,
  SortingFns,
  IdentifiedColumnDef,
} from "@tanstack/react-table";

// import { Row } from "react-table";
import dayjs from "dayjs";

import { nextRespawnTime } from "../../utils/nextRespawnTime";
import { InfoText } from "../InfoText/InfoText";
import { Columns } from "../../types/Table";
// import { CustomColumn } from "../Table/Table";

const customSort: SortingFns = (
  rowA: any,
  rowB: any,
  id: string,
  desc: boolean
) => {
  const a = rowA.values[id];
  const b = rowB.values[id];

  if (a === b) return 0;

  if (desc) {
    if (a === null) return -1;
    if (b === null) return 1;
  } else {
    if (a === null) return 1;
    if (b === null) return -1;
  }

  const now = dayjs();
  const nextTimeA = dayjs(a);
  const nextTimeB = dayjs(b);
  const diffA = nextTimeA.diff(now, "hour");
  const diffB = nextTimeB.diff(now, "hour");

  if (desc) {
    if (diffA > 0 && diffB > 0) return a > b ? -1 : 1;
    if (diffA < 0 && diffB < 0) return a > b ? 1 : -1;
    if (diffA > 0 && diffB < 0) return 1;
    if (diffA < 0 && diffB > 0) return -1;
  } else {
    if (diffA > 0 && diffB > 0) return a > b ? 1 : -1;
    if (diffA < 0 && diffB < 0) return a > b ? -1 : 1;
    if (diffA > 0 && diffB < 0) return 1;
    if (diffA < 0 && diffB > 0) return -1;
  }
};

const { accessor } = createColumnHelper<KeyGiver>();

export const columns = [
  accessor("id", {
    header: "id",

    // show: false,
  }),
  accessor("name", {
    header: "Nazwa",
    /* disable sorting for column */
    enableSorting: false,
    // disableSortBy: true,
    // show: false,
  }),
  accessor("respawnTime", {
    header: "Czas odrodzenia",
    cell: props => props.getValue() + "h",
    // align: "right",
    sortUndefined: 1,
  }),
  accessor("nextRespawn", {
    header: "Odrodzi się",
    // sortUndefined: 1,
    // align: "right",
    cell: props => {
      const { date: nextResp, type } = nextRespawnTime(props.getValue());
      return <InfoText message={nextResp} type={type} />;
    },
    // sortType: customSort,
  }),
];

export const rows = (data: KeyGiver[]) => {
  return data?.map(({ id, name, respawnTime, nextRespawn }) => {
    return {
      id,
      name,
      respawnTime,
      nextRespawn,
    };
  });
};

export const columns2: Columns<KeyGiver> = [
  {
    selector: "id",
    isVisible: false,
  },
  {
    selector: "name",
    header: "Nazwa",
    isSortable: true,
  },
  {
    selector: "respawnTime",
    header: "Czas odrodzenia",
    isSortable: true,
    align: "right",
    cell: value => value + "h",
  },
  {
    selector: "nextRespawn",
    header: "Odrodzi się",
    isSortable: true,
    align: "right",
    cell: value => {
      const { date: nextResp, type } = nextRespawnTime(value as string);
      return <InfoText message={nextResp} type={type} />;
    },
  },
];
