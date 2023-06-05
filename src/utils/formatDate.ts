import dayjs from "dayjs";
import "dayjs/locale/pl";
import { config } from "../config/config";

export const formatDate = (time: number | null, nullValue: string = "") => {
  return time === null
    ? nullValue
    : dayjs.unix(time).locale(config.lang).format("D MMMM YYYY / HH:mm");
};
