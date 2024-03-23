import { ItemResponse } from "../../types/Item";
import { Columns } from "../../types/Table";
import { Icon } from "../Icon/Icon";
import classes from "./ItemsList.module.css";

type ItemColumnsOptions = keyof ItemResponse;

export const itemColumns = (
  visible: ItemColumnsOptions[],
  invisible: ItemColumnsOptions[]
): Columns<ItemResponse> => {
  const visibleColumns: Columns<ItemResponse> = [
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
      cell: value =>
        value && <Icon icon="checkmark" color="success" size="sm" />,
    },
    {
      selector: "weaponPiercingDamage",
      header: "K",
      isSortable: true,
      align: "right",
      cell: value =>
        value && <Icon icon="checkmark" color="success" size="sm" />,
    },
    {
      selector: "weaponBluntDamage",
      header: "O",
      isSortable: true,
      align: "right",
      cell: value =>
        value && <Icon icon="checkmark" color="success" size="sm" />,
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
  ];

  const invisibleColumns: Columns<ItemResponse> = [
    {
      selector: "name",
      header: "Nazwa",
      isFilterable: true,
      isSortable: true,
      isVisible: false,
    },
    {
      selector: "specialBonus",
      isVisible: false,
      isFilterable: true,
    },
  ];

  return [
    ...visibleColumns.filter(({ selector }) => visible.includes(selector)),
    ...invisibleColumns.filter(({ selector }) => invisible.includes(selector)),
  ];
};
