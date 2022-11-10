import { ReactNode } from "react";

export type Order = "asc" | "desc";

export interface SortOption<T> {
  field: keyof T;
  order: Order;
}

export interface Row {
  id: string;
  name?: string;
}

export interface ITable<T> {
  columns: Columns<T>;
  // todo: values of keys should be string or number
  data: T[];
  title?: string;
  linkToId?: string;
  isFilterable?: boolean;
  initialSorting?: {
    field: keyof T;
    order: Order;
  };
}

export type Align = "left" | "right" | "center";

export interface Column<T> {
  selector: keyof T;
  header?: string;
  isVisible?: boolean;
  align?: Align;
  isSortable?: boolean;
  isFilterable?: boolean;
  cell?: (value: string | number) => string | number | ReactNode;
  sortFunc?: SortFunc;
}

export type Columns<T> = Column<T>[];

export type SortFunc = (
  aField: string | number,
  bField: string | number,
  order: Order
) => 1 | -1 | 0;
