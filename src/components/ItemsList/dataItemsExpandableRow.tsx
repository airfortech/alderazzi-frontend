import { ItemResponse } from "../../types/Item";
import { itemDurabilityRealTimes } from "../../types/ItemDurability";
import { ExpandableRowsComponent } from "../../types/Table";
import { Icon } from "../Icon/Icon";
import { TableRowDetails } from "../TableRowDetails/TableRowDetails";
import { DeleteItemCell } from "./DeleteItemCell/DeleteItemCell";
import { UpdateItemCell } from "./UpdateItemCell/UpdateItemCell";
import classes from "./ItemsList.module.css";

type ExpandableRowOption =
  | "armorAverage"
  | "armorSum"
  | "weaponAverage"
  | "weaponSum";

export const itemsExpandableRow = (
  options: ExpandableRowOption[],
  actions: boolean = true
) => {
  const expandableRow: ExpandableRowsComponent<ItemResponse> = data => {
    const {
      id,
      short,
      armorSlashingRes,
      armorPiercingRes,
      armorBluntRes,
      weaponEffectiveness,
      weaponBalance,
      weight,
      volume,
      durability,
      specialBonus,
      occurrence,
      cost,
      npcPurchasePrice,
      description,
      comment,
    } = data;
    const details = [
      {
        option: "armorSum",
        title: "Suma ochrony",
        value: armorSlashingRes + armorPiercingRes + armorBluntRes || "",
      },
      {
        option: "armorAverage",
        title: "Średnia ochrona",
        value:
          armorSlashingRes + armorPiercingRes + armorBluntRes
            ? (
                (armorSlashingRes + armorPiercingRes + armorBluntRes) /
                3
              ).toFixed(2)
            : "",
      },
      {
        option: "weaponSum",
        title: "Suma",
        value: weaponEffectiveness + weaponBalance || "",
      },
      {
        option: "weaponAverage",
        title: "Średnia",
        value: (weaponEffectiveness + weaponBalance) / 2 || "",
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
              `${durability}${itemDurabilityRealTimes[durability] && " ("}${
                durability && itemDurabilityRealTimes[durability]
              }${itemDurabilityRealTimes[durability] && ")"}`,
          },
          {
            title: "Specjalne właściwości",
            value: specialBonus,
          },
          {
            title: "Występowanie",
            value: occurrence,
          },
          {
            title: "Wartość sprzedaży",
            value: cost && (
              <span className={classes.cost}>
                {cost}
                <Icon icon="coins" color="warning" size="normal" />
              </span>
            ),
          },
          {
            title: "Cena zakupu u NPC",
            value: npcPurchasePrice && (
              <span className={classes.cost}>
                {npcPurchasePrice}
                <Icon icon="coins" color="warning" size="normal" />
              </span>
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
        actions={
          actions
            ? [
                <UpdateItemCell data={data} />,
                <DeleteItemCell id={id} short={short} />,
              ]
            : []
        }
      />
    );
  };
  return expandableRow;
};
