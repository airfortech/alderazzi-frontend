import { Align, Columns, Row } from "../../../types/Table";
import { MouseEventHandler, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import classes from "../Table.module.css";

interface Props<T> {
  bodyData: T[];
  columns: Columns<T>;
  linkToId?: string;
}

const tdClasses = (align: Align) => {
  return clsx(classes["align-" + align]);
};

export const TableBody = <T extends Row>({
  bodyData,
  columns,
  linkToId,
}: Props<T>) => {
  const navigate = useNavigate();

  const trClasses = () => {
    return clsx(linkToId && classes.cursorPointer);
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
  );
};
