import { KeyGiver } from "../../types/KeyGiver";

import { Row } from "react-table";
import dayjs from "dayjs";

import { nextRespawnTime } from "../../utils/nextRespawnTime";
import { InfoText } from "../InfoText/InfoText";

const customSort = (rowA: Row, rowB: Row, id: string, desc: boolean) => {
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

export const columns = [
  {
    Header: "id",
    accessor: "id",
    // disableSortBy: true,
    show: false,
  },
  {
    Header: "Name",
    accessor: "name",
    // disableSortBy: true,
    // show: false,
  },
  {
    Header: "Respawn Time",
    accessor: "respawnTime",
    align: "center",
  },
  {
    Header: "Next Respawn",
    accessor: "nextRespawn",
    align: "right",
    Cell: ({ value }: { value: string }) => {
      const { date: nextResp, type } = nextRespawnTime(value);
      return <InfoText message={nextResp} type={type} />;
    },
    sortType: customSort,
  },
];

export const rows = (data: KeyGiver[] | undefined) => {
  return data?.map(({ id, name, respawnTime, nextRespawn }) => {
    return {
      id,
      name,
      respawnTime,
      nextRespawn,
    };
  });
};
