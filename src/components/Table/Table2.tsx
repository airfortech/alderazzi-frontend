import { Align, Row, Table } from "../../types/Table";

import { MouseEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { clsx } from "clsx";

import classes from "./Table.module.css";

const thClasses = (align: Align, isSortable: boolean) => {
  return clsx(classes["align-" + align], isSortable && classes.cursorPointer);
};

const thSpanClasses = (align: Align) => {
  return clsx(align === "right" && classes.spanLeft);
};

const tdClasses = (align: Align) => {
  return clsx(classes["align-" + align]);
};

interface SortOption<T> {
  field: keyof T;
  order: "asc" | "desc";
}

const sortFunc = <T,>(data: T[], sortOption: SortOption<T>): T[] => {
  const { field, order } = sortOption;
  return [...data].sort((a, b) => {
    const aField = a[field] as string;
    const bField = b[field] as string;
    if (aField === null) return 1;
    if (bField === null) return -1;
    if (aField === null && bField === null) return 0;
    return (
      aField.toString().localeCompare(bField.toString(), "en", {
        numeric: true,
      }) * (order === "asc" ? 1 : -1)
    );
  });
};

export const Table2 = <T extends Row>({
  columns,
  data,
  linkToId,
}: Table<T>) => {
  const [bodyData, setBodyData] = useState(data);
  const [sortOption, setSortOption] = useState<SortOption<T> | undefined>(
    undefined
  );
  const navigate = useNavigate();

  const trClasses = () => {
    return clsx(linkToId && classes.cursorPointer);
  };

  const handleSort = (selector: string) => {
    const newSortOption: SortOption<T> = {
      field: selector as keyof T,
      order:
        sortOption?.field === selector
          ? sortOption.order === "asc"
            ? "desc"
            : "asc"
          : "asc",
    };
    setSortOption(newSortOption);
    setBodyData(sortFunc(bodyData, newSortOption));
  };

  const handleLinkToId = useCallback(
    (id: string, title: string = ""): MouseEventHandler<HTMLTableRowElement> =>
      () => {
        const name = title ? `-${title.split(" ").join("-")}` : "";
        navigate({
          pathname: `${linkToId}/${id}${name}`,
        });
      },
    []
  );

  return (
    <table className={classes.Table}>
      <thead>
        <tr>
          {columns.map(
            ({
              isVisible = true,
              header,
              selector,
              isSortable = false,
              align = "left",
            }) =>
              isVisible && (
                <th
                  key={selector as string}
                  onClick={
                    isSortable
                      ? () => handleSort(selector as string)
                      : undefined
                  }
                >
                  <p className={thClasses(align, isSortable)}>
                    {header}
                    {isSortable && (
                      <span className={thSpanClasses(align)}>
                        {sortOption?.field === selector ? (
                          sortOption.order === "asc" ? (
                            <NorthIcon />
                          ) : (
                            <SouthIcon />
                          )
                        ) : (
                          <SwapVertIcon />
                        )}
                      </span>
                    )}
                  </p>
                </th>
              )
          )}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((row, index) => (
          <tr
            className={trClasses()}
            onClick={
              linkToId
                ? handleLinkToId(row.id, "name" in row ? row["name"] : "")
                : undefined
            }
          >
            {columns.map(
              (
                { isVisible = true, selector, header, align = "left", cell },
                index
              ) =>
                isVisible && (
                  <td className={tdClasses(align)}>
                    {!cell
                      ? (row[selector] as string)
                      : cell(row[selector] as string)}
                  </td>
                )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
