import { ArmorsListOption } from "../../../types/ItemsList";
import { useItems } from "../../../hooks/useItems";
import { Button } from "../../Button/Button";
import { useSelect } from "../../Inputs/Select/useSelect";
import { Loader } from "../../Loader/Loader";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
import { Table } from "../../Table/Table";
import { armorsOptions } from "./dataArmorsList";
import { itemColumns } from "../dataItemColumnsList";
import { itemsExpandableRow } from "../dataItemsExpandableRow";
import classes from "../ItemsList.module.css";

export const ArmorsList = ({
  armorClass,
  selectPlaceholder,
  icon,
  buttonLabel,
  tableTitle,
}: ArmorsListOption) => {
  const { value, Select } = useSelect(armorsOptions(armorClass)[0].value);
  const { data: armors, isLoading, deleteItemMutation } = useItems(value);

  return (
    <div className={classes.ItemsWeaponsList}>
      <MobileWrapper>
        <div className={classes.actions}>
          <Select
            placeholder={selectPlaceholder}
            options={armorsOptions(armorClass)}
            icon={icon}
            className={classes.select}
          />
          <Button
            variant="contained"
            color="info"
            onClick={() => console.log(buttonLabel)}
          >
            {buttonLabel}
          </Button>
        </div>
      </MobileWrapper>
      {isLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={armors || []}
          columns={itemColumns(
            [
              "short",
              "armorSlashingRes",
              "armorPiercingRes",
              "armorBluntRes",
              "vendorCost",
              "armorHead",
              "armorChest",
              "armorLegs",
              "armorLeftArm",
              "armorRightArm",
              "armorHands",
              "armorFoots",
            ],
            ["name", "specialBonus", "description"]
          )}
          title={tableTitle}
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={150}
          expandableRowsComponent={itemsExpandableRow(
            ["armorSum", "armorAverage"],
            deleteItemMutation
          )}
          expandableRowsComponentPaddingsDisabled
          stickyColumn="first column"
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
