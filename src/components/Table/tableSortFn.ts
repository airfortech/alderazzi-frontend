import { SortFunc, SortOption } from "../../types/Table";

const defaultSort: SortFunc = (aField, bField, order) => {
  if (aField === null) return 1;
  if (bField === null) return -1;
  if (aField === null && bField === null) return 0;
  return (aField.toString().localeCompare(bField.toString(), "en", {
    numeric: true,
  }) * (order === "asc" ? 1 : -1)) as 1 | -1 | 0;
};

export const tableSortFunc = <T>(
  data: T[],
  sortOption: SortOption<T>,
  sortFunc: SortFunc | undefined
): T[] => {
  const { field, order } = sortOption;
  return [...data].sort((a, b) => {
    const aField = a[field] as string | number;
    const bField = b[field] as string | number;
    return sortFunc
      ? sortFunc(aField, bField, order)
      : defaultSort(aField, bField, order);
  });
};
