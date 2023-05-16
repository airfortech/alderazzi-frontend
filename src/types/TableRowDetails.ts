export interface ITableRowDetails {
  details?: { title: string; value: string | number }[];
  longDetails?: { title: string; value: string | number }[];
  actions?: [JSX.Element | false];
}
