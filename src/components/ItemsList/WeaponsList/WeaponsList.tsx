import { useItems } from "../../../hooks/useItems";
import { Button } from "../../Button/Button";
import { useSelect } from "../../Inputs/Select/useSelect";
import { Loader } from "../../Loader/Loader";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
import { Table } from "../../Table/Table";
import { options } from "./dataWeaponsList";
import { itemColumns } from "../dataItemColumnsList";
import { itemsExpandableRow } from "../dataItemsExpandableRow";
import classes from "../ItemsList.module.css";

export const WeaponsList = () => {
  const { value, Select } = useSelect("weapon&weaponType=sword&isMagic=true");
  const { data: weapons, isLoading, deleteItemMutation } = useItems(value);

  return (
    <div className={classes.ItemsWeaponsList}>
      <MobileWrapper>
        <div className={classes.actions}>
          <Select
            placeholder="Rodzaj mieczy:"
            options={options}
            icon="sword"
            className={classes.select}
          />
          <Button
            variant="contained"
            color="info"
            onClick={() => console.log("Dodaj miecz")}
          >
            Dodaj miecz
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
            ["name", "specialBonus"]
          )}
          title="Miecze"
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={150}
          expandableRowsComponent={itemsExpandableRow(
            ["weaponSum", "weaponAverage"],
            deleteItemMutation
          )}
          expandableRowsComponentPaddingsDisabled
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
