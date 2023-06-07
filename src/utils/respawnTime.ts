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
  if (Math.abs(diff) < 48) obj.date = Math.abs(diff) + " godzin";
  else obj.date = Math.abs(nextTime.diff(now, "day")) + " dni";
  diff > 0
    ? (obj = { ...obj, type: "error", date: "za " + obj.date })
    : (obj = { ...obj, type: "success", date: obj.date + " temu" });
  return obj;
};
