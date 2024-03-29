import { OthersListOption } from "../../../types/ItemsList";
import { useEffect, useState } from "react";
import { useItems } from "../../../hooks/useItems";
import { useSelect } from "../../Inputs/Select/useSelect";
import { Modal } from "../../Modal/Modal";
import { Other } from "../AddItem/Other/Other";
import { Table } from "../../Table/Table";
import { Button } from "../../Button/Button";
import { Loader } from "../../Loader/Loader";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
import { othersOptions } from "./dataOthersList";
import { itemColumns } from "../dataItemColumnsList";
import { itemsExpandableRow } from "../dataItemsExpandableRow";
import classes from "../ItemsList.module.css";

export const OthersList = ({
  selectPlaceholder,
  icon,
  buttonLabel,
  tableTitle,
  type,
  endpoint,
  defaultOption = 0,
}: OthersListOption) => {
  const { value, Select } = useSelect(othersOptions[defaultOption].value);
  const { data, isLoading } = useItems(endpoint);
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
            placeholder={selectPlaceholder}
            options={othersOptions}
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
          <Other endpoint={endpoint} />
        </Modal>
      </MobileWrapper>
      {isLoading ? (
        <Loader isLoading />
      ) : (
        <Table
          data={filteredData || []}
          columns={itemColumns(
            ["short", "specialBonus", "vendorCost"],
            ["name", "description"]
          )}
          title={tableTitle}
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
