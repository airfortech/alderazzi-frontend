import { Align } from "../../types/Table";
import clsx from "clsx";
import classes from "./Table.module.css";

export const headerScrollClasses = (horizontalScroll: "top" | "bottom") => {
  return clsx(
    classes.headerScroll,
    horizontalScroll === "bottom" && classes.scrollHidden
  );
};

export const tableBodyWrapperClasses = (horizontalScroll: "top" | "bottom") => {
  return clsx(
    classes.tableBodyWrapper,
    classes.scrollBottom,
    horizontalScroll === "top" && classes.scrollHidden
  );
};

export const thead = (
  isFilterable: boolean,
  parent: "tableBody" | "tableHeader"
) => {
  return clsx(
    classes.thead,
    parent === "tableHeader" && classes.theadTableHeader,
    parent === "tableBody" && classes.theadTableBody
  );
};

export const theadTrThSwitcher = (
  stickyColumn: "switcher" | "first column" | "none"
) => {
  return clsx(
    classes.theadTrThSwitcher,
    classes.cursorPointer,
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

export const thClasses = (align: Align, isSortable: boolean) => {
  return clsx(classes["align-" + align], isSortable && classes.cursorPointer);
};

export const thSpanClasses = (align: Align, isActive: boolean) => {
  return clsx(
    align === "right" && classes.spanLeft,
    isActive && classes.activeSort
  );
};

export const bodyTr = (index: number) => {
  return clsx(
    index % 2 === 1 && classes.tbodyTrEven,
    index % 2 === 0 && classes.tbodyTrOdd
  );
};

export const bodyTrExpandTrigger = (
  index: number,
  stickyColumn: "switcher" | "first column" | "none"
) => {
  return clsx(
    classes.cursorPointer,
    classes.tbodyTrTdSwitcher,
    index % 2 === 1 && stickyColumn !== "none" && classes.tbodyTrTdEvenSticky,
    index % 2 === 0 && stickyColumn !== "none" && classes.tbodyTrTdOddSticky,
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
      classes.tbodyTrTdEvenSticky,
    index % 2 === 0 &&
      tdIndex === 0 &&
      stickyColumn === "first column" &&
      classes.tbodyTrTdOddSticky,
    classes["align-" + align],
    isOnRowClickActive && hasOnClickFunction && classes.cursorPointer
  );
};

export const bodyTrExpandableRow = (
  index: number,
  stickyColumn: "switcher" | "first column" | "none"
) => {
  return clsx(
    classes.tbodyTrExpandableRow,
    index % 2 === 1 && classes.tbodyTrTdEven,
    index % 2 === 0 && classes.tbodyTrTdOdd,
    index % 2 === 1 && stickyColumn !== "none" && classes.tbodyTrTdEvenSticky,
    index % 2 === 0 && stickyColumn !== "none" && classes.tbodyTrTdOddSticky
  );
};

export const tbodyTrExpandableRowContentWrapper = (isTransitionOn: boolean) => {
  return clsx(
    classes.tbodyTrExpandableRowContentWrapper,
    isTransitionOn && classes.tbodyTrExpandableRowContentWrapperTransition
  );
};
