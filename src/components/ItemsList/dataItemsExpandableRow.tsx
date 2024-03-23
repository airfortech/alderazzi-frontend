import { ApiResponse } from "../../types/responseMessages";
import { ItemResponse } from "../../types/Item";
import { itemDurabilityRealTimes } from "../../types/ItemDurability";
import { ExpandableRowsComponent } from "../../types/Table";
import { UseMutationResult } from "@tanstack/react-query";
import { Icon } from "../Icon/Icon";
import { TableRowDetails } from "../TableRowDetails/TableRowDetails";
import { DeleteItemCell } from "./DeleteItemCell/DeleteItemCell";
import classes from "./ItemsList.module.css";

type ExpandableRowOption = "weaponSum" | "weaponAverage";

export const itemsExpandableRow = (
  options: ExpandableRowOption[],
  deleteItemMutation?: UseMutationResult<ApiResponse, unknown, string, unknown>
) => {
  const expandableRow: ExpandableRowsComponent<ItemResponse> = data => {
    const {
      id,
      short,
      weaponEffectiveness,
      weaponBalance,
      weight,
      volume,
      durability,
      specialBonus,
      occurrence,
      cost,
      description,
      comment,
    } = data;
    const details = [
      {
        option: "weaponSum",
        title: "Suma",
        value: weaponEffectiveness + weaponBalance,
      },
      {
        option: "weaponAverage",
        title: "Średnia",
        value: (weaponEffectiveness + weaponBalance) / 2,
      },
    ]
      .filter(({ option }) => options.includes(option as ExpandableRowOption))
      .map(({ option, ...rest }) => rest);
    return (
      <TableRowDetails
        details={[
          ...details,
          {
            title: "Waga [g]",
            value: weight?.toLocaleString("pl"),
          },
          {
            title: "Objętość [ml]",
            value: volume?.toLocaleString("pl"),
          },
          {
            title: "Trwałość",
            value:
              durability &&
              `${durability} (${
                durability && itemDurabilityRealTimes[durability]
              })`,
          },
          {
            title: "Specjalny bonus",
            value: specialBonus,
          },
          {
            title: "Występowanie",
            value: occurrence,
          },
          {
            title: "Wartość sprzedaży",
            value: (
              <p className={classes.cost}>
                {cost}
                <Icon icon="coins" color="warning" size="normal" />
              </p>
            ),
          },
        ]}
        longDetails={[
          {
            title: "Opis",
            value: description,
          },
          {
            title: "Komentarz",
            value: comment,
          },
        ]}
        actions={[
          //  <UpdateEnemyCell id={id} />,
          <DeleteItemCell
            id={id}
            short={short}
            deleteItemMutation={deleteItemMutation}
          />,
        ]}
      />
    );
  };
  return expandableRow;
};
