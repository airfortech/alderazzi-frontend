import { Columns, ExpandableRowsComponent, SortFunc } from "../../types/Table";
import {
  KeyGiverDropResponse,
  TableKeyGiverDropResponse,
} from "../../types/KeyGiverDrop";
import { ShortLocationResponse } from "../../types/Location";
import dayjs from "dayjs";
import { TableRowDetails } from "../TableRowDetails/TableRowDetails";
import { InfoText } from "../InfoText/InfoText";

import { respawnTime } from "../../utils/respawnTime";
import { formatDate } from "../../utils/formatDate";
import classes from "./KeyGiverDropsList.module.css";

export const expandableRow: ExpandableRowsComponent<
  TableKeyGiverDropResponse
> = data => {
  const {
    id,
    keyGiverDomain,
    keyGiverLocations,
    dropName,
    dropDate,
    nextRespawnDate,
  } = data;
  const locations = JSON.parse(keyGiverLocations) as ShortLocationResponse[];
  return (
    <TableRowDetails
      details={[
        { title: "Ostatnie pacnięcie:", value: formatDate(dropDate) },
        {
          title: "Następny respawn:",
          value: formatDate(nextRespawnDate, "Brak danych"),
        },
        { title: "Drop:", value: dropName ? dropName : "Brak" },
        { title: "Domena:", value: keyGiverDomain },
      ]}
      longDetails={[
        {
          title: "Lokacje:",
          value: (
            <div>
              {locations.length > 0 ? (
                locations.map(({ id, locationId, name, domain }) => (
                  <p>
                    <span className={classes.locationId}>{locationId}</span>
                    {" - " + domain + (name && " - " + name)}
                  </p>
                ))
              ) : (
                <p>Brak</p>
              )}
            </div>
          ),
        },
      ]}
    />
  );
};

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
  const nextTimeA = dayjs.unix(aField as number);
  const nextTimeB = dayjs.unix(bField as number);
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

export const tableData = (
  data: KeyGiverDropResponse[]
): TableKeyGiverDropResponse[] =>
  data.map(({ id, keyGiver, drop, dropDate, nextRespawnDate }) => {
    return {
      id,
      keyGiverId: keyGiver.id,
      keyGiverName: `${keyGiver.name}-${keyGiver.short}`,
      keyGiverShort: keyGiver.short,
      keyGiverDomain: keyGiver.domain,
      keyGiverLocations: JSON.stringify(keyGiver.locations),
      dropId: drop ? drop.id : null,
      dropName: drop ? drop.name : null,
      dropDate,
      nextRespawnDate: nextRespawnDate,
    };
  });

export const columns: Columns<TableKeyGiverDropResponse> = [
  {
    selector: "keyGiverName",
    header: "Klucznik",
    isFilterable: true,
    isSortable: true,
    cell: (value, props) => (
      <div>
        <p className={classes.name}>{(value as string).split("-")[0]}</p>
        <p className={classes.short}>{props.keyGiverShort}</p>
      </div>
    ),
  },
  {
    selector: "keyGiverDomain",
    isFilterable: true,
    isVisible: false,
  },
  {
    selector: "dropName",
    isFilterable: true,
    isVisible: false,
  },
  {
    selector: "dropDate",
    header: "Pop. respawn",
    isSortable: true,
    align: "right",
    cell: (value, props) => {
      const { date: nextResp, type } = respawnTime(value as number);
      return <p>{nextResp}</p>;
    },
  },
  {
    selector: "nextRespawnDate",
    header: "Nast. respawn",
    isSortable: true,
    align: "right",
    sortFunc: sortNextRespawn,

    cell: (value, props) => {
      const { date: nextResp, type } = respawnTime(value as number);
      return <InfoText type={type} message={nextResp} />;
    },
  },
];
