import { WeaponsListOption } from "../../../types/ItemsList";
import { useItems } from "../../../hooks/useItems";
import { Button } from "../../Button/Button";
import { useSelect } from "../../Inputs/Select/useSelect";
import { Loader } from "../../Loader/Loader";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
import { Table } from "../../Table/Table";
import { weaponsOptions } from "./dataWeaponsList";
import { itemColumns } from "../dataItemColumnsList";
import { itemsExpandableRow } from "../dataItemsExpandableRow";
import classes from "../ItemsList.module.css";

export const WeaponsList = ({
  weaponType,
  selectPlaceholder,
  icon,
  buttonLabel,
  tableTitle,
}: WeaponsListOption) => {
  const { value, Select } = useSelect(weaponsOptions(weaponType)[0].value);
  const { data: weapons, isLoading, deleteItemMutation } = useItems(value);

  return (
    <div className={classes.ItemsWeaponsList}>
      <MobileWrapper>
        <div className={classes.actions}>
          <Select
            placeholder={selectPlaceholder}
            options={weaponsOptions(weaponType)}
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
          data={weapons || []}
          columns={itemColumns(
            [
              "short",
              "weaponEffectiveness",
              "weaponBalance",
              "weaponSlashingDamage",
              "weaponPiercingDamage",
              "weaponBluntDamage",
              "weaponHand",
              "vendorCost",
            ],
            ["name", "specialBonus", "description"]
          )}
          title={tableTitle}
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={150}
          expandableRowsComponent={itemsExpandableRow(
            ["weaponSum", "weaponAverage"],
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
