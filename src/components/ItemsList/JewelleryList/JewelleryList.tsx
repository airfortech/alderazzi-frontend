import { useEffect, useState } from "react";
import { useItems } from "../../../hooks/useItems";
import { useSelect } from "../../Inputs/Select/useSelect";
import { Modal } from "../../Modal/Modal";
import { Table } from "../../Table/Table";
import { Button } from "../../Button/Button";
import { Loader } from "../../Loader/Loader";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
import { Jewellery } from "../AddItem/Jewellery/Jewellery";
import { othersOptions } from "./dataJewelleryList";
import { itemColumns } from "../dataItemColumnsList";
import { itemsExpandableRow } from "../dataItemsExpandableRow";
import classes from "../ItemsList.module.css";

export const JewelleryList = () => {
  const { value, Select } = useSelect(othersOptions[0].value);
  const { data, isLoading } = useItems("jewellery");
  const [openAddItem, setOpenAddItem] = useState(false);

  const filteredData = data?.filter(item => {
    const searchObject = othersOptions.find(
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
            placeholder="Rodzaj biżuterii:"
            options={othersOptions}
            icon="gem2"
            className={classes.select}
          />
          <Button
            variant="contained"
            color="info"
            onClick={() => setOpenAddItem(true)}
          >
            Dodaj biżuterię
          </Button>
        </div>
        <Modal
          title="Dodaj biżuterię:"
          open={openAddItem}
          onClose={() => setOpenAddItem(false)}
          closeOnBackdropClick={false}
        >
          <Jewellery />
        </Modal>
      </MobileWrapper>
      {isLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={filteredData || []}
          columns={itemColumns(
            ["short", "specialBonus", "vendorCost", "slot"],
            ["name", "description"]
          )}
          title="Biżuteria"
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={150}
          expandableRowsComponent={itemsExpandableRow([])}
          expandableRowsComponentPaddingsDisabled
          stickyColumn="first column"
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
