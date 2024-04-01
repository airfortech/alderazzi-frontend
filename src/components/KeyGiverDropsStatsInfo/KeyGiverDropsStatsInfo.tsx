import { KeyGiverDropsStats } from "../../types/KeyGiverDrop";
import { List } from "../List/List";
import classes from "./KeyGiverDropsStatsInfo.module.css";

interface Props {
  keyGiverDropsStats: KeyGiverDropsStats[];
}

export const KeyGiverDropsStatsInfo = ({ keyGiverDropsStats }: Props) => {
  const {
    keyGiversDone,
    keys,
    magicDrops,
    keyGiversWithMagicDrops,
    keyGiversWithAnyDrops,
  } = keyGiverDropsStats.reduce(
    (sum, item) => {
      sum.keyGiversDone += item.keyGiversDone;
      sum.keys += item.keys;
      sum.magicDrops += item.magicDrops;
      sum.keyGiversWithMagicDrops += item.keyGiversWithMagicDrops;
      sum.keyGiversWithAnyDrops += item.keyGiversWithAnyDrops;
      return sum;
    },
    {
      keyGiversDone: 0,
      keys: 0,
      magicDrops: 0,
      keyGiversWithMagicDrops: 0,
      keyGiversWithAnyDrops: 0,
    }
  );
  const keysDropRate = Math.round((keys / keyGiversDone) * 100) || 0;
  const magicDropsRate =
    Math.round((keyGiversWithMagicDrops / keyGiversDone) * 100) || 0;
  const keyGiversWithAnyDropsRate =
    Math.round((keyGiversWithAnyDrops / keyGiversDone) * 100) || 0;

  return (
    <div className={classes.KeyGiverDropsStatsInfo}>
      <List
        title="Statystyki dropów"
        titleTag="h2"
        items={[
          { value: `Zdobyci klucznicy: ${keyGiversDone}`, color: "info" },
          {
            value: `Klucznicy z jakimkolwiek dropem: ${keyGiversWithAnyDrops}`,
            color: "danger",
          },
          { value: `Pozyskane klucze: ${keys}`, color: "success" },
          {
            value: `Pozyskane magiki: ${magicDrops}`,
            color: "warning",
          },
          { value: `Klucznicy z kluczem: ${keysDropRate}%`, color: "primary" },
          {
            value: `Klucznicy z magikami: ${magicDropsRate}%`,
            color: "primary",
          },
          {
            value: `Klucznicy z jakimikolwiek dropem: ${keyGiversWithAnyDropsRate}%`,
            color: "primary",
          },
        ]}
      />
    </div>
  );
};
