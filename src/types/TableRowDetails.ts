export interface ITableRowDetails {
  details?: { title: string; value: string | number }[];
  longDetails?: { title: string; value: string | number | JSX.Element }[];
  actions?: (JSX.Element | false)[];
}
