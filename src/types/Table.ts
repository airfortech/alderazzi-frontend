import { Dispatch, ReactElement, SetStateAction } from "react";

export type Order = "asc" | "desc";

export type Align = "left" | "right" | "center";

export interface SortOption<T> {
  field: keyof T;
  order: Order;
}

export interface Row {
  id: string;
  // TODO: check if you can limit key to types provided below
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
  cell?: CellFunc<T>;
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
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
}

export interface ITableRender<T> {
  bodyData: T[];
  columns: Columns<T>;
  title?: string;
  isFilterable: boolean;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  filteringSelectors: Array<keyof T>;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
  colSpan: number;
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
}

export type SortFunc = (
  aField: string | number,
  bField: string | number,
  order: Order
) => 1 | -1 | 0;

export type CellFunc<T> = (
  value: string | number,
  props: T
) => string | number | ReactElement;

export type OnRowClickFunc<T> = (props: T) => void;

export type ExpandableRowsComponent<T> = (props: T) => ReactElement;
