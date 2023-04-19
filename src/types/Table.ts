import { ReactElement } from "react";

export type Order = "asc" | "desc";

export type Align = "left" | "right" | "center";

export interface SortOption<T> {
  field: keyof T;
  order: Order;
}

export interface Row {
  id: string;
  // [key: string]: string | number | undefined;
}

export interface Column<T> {
  selector: keyof T;
  header?: string;
  isVisible?: boolean;
  align?: Align;
  isSortable?: boolean;
  isFilterable?: boolean;
  isOnRowClickActive?: boolean;
  cell?: CellFunc;
  sortFunc?: SortFunc;
}

export type Columns<T> = Column<T>[];

export interface ITable<T> {
  columns: Columns<T>;
  data: Array<T>;
  title?: string;
  isFilterable?: boolean;
  initialSorting?: {
    field: keyof T;
    order: Order;
  };
  onRowClick?: OnRowClickFunc;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
}

export type SortFunc = (
  aField: string | number,
  bField: string | number,
  order: Order
) => 1 | -1 | 0;

export type CellFunc = (
  value: string | number
) => string | number | ReactElement;

export type OnRowClickFunc = (id: string) => void;

export type ExpandableRowsComponent<T> = (props: T) => ReactElement;
