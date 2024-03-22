import { ItemResponse } from "../../../types/Item";
import { Columns, ExpandableRowsComponent } from "../../../types/Table";
import { Icon } from "../../Icon/Icon";
import { TableRowDetails } from "../../TableRowDetails/TableRowDetails";
import {
  itemsTableRowDetails,
  itemsTableRowLongDetails,
} from "../dataItemsList";
import classes from "../ItemsList.module.css";

export const options = [
  {
    value: "weapon&weaponType=sword&isMagic=true",
    label: "Magiczne",
  },
  {
    value: "weapon&weaponType=sword&isWeaponSilver=true",
    label: "Srebrne",
  },
  {
    value: "weapon&weaponType=sword&isMagic=false&isWeaponSilver=false",
    label: "Zwykłe",
  },
  {
    value: "weapon&weaponType=sword",
    label: "Wszystkie",
  },
];

export const expandableRow: ExpandableRowsComponent<ItemResponse> = data => {
  const { weaponEffectiveness, weaponBalance } = data;
  return (
    <TableRowDetails
      details={[
        {
          title: "Suma",
          value: weaponEffectiveness + weaponBalance,
        },
        {
          title: "Średnia",
          value: (weaponEffectiveness + weaponBalance) / 2,
        },
        ...itemsTableRowDetails(data),
      ]}
      longDetails={[...itemsTableRowLongDetails(data)]}
      actions={
        [
          //  <UpdateEnemyCell id={id} />,
          //  <DeleteEnemyCell id={id} name={short} />,
        ]
      }
    />
  );
};

export const columns: Columns<ItemResponse> = [
  {
    selector: "short",
    header: "Szort",
    isFilterable: true,
    isSortable: true,
    cell: (value, props) => {
      const name = props.name ? `${value} (${props.name})` : value;
      if (props.isMagic) return <p className={classes.magic}>{name}</p>;
      else if (props.isWeaponSilver)
        return <p className={classes.silver}>{name}</p>;
      return name;
    },
  },
  {
    selector: "name",
    header: "Nazwa",
    isFilterable: true,
    isSortable: true,
    isVisible: false,
  },
  {
    selector: "weaponEffectiveness",
    header: "Skut.",
    isSortable: true,
    align: "right",
  },
  {
    selector: "weaponBalance",
    header: "Wyw.",
    isSortable: true,
    align: "right",
  },
  {
    selector: "weaponSlashingDamage",
    header: "C",
    isSortable: true,
    align: "right",
    cell: value => value && <Icon icon="checkmark" color="success" size="sm" />,
  },
  {
    selector: "weaponPiercingDamage",
    header: "K",
    isSortable: true,
    align: "right",
    cell: value => value && <Icon icon="checkmark" color="success" size="sm" />,
  },
  {
    selector: "weaponBluntDamage",
    header: "O",
    isSortable: true,
    align: "right",
    cell: value => value && <Icon icon="checkmark" color="success" size="sm" />,
  },
  {
    selector: "weaponHand",
    header: "Chwyt",
    isFilterable: true,
    isSortable: true,
    align: "right",
  },
  {
    selector: "vendorCost",
    header: "Zlecenie",
    isSortable: true,
    align: "right",
    cell: value =>
      value && (
        <p className={classes.cost}>
          {value}
          <Icon icon="coins" color="warning" size="normal" />
        </p>
      ),
  },
  {
    selector: "specialBonus",
    isVisible: false,
    isFilterable: true,
  },
];
