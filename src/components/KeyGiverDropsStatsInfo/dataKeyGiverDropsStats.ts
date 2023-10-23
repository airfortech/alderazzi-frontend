import { KeyGiverDropsStatsTimeOptions } from "../../types/KeyGiverDrop";

export const options: { value: string; label: string }[] = [
  {
    label: "obecny tydzień",
    value: KeyGiverDropsStatsTimeOptions.currentWeek,
  },
  {
    label: "ostatnie 5 dni",
    value: KeyGiverDropsStatsTimeOptions.last5days,
  },
  {
    label: "ostatnie 10 dni",
    value: KeyGiverDropsStatsTimeOptions.last10days,
  },
  {
    label: "ostatnie 30 dni",
    value: KeyGiverDropsStatsTimeOptions.last30days,
  },
  {
    label: "obecny miesiąc",
    value: KeyGiverDropsStatsTimeOptions.currentMonth,
  },
  {
    label: "ostatnie 2 miesiące",
    value: KeyGiverDropsStatsTimeOptions.last2months,
  },
  {
    label: "ostatnie 6 miesięcy",
    value: KeyGiverDropsStatsTimeOptions.last6months,
  },
  {
    label: "obecny rok",
    value: KeyGiverDropsStatsTimeOptions.currentYear,
  },
  {
    label: "ostatnie 12 miesięcy",
    value: KeyGiverDropsStatsTimeOptions.last12months,
  },
  {
    label: "cały okres",
    value: KeyGiverDropsStatsTimeOptions.alltime,
  },
];
