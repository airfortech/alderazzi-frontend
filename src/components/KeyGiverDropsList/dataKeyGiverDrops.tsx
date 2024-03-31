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
    keyGiverDomain,
    keyGiverRespawnTime,
    keyGiverLocations,
    dropName,
    magicDrops,
    dropDate,
    nextRespawnDate,
    createdAt,
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
        {
          title: "Data dodania:",
          value: formatDate(createdAt, "Brak danych"),
        },
        {
          title: "Czas odrodzenia:",
          value: keyGiverRespawnTime
            ? keyGiverRespawnTime + " godzin"
            : "Brak danych",
        },
        { title: "Klucz:", value: dropName ? dropName : "Brak" },
        { title: "Magiki:", value: magicDrops },
        { title: "Domena:", value: keyGiverDomain },
      ]}
      longDetails={[
        {
          title: "Lokacje:",
          value: (
            <div>
              {locations.length > 0 ? (
                locations.map(({ id, locationId, name, domain }) => (
                  <p key={id}>
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
  const diffA = nextTimeA.diff(now, "second");
  const diffB = nextTimeB.diff(now, "second");

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
  data.map(
    ({
      id,
      keyGiver,
      drop,
      magicDrops,
      dropDate,
      nextRespawnDate,
      createdAt,
    }) => {
      return {
        id,
        keyGiverId: keyGiver.id,
        keyGiverName: keyGiver.name,
        keyGiverShort: keyGiver.short,
        keyGiverDomain: keyGiver.domain,
        keyGiverRespawnTime: keyGiver.respawnTime,
        keyGiverLocations: JSON.stringify(keyGiver.locations),
        dropId: drop ? drop.id : null,
        dropName: drop ? drop.name : null,
        magicDrops: magicDrops
          .map(({ name, short }) => (name ? `${short} (${name})` : short))
          .join(", "),
        dropDate,
        nextRespawnDate,
        createdAt,
      };
    }
  );

export const columns: Columns<TableKeyGiverDropResponse> = [
  {
    selector: "keyGiverName",
    header: "Klucznik",
    isFilterable: true,
    isSortable: true,
    cell: (value, props) => (
      <div>
        <p className={classes.name}>{value}</p>
        <p className={classes.short}>{props.keyGiverShort}</p>
      </div>
    ),
  },
  {
    selector: "keyGiverShort",
    isFilterable: true,
    isVisible: false,
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
    selector: "magicDrops",
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
