import dayjs from "dayjs";

export const respawnTime = (time: number) => {
  let obj = { type: "info" } as {
    type: "info" | "error" | "success";
    date: string;
  };
  if (!time) return { ...obj, date: "b/d" };
  const now = dayjs();
  const nextTime = dayjs.unix(time);
  const diff = nextTime.diff(now, "hour");
  const minDiff = nextTime.diff(now, "minute");
  if (Math.abs(diff) < 2) obj.date = Math.abs(minDiff) + " minut";
  else if (Math.abs(diff) < 48) obj.date = Math.abs(diff) + " godzin";
  else obj.date = Math.abs(nextTime.diff(now, "day")) + " dni";
  minDiff > 0
    ? (obj = { ...obj, type: "error", date: "za " + obj.date })
    : (obj = { ...obj, type: "success", date: obj.date + " temu" });
  return obj;
};
