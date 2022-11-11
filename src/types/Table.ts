import { ReactElement } from "react";

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
  data: Array<T>;
  title?: string;
  linkToId?: string;
  isFilterable?: boolean;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
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
  cell?: CellFunc;
  sortFunc?: SortFunc;
}

export type Columns<T> = Column<T>[];

export type SortFunc = (
  aField: string | number,
  bField: string | number,
  order: Order
) => 1 | -1 | 0;

export type CellFunc = (
  value: string | number
) => string | number | ReactElement;

export type ExpandableRowsComponent<T> = (props: T) => ReactElement;
