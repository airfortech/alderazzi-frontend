import {
  Align,
  Columns,
  ExpandableRowsComponent,
  Row,
} from "../../../../types/Table";
import { Fragment, MouseEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "../../Table.module.css";
import clsx from "clsx";

interface Props<T> {
  columns: Columns<T>;
  linkToId?: string;
  row: T;
  colSpan: number;
  index: number;
  expandableRowsComponent?: ExpandableRowsComponent<T> | undefined;
}

const tdClasses = (align: Align) => {
  return clsx(classes["align-" + align]);
};

const trClasses = (linkToId: string | undefined, index: number) => {
  return clsx(
    linkToId && classes.cursorPointer,
    index % 2 === 1 && classes.evenBodyTr,
    classes.bodyTr
  );
};

const expandableRowClasses = (index: number) => {
  return clsx(
    index % 2 === 1 && classes.expandableRow,
    index % 2 === 1 && classes.evenBodyTr
  );
};

export const TableRow = <T extends Row>({
  columns,
  linkToId,
  row,
  colSpan,
  index,
  expandableRowsComponent,
}: Props<T>) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

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
        className={trClasses(linkToId, index)}
        onClick={
          () => console.log(linkToId)
          // linkToId
          //   ? handleLinkToId(row.id, "name" in row ? row["name"] : "")
          //   : undefined
        }
        // key={row.id}
      >
        {expandableRowsComponent && (
          <td>
            {isExpanded ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </td>
        )}
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
      {expandableRowsComponent && isExpanded && (
        <tr
          className={expandableRowClasses(index)}
          // key={"expandableRowsComponent-" + row.id}
        >
          <td colSpan={colSpan}>{expandableRowsComponent(row)}</td>
        </tr>
      )}
    </Fragment>
  );
};
