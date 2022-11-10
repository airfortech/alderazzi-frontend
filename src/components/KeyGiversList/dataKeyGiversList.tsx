import { Columns, SortFunc } from "../../types/Table";
import { KeyGiver } from "../../types/KeyGiver";
import dayjs from "dayjs";
import { InfoText } from "../InfoText/InfoText";
import { nextRespawnTime } from "../../utils/nextRespawnTime";

const sortNextRespawn: SortFunc = (aField, bField, order) => {
  if (aField === bField) return 0;

  if (order === "asc") {
    if (aField === null) return 1;
    if (bField === null) return -1;
  } else {
    if (aField === null) return 1;
    if (bField === null) return -1;
  }

  const now = dayjs();
  const nextTimeA = dayjs(aField);
  const nextTimeB = dayjs(bField);
  const diffA = nextTimeA.diff(now, "hour");
  const diffB = nextTimeB.diff(now, "hour");

  if (order === "asc") {
    if (diffA > 0 && diffB > 0) return aField > bField ? 1 : -1;
    if (diffA < 0 && diffB < 0) return aField > bField ? -1 : 1;
    if (diffA > 0 && diffB < 0) return 1;
    if (diffA < 0 && diffB > 0) return -1;
  } else {
    if (diffA > 0 && diffB > 0) return aField > bField ? 1 : -1;
    if (diffA < 0 && diffB < 0) return aField > bField ? -1 : 1;
    if (diffA > 0 && diffB < 0) return -1;
    if (diffA < 0 && diffB > 0) return 1;
  }

  return 0;
};

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

export const columns: Columns<KeyGiver> = [
  {
    selector: "id",
    isVisible: false,
  },
  {
    selector: "name",
    header: "Nazwa",
    isSortable: false,
    isFilterable: true,
  },
  {
    selector: "respawnTime",
    header: "Czas odrodzenia",
    isSortable: true,
    isFilterable: true,
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
    sortFunc: sortNextRespawn,
  },
];
