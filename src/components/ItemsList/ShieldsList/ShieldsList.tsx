import { useEffect, useState } from "react";
import { useItems } from "../../../hooks/useItems";
import { useSelect } from "../../Inputs/Select/useSelect";
import { Modal } from "../../Modal/Modal";
import { Table } from "../../Table/Table";
import { Button } from "../../Button/Button";
import { Loader } from "../../Loader/Loader";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
import { Shield } from "../AddItem/Shield/Shield";
import { shieldsOptions } from "./dataShieldsList";
import { itemColumns } from "../dataItemColumnsList";
import { itemsExpandableRow } from "../dataItemsExpandableRow";
import classes from "../ItemsList.module.css";

export const ShieldsList = () => {
  const { value, Select } = useSelect(shieldsOptions[0].value);
  const { data, isLoading } = useItems("shield");
  const [openAddItem, setOpenAddItem] = useState(false);

  const filteredData = data?.filter(item => {
    const searchObject = shieldsOptions.find(
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
            placeholder="Rodzaj tarcz:"
            options={shieldsOptions}
            icon="shield"
            className={classes.select}
          />
          <Button
            variant="contained"
            color="info"
            onClick={() => setOpenAddItem(true)}
          >
            Dodaj tarczę
          </Button>
        </div>
        <Modal
          title="Dodaj tarczę:"
          open={openAddItem}
          onClose={() => setOpenAddItem(false)}
          closeOnBackdropClick={false}
        >
          <Shield />
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
              "shieldParry",
              "slot",
            ],
            ["name", "specialBonus", "description"]
          )}
          title="Tarcze"
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
