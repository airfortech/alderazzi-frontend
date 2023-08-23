import { KeyGiverDropsStats } from "../../types/KeyGiverDrop";
import { List } from "../List/List";
import classes from "./KeyGiverDropsStatsInfo.module.css";

interface Props {
  keyGiverDropsStats: KeyGiverDropsStats[];
}

export const KeyGiverDropsStatsInfo = ({ keyGiverDropsStats }: Props) => {
  const { keyGiversDone, drops } = keyGiverDropsStats.reduce(
    (sum, item) => {
      sum.keyGiversDone += item.keyGiversDone;
      sum.drops += item.drops;
      return sum;
    },
    { keyGiversDone: 0, drops: 0 }
  );
  const dropRate = Math.round((drops / keyGiversDone) * 100);

  return (
    <div className={classes.KeyGiverDropsStatsInfo}>
      <List
        title="Statystyki dropów"
        titleTag="h2"
        items={[
          { value: `Zdobyci klucznicy: ${keyGiversDone}`, color: "info" },
          { value: `Pozyskane Dropy: ${drops}`, color: "success" },
          { value: `Klucznicy z dropem: ${dropRate}%`, color: "warning" },
        ]}
      />
    </div>
  );
};
