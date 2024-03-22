import { useItems } from "../../hooks/useItems";
import { Button } from "../Button/Button";
import { useSelect } from "../Inputs/Select/useSelect";
import { Loader } from "../Loader/Loader";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { Table } from "../Table/Table";
import { columns, expandableRow, options } from "./dataItemsWeaponsList";
import classes from "./ItemsWeaponsList.module.css";

export const ItemsWeaponsList = () => {
  const { value, Select } = useSelect("weapon&weaponType=sword&isMagic=true");
  const { data: weapons, isLoading } = useItems(value);

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
            // icon="sword"
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
          columns={columns}
          title="Miecze"
          titleTag="h2"
          initialSorting={{ field: "short", order: "asc" }}
          stickyHeaderPosition={150}
          expandableRowsComponent={expandableRow}
          expandableRowsComponentPaddingsDisabled
          horizontalScroll="top"
        />
      )}
    </div>
  );
};
