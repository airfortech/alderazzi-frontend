import {
  Align,
  Columns,
  ExpandableRowsComponent,
  Row,
} from "../../../../types/Table";
import { Fragment, MouseEventHandler, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../Table.module.css";
import clsx from "clsx";

interface Props<T> {
  columns: Columns<T>;
  linkToId?: string;
  row: T;
  colSpan: number;
  expandableRowsComponent?: ExpandableRowsComponent<T> | undefined;
}

const tdClasses = (align: Align) => {
  return clsx(classes["align-" + align]);
};

export const TableRow = <T,>({
  columns,
  linkToId,
  row,
  colSpan,
  expandableRowsComponent,
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
    <Fragment key={row.id}>
      <tr
        className={trClasses()}
        onClick={
          linkToId
            ? handleLinkToId(row.id, "name" in row ? row["name"] : "")
            : undefined
        }
        key={row.id}
      >
        {expandableRowsComponent && <td>dot</td>}
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
      {expandableRowsComponent && (
        <tr className={classes.expandableRow}>
          <td colSpan={colSpan}>{expandableRowsComponent(row)}</td>
        </tr>
      )}
    </Fragment>
  );
};
