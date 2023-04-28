import { CSSProperties, Dispatch, ReactElement, SetStateAction } from "react";

export type Order = "asc" | "desc";

export type Align = "left" | "right" | "center";

export type TagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface SortOption<T> {
  field: keyof T;
  order: Order;
}

export type Row = {
  id: string;
  // TODO: check if you can limit key to types provided below
  // [key: string]: string | number | undefined;
};

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
  titleTag?: TagName;
  isFilterable?: boolean;
  initialSorting?: {
    field: keyof T;
    order: Order;
  };
  horizontalScroll?: "top" | "bottom";
  stickyColumn?: "switcher" | "first column" | "none";
  stickyHeaderPosition?: number;
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
  initialExpandableRowsState?: "hidden" | "visible";
  style?: CSSProperties;
}

export interface ITableRender<T> extends Omit<ITable<T>, "data"> {
  titleTag: TagName;
  isFilterable: boolean;
  horizontalScroll: "top" | "bottom";
  stickyColumn: "switcher" | "first column" | "none";

  bodyData: T[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  filteringSelectors: Array<keyof T>;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
  colSpan: number;
}

export interface ITableHeader<T>
  extends Omit<
    ITableRender<T>,
    | "columns"
    | "horizontalScroll"
    | "stickyColumn"
    | "bodyData"
    | "filteringSelectors"
    | "sortOption"
    | "handleSort"
    | "colSpan"
    | "style"
    | "expandableRowsComponent"
    | "initialExpandableRowsState"
    | "initialSorting"
    | "onRowClick"
    | "stickyHeaderPosition"
  > {
  title: string | undefined;
}

export interface IFilter<T>
  extends Omit<ITableHeader<T>, "title" | "titleTag" | "isFilterable"> {}

export interface ITableHead<T>
  extends Omit<
    ITableRender<T>,
    | "filter"
    | "setFilter"
    | "titleTag"
    | "horizontalScroll"
    | "bodyData"
    | "filteringSelectors"
    | "colSpan"
    | "style"
    | "initialExpandableRowsState"
    | "initialSorting"
    | "onRowClick"
    | "stickyHeaderPosition"
  > {
  isAllExpanded: boolean;
  handleAllExpandTrigger: () => void;
}

export interface ITableBody<T>
  extends Omit<
    ITableRender<T>,
    | "titleTag"
    | "horizontalScroll"
    | "colSpan"
    | "style"
    | "expandableRowsComponent"
    | "initialExpandableRowsState"
    | "initialSorting"
    | "sortOption"
    | "handleSort"
    | "isFilterable"
    | "setFilter"
    | "onRowClick"
    | "stickyHeaderPosition"
  > {
  colSpan: number;
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
  isAllExpanded: boolean;
}

export type ITableRow<T> = Omit<
  ITableBody<T>,
  "titleTag" | "bodyData" | "filteringSelectors" | "filter"
> & {
  row: T;
  index: number;
};
