import { CSSProperties } from "react";
import { Icon, IconColor } from "./Icons";
import { Align, TagName } from "./Table";

export interface ListItem {
  icon?: Icon;
  iconColor?: IconColor;
  value: string | JSX.Element;
  color?: IconColor;
  onRowClick?: () => void;
}

export type ListItems = ListItem[];

export interface IList {
  items: ListItems;
  title?: string;
  titleAlign?: Align;
  titleTag?: TagName;
  stickyHeaderPosition?: number;
  noPaddings?: boolean;
  style?: CSSProperties;
}
