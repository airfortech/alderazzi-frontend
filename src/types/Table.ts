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
  // FIXME: value should be type of selected value from T
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
  color?: string;
  bold?: boolean;
  cell?: CellFunc<T>;
  sortFunc?: SortFunc;
}

export type Columns<T> = Column<T>[];

export interface ITable<T> {
  columns: Columns<T>;
  data: Array<T>;
  title?: string;
  titleTag?: TagName;
  initialSorting?: {
    field: keyof T;
    order: Order;
  };
  horizontalScroll?: "top" | "bottom";
  stickyColumn?: "switcher" | "first column" | "none";
  stickyHeaderPosition?: number;
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
  expandableRowsComponentPaddingsDisabled?: boolean;
  initialExpandableRowsState?: "hidden" | "visible";
  counter?: boolean;
  style?: CSSProperties;
}

export interface ITableRender<T> extends Omit<ITable<T>, "data"> {
  titleTag: TagName;
  horizontalScroll: "top" | "bottom";
  stickyColumn: "switcher" | "first column" | "none";
  expandableRowsComponentPaddingsDisabled: boolean;

  bodyData: T[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  filteringSelectors: Array<keyof T>;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
  colSpan: number;
  initialExpandableRowsState: "hidden" | "visible";
}

export interface ITableHeader<T>
  extends Omit<
    ITableRender<T>,
    | "columns"
    | "horizontalScroll"
    | "stickyColumn"
    | "bodyData"
    | "sortOption"
    | "handleSort"
    | "colSpan"
    | "style"
    | "expandableRowsComponent"
    | "expandableRowsComponentPaddingsDisabled"
    | "initialExpandableRowsState"
    | "initialSorting"
    | "onRowClick"
    | "stickyHeaderPosition"
  > {
  title: string | undefined;
  dataCount: number | false;
}

export interface IFilter<T>
  extends Omit<
    ITableHeader<T>,
    "title" | "titleTag" | "filteringSelectors" | "dataCount" | "counter"
  > {}

export interface ITableHead<T>
  extends Omit<
    ITableRender<T>,
    | "title"
    | "filter"
    | "setFilter"
    | "titleTag"
    | "horizontalScroll"
    | "bodyData"
    | "colSpan"
    | "style"
    | "initialExpandableRowsState"
    | "initialSorting"
    | "onRowClick"
    | "stickyHeaderPosition"
    | "expandableRowsComponentPaddingsDisabled"
    | "counter"
  > {
  isAllExpanded: boolean;
  handleAllExpandTrigger: () => void;
  parent: "tableBody" | "tableHeader";
  theadRef: React.LegacyRef<HTMLTableSectionElement>;
}

export interface ITableBody<T>
  extends Omit<
    ITableRender<T>,
    | "titleTag"
    | "horizontalScroll"
    | "colSpan"
    | "style"
    | "expandableRowsComponent"
    | "initialSorting"
    | "sortOption"
    | "handleSort"
    | "setFilter"
    | "onRowClick"
    | "stickyHeaderPosition"
    | "filter"
    | "filteringSelectors"
    | "counter"
  > {
  colSpan: number;
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
  isAllExpanded: boolean;
}

export interface ITableRow<T>
  extends Omit<
    ITableBody<T>,
    "titleTag" | "bodyData" | "filteringSelectors" | "filter"
  > {
  row: T;
  index: number;
  isAllExpanded: boolean;
}
