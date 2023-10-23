import { QueryKey } from "../types/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { getKeyGiverDropsStats } from "../api/keyGiverDrops";
import { config } from "../config/config";
import { KeyGiverDropsStatsTimeOptions } from "../types/KeyGiverDrop";

export const useKeyGiverDropsStats = (
  time: KeyGiverDropsStatsTimeOptions,
  timezone: string
) => {
  const {
    data: keyGiverDropsStats,
    isError: isKeyGiverDropsStatsError,
    isLoading: isKeyGiverDropsStatsLoading,
  } = useQuery(
    [QueryKey.keyGiverDropsStats, time, timezone],
    () => getKeyGiverDropsStats(time, timezone),
    {
      select: data => data.data.keyGiverDropsStats,
      refetchInterval: 1000 * 60 * config.keyGiverDropsRefetchIntervalInMinutes,
    }
  );

  return {
    keyGiverDropsStats,
    isKeyGiverDropsStatsError,
    isKeyGiverDropsStatsLoading,
  };
};
