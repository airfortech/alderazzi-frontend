import { ArmorsListOption } from "../../../types/ItemsList";
import { ItemArmorClass } from "../../../types/ItemArmorClass";
import { useEffect, useState } from "react";
import { useItems } from "../../../hooks/useItems";
import { useSelect } from "../../Inputs/Select/useSelect";
import { Modal } from "../../Modal/Modal";
import { Armor } from "../AddItem/Armor/Armor";
import { Table } from "../../Table/Table";
import { Button } from "../../Button/Button";
import { Loader } from "../../Loader/Loader";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
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
  const { value, Select } = useSelect(armorsOptions[0].value);
  const { data, isLoading } = useItems(`armor&armorClass=${armorClass}`);
  const [openAddItem, setOpenAddItem] = useState(false);

  const filteredData = data?.filter(item => {
    const searchObject = armorsOptions.find(
      option => option.value === value
    )?.searchOptions;
    const isMagic = searchObject?.isMagic;
    if (isMagic) return item.isMagic === true;
    if (isMagic === false) return item.isMagic !== true;
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
            options={armorsOptions}
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
          <Armor
            armorClass={ItemArmorClass[armorClass]}
            params={`armor&armorClass=${armorClass}`}
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
          expandableRowsComponent={itemsExpandableRow([
            "armorSum",
            "armorAverage",
          ])}
          expandableRowsComponentPaddingsDisabled
          stickyColumn="first column"
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
