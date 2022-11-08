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

export interface Table<T> {
  columns: Columns<T>;
  // todo: values of keys should be string or number
  data: T[];
  linkToId?: string;
}

export type Align = "left" | "right" | "center";

export interface Column<T> {
  selector: keyof T;
  header?: string;
  isVisible?: boolean;
  align?: Align;
  isSortable?: boolean;
  cell?: (value: string | number) => string | number | ReactNode;
}

export type Columns<T> = Column<T>[];

export type SortFunc = (
  rowA: any,
  rowB: any,
  field: string,
  desc: Order
) => 1 | -1 | 0;
