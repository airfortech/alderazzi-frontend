import { Columns, OnRowClickFunc, SortFunc } from "../../types/Table";
import { KeyGiver, KeyGiverTableData } from "../../types/KeyGiver";
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

// TODO: check if it is possible to type OnRowClickFunc function in way you dont need provide <KeyGiver>
export const handleDetails: OnRowClickFunc<KeyGiver> = props =>
  console.log(props);

export const rows = (data: KeyGiver[]) => {
  return data.map(({ id, name, respawnTime, nextRespawn }) => {
    return {
      id,
      name,
      respawnTime,
      nextRespawn,
    };
  });
};

export const columns: Columns<KeyGiverTableData> = [
  {
    selector: "name",
    header: "Nazwa",
    isSortable: true,
    isFilterable: true,
  },
  {
    selector: "nextRespawn",
    header: "Odrodzi się",
    isSortable: true,
    align: "right",
    cell: value => {
      const { date: nextResp, type } = nextRespawnTime(value as number);
      return <InfoText message={nextResp} type={type} />;
    },
    sortFunc: sortNextRespawn,
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
    selector: "id",
    isOnRowClickActive: false,
    cell: value => (
      <button
        style={{ height: "100%", width: "100%" }}
        onClick={e => {
          e.stopPropagation();
          console.log("value:", value);
        }}
      >
        x
      </button>
    ),
  },
];
