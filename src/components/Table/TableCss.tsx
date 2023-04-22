import { Align } from "../../types/Table";
import clsx from "clsx";
import classes from "./Table.module.css";

export const theadTrThSwitcher = (
  stickyColumn: "switcher" | "first column" | "none"
) => {
  return clsx(
    classes.theadTrThSwitcher,
    stickyColumn !== "none" && classes.stickyTrigger
  );
};

export const theadTrTh = (
  index: number,
  stickyColumn: "switcher" | "first column" | "none"
) => {
  return clsx(
    index === 0 && stickyColumn === "first column" && classes.stickyFirstColumn
  );
};

export const bodyTr = (index: number) => {
  return clsx(
    index % 2 === 1 && classes.bodyTrEven,
    index % 2 === 0 && classes.bodyTrOdd
  );
};

export const bodyTrExpandTrigger = (
  index: number,
  stickyColumn: "switcher" | "first column" | "none"
) => {
  return clsx(
    classes.cursorPointer,
    classes.bodyTrTdSwitcher,
    index % 2 === 1 && stickyColumn !== "none" && classes.bodyTrTdEvenSticky,
    index % 2 === 0 && stickyColumn !== "none" && classes.bodyTrTdOddSticky,
    stickyColumn !== "none" && classes.stickyTrigger
  );
};

export const bodyTrTd = (
  index: number,
  tdIndex: number,
  align: Align,
  isOnRowClickActive: boolean,
  stickyColumn: "switcher" | "first column" | "none",
  hasOnClickFunction: boolean
) => {
  return clsx(
    index % 2 === 1 &&
      tdIndex === 0 &&
      stickyColumn === "first column" &&
      classes.bodyTrTdEvenSticky,
    index % 2 === 0 &&
      tdIndex === 0 &&
      stickyColumn === "first column" &&
      classes.bodyTrTdOddSticky,
    classes["align-" + align],
    isOnRowClickActive && hasOnClickFunction && classes.cursorPointer
  );
};

export const bodyTrExpandableRow = (
  index: number,
  stickyColumn: "switcher" | "first column" | "none"
) => {
  return clsx(
    classes.bodyTrExpandableRow,
    index % 2 === 1 && classes.bodyTrTdEven,
    index % 2 === 0 && classes.bodyTrTdOdd,
    index % 2 === 1 && stickyColumn !== "none" && classes.bodyTrTdEvenSticky,
    index % 2 === 0 && stickyColumn !== "none" && classes.bodyTrTdOddSticky
  );
};
