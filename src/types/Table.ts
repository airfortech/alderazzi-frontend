import { CSSProperties, Dispatch, ReactElement, SetStateAction } from "react";

export type Order = "asc" | "desc";

export type Align = "left" | "right" | "center";

export type TagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface SortOption<T> {
  field: keyof T;
  order: Order;
}

export interface Row {
  id: string;
  // TODO: check if you can limit key to types provided below
  // [key: string]: string | number | undefined;
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

export interface ITableRender<T> {
  bodyData: T[];
  columns: Columns<T>;
  title?: string;
  titleTag: TagName;
  isFilterable: boolean;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  filteringSelectors: Array<keyof T>;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
  colSpan: number;
  horizontalScroll: "top" | "bottom";
  stickyColumn: "switcher" | "first column" | "none";
  stickyHeaderPosition?: number;
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T>;
  initialExpandableRowsState?: "hidden" | "visible";
  style?: CSSProperties;
}

export interface ITableHeader {
  title: string | undefined;
  titleTag: TagName;
  isFilterable: boolean;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  scrollTopRef: React.RefObject<HTMLDivElement>;
  tableHeaderRef: React.RefObject<HTMLElement>;
  horizontalScroll: "top" | "bottom";
  stickyHeaderPosition?: number;
}

export interface IFilter {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export interface ITableHead<T> {
  columns: Columns<T>;
  sortOption: SortOption<T> | undefined;
  handleSort: (selector: string, sortFunc: SortFunc | undefined) => void;
  stickyColumn: "switcher" | "first column" | "none";
  expandableRowsComponent?: ExpandableRowsComponent<T>;
  theadRef: React.RefObject<HTMLTableSectionElement>;
  isAllExpanded: boolean;
  handleAllExpandTrigger: () => void;
}

export interface ITableBody<T> {
  bodyData: T[];
  columns: Columns<T>;
  filter: string;
  filteringSelectors: Array<keyof T>;
  colSpan: number;
  onRowClick?: OnRowClickFunc<T>;
  stickyColumn: "switcher" | "first column" | "none";
  expandableRowsComponent?: ExpandableRowsComponent<T>;
  isAllExpanded: boolean;
}

export interface ITableRow<T> {
  columns: Columns<T>;
  row: T;
  colSpan: number;
  index: number;
  stickyColumn: "switcher" | "first column" | "none";
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T> | undefined;
  isAllExpanded: boolean;
}
