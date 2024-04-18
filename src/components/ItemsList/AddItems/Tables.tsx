import { ItemResponse } from "../../../types/Item";
import { ItemTypes } from "../../../types/ItemTypes";
import { Table } from "../../Table/Table";
import { itemColumns } from "../dataItemColumnsList";
import { itemsExpandableRow } from "../dataItemsExpandableRow";
import classes from "./AddItems.module.css";

interface Props {
  items: ItemResponse[];
}

export const Tables = ({ items }: Props) => {
  const weapons = items.filter(item => item.type === ItemTypes.weapon);
  const armors = items.filter(item => item.type === ItemTypes.armor);
  const shields = items.filter(item => item.type === ItemTypes.shield);

  return (
    <div className={classes.Tables}>
      {weapons.length > 0 && (
        <Table
          data={weapons}
          columns={itemColumns(
            [
              "short",
              "weaponEffectiveness",
              "weaponBalance",
              "weaponSlashingDamage",
              "weaponPiercingDamage",
              "weaponBluntDamage",
              "weaponHand",
              // "vendorCost",
              // "slot",
            ],
            ["name", "specialBonus", "description"]
          )}
          title={"Bronie"}
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={100}
          expandableRowsComponent={itemsExpandableRow(
            ["weaponSum", "weaponAverage"],
            false
          )}
          expandableRowsComponentPaddingsDisabled
          stickyColumn="first column"
          horizontalScroll="top"
          counter
        />
      )}
      {armors.length > 0 && (
        <Table
          data={armors}
          columns={itemColumns(
            [
              "short",
              "armorSlashingRes",
              "armorPiercingRes",
              "armorBluntRes",
              "armorHead",
              "armorChest",
              "armorLegs",
              "armorLeftArm",
              "armorRightArm",
              "armorHands",
              "armorFoots",
              // "vendorCost",
              // "slot",
            ],
            ["name", "specialBonus", "description"]
          )}
          title={"Zbroje"}
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={100}
          expandableRowsComponent={itemsExpandableRow(
            ["armorSum", "armorAverage"],
            false
          )}
          expandableRowsComponentPaddingsDisabled
          stickyColumn="first column"
          horizontalScroll="top"
          counter
        />
      )}
      {shields.length > 0 && (
        <Table
          data={shields}
          columns={itemColumns(
            [
              "short",
              "armorSlashingRes",
              "armorPiercingRes",
              "armorBluntRes",
              "shieldParry",
              // "vendorCost",
              // "slot",
            ],
            ["name", "specialBonus", "description"]
          )}
          title={"Tarcze"}
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={100}
          expandableRowsComponent={itemsExpandableRow(
            ["armorSum", "armorAverage"],
            false
          )}
          expandableRowsComponentPaddingsDisabled
          stickyColumn="first column"
          horizontalScroll="top"
          counter
        />
      )}
    </div>
  );
};
