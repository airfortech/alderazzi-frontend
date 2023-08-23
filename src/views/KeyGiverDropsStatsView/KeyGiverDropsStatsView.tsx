import { KeyGiverDropsStatsTimeOptions } from "../../types/KeyGiverDrop";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { useSelect } from "../../components/Inputs/Select/useSelect";
import { KeyGiverDropsStatsInfo } from "../../components/KeyGiverDropsStatsInfo/KeyGiverDropsStatsInfo";
import { useKeyGiverDropsStats } from "../../hooks/useKeyGiverDropsStats";
import { MobileWrapper } from "../../components/MobileWrapper/MobileWrapper";
import { options } from "../../components/KeyGiverDropsStatsInfo/dataKeyGiverDropsStats";
import { useEffect } from "react";
import { BarChart } from "../../components/BarChart/BarChart";
import classes from "./KeyGiverDropsStatsView.module.css";
import { BarDatum } from "@nivo/bar";

dayjs.extend(timezone);

export const KeyGiverDropsStatsView = () => {
  const { value, Select } = useSelect(KeyGiverDropsStatsTimeOptions.last10days);
  const { keyGiverDropsStats, isKeyGiverDropsStatsLoading } =
    useKeyGiverDropsStats(
      value as KeyGiverDropsStatsTimeOptions,
      dayjs.tz.guess()
    );

  useEffect(() => {
    console.table(keyGiverDropsStats);
  }, [keyGiverDropsStats]);

  return (
    <div className={classes.KeyGiverDropsStatsView}>
      <MobileWrapper>
        <Select
          placeholder="Wyświetl statystyki dropów za:"
          options={options}
          icon="calendar"
          className={classes.select}
        />
      </MobileWrapper>
      {keyGiverDropsStats && (
        <>
          <KeyGiverDropsStatsInfo keyGiverDropsStats={keyGiverDropsStats} />
          <BarChart
            keyGiverDropsStats={keyGiverDropsStats as unknown as BarDatum[]}
            left={110}
          />
        </>
      )}
    </div>
  );
};
