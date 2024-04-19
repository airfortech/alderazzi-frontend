import { ItemWeapon } from "../../../types/ItemWeapon";
import { WeaponsListOption } from "../../../types/ItemsList";
import { useEffect, useState } from "react";
import { useItems } from "../../../hooks/useItems";
import { useSelect } from "../../Inputs/Select/useSelect";
import { Modal } from "../../Modal/Modal";
import { Weapon } from "../AddItem/Weapon/Weapon";
import { Table } from "../../Table/Table";
import { Button } from "../../Button/Button";
import { Loader } from "../../Loader/Loader";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
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
  const { value, Select } = useSelect(weaponsOptions[0].value);
  const { data, isLoading } = useItems(`weapon&weaponType=${weaponType}`);
  const [openAddItem, setOpenAddItem] = useState(false);

  const filteredData = data?.filter(item => {
    const searchObject = weaponsOptions.find(
      option => option.value === value
    )?.searchOptions;
    const isMagic = searchObject?.isMagic;
    const isWeaponSilver = searchObject?.isWeaponSilver;
    if (isMagic) return item.isMagic === true;
    if (isWeaponSilver) return item.isWeaponSilver === true;
    if (isMagic === false && isWeaponSilver === false)
      return item.isMagic !== true && item.isWeaponSilver !== true;
    return true;
  });

  useEffect(() => {
    setOpenAddItem(false);
  }, [data]);

  return (
    <div className={classes.ItemsWeaponsList}>
      <MobileWrapper>
        <div className={classes.actions}>
          <Select
            placeholder={selectPlaceholder}
            options={weaponsOptions}
            icon={icon}
            className={classes.select}
          />
          <Button
            variant="contained"
            color="info"
            onClick={() => setOpenAddItem(true)}
          >
            {buttonLabel}
          </Button>
        </div>

        <Modal
          title={buttonLabel + ":"}
          open={openAddItem}
          onClose={() => setOpenAddItem(false)}
          closeOnBackdropClick={false}
        >
          <Weapon
            weaponType={ItemWeapon[weaponType]}
            params={`weapon&weaponType=${weaponType}`}
          />
        </Modal>
      </MobileWrapper>
      {isLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={filteredData || []}
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
              "slot",
            ],
            ["name", "specialBonus", "description"]
          )}
          title={tableTitle}
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={150}
          expandableRowsComponent={itemsExpandableRow([
            "weaponSum",
            "weaponAverage",
          ])}
          expandableRowsComponentPaddingsDisabled
          stickyColumn="first column"
          horizontalScroll="top"
          counter
        />
      )}
    </div>
  );
};
