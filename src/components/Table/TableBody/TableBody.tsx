import { Align, Columns, Row } from "../../../types/Table";
import { MouseEventHandler, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import classes from "../Table.module.css";

interface Props<T> {
  bodyData: T[];
  columns: Columns<T>;
  linkToId?: string;
  filter: string;
}

const tdClasses = (align: Align) => {
  return clsx(classes["align-" + align]);
};

export const TableBody = <T extends Row>({
  bodyData,
  columns,
  linkToId,
  filter,
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

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <tbody>
      {bodyData
        .filter(row => row.name?.toLowerCase().includes(filter.toLowerCase()))
        .map((row, index) => (
          <tr
            className={trClasses()}
            onClick={
              linkToId
                ? handleLinkToId(row.id, "name" in row ? row["name"] : "")
                : undefined
            }
            key={row.id}
          >
            {columns.map(
              (
                { isVisible = true, selector, header, align = "left", cell },
                index
              ) =>
                isVisible && (
                  <td className={tdClasses(align)} key={index}>
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
