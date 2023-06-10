import dayjs from "dayjs";
import "dayjs/locale/pl";
import { config } from "../config/config";

export const formatDate = (time: number | null, nullValue: string = "") => {
  return time === null
    ? nullValue
    : dayjs.unix(time).locale(config.lang).format("D MMMM YYYY / HH:mm");
};

export const monthsToString = (months: number) => {
  const digitsArray = [...String(months)].map(Number);
  return digitsArray[digitsArray.length - 1] > 1 &&
    digitsArray[digitsArray.length - 1] < 5
    ? months + " miesiące"
    : months + " miesięcy";
};
