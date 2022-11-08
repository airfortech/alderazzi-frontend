import { Order, SortOption } from "../../types/Table";

const defaultSort = (
  aField: string | number,
  bField: string | number,
  order: Order
) => {
  if (aField === null) return 1;
  if (bField === null) return -1;
  if (aField === null && bField === null) return 0;
  return (
    aField.toString().localeCompare(bField.toString(), "en", {
      numeric: true,
    }) * (order === "asc" ? 1 : -1)
  );
};

export const tableSortFunc = <T>(data: T[], sortOption: SortOption<T>): T[] => {
  const { field, order } = sortOption;
  return [...data].sort((a, b) => {
    const aField = a[field] as string | number;
    const bField = b[field] as string | number;
    return defaultSort(aField, bField, order);
  });
};
