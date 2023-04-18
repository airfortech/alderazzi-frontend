import {
  Align,
  Columns,
  ExpandableRowsComponent,
  Row,
} from "../../../../types/Table";
import {
  Fragment,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
    index % 2 === 1 && classes.evenBodyTr
  );
};

const expandableRowTrClasses = (index: number) => {
  return clsx(classes.expandableRowTr, index % 2 === 1 && classes.evenBodyTr);
};

const expandableRowContentClasses = () => {
  return clsx(classes.expandableRowContent);
};

const expandableRowContentWrapperClasses = (isExpanded: boolean) => {
  return clsx(
    classes.expandableRowContentWrapper,
    isExpanded && classes.expandableRowContentWrapperOpen
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandableRowContentHeight, setExpandableRowContent] = useState(0);
  const refExpandableRowContent = useRef<HTMLDivElement>(null);

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

  const handleExpandTrigger = (e: MouseEvent<HTMLTableCellElement>) => {
    // INFO: prevents trigger onClick functions of parent if exists
    e.stopPropagation();
    setIsExpanded(prev => !prev);
  };

  useEffect(() => {
    if (refExpandableRowContent.current) {
      setExpandableRowContent(refExpandableRowContent.current.scrollHeight);
    }
  }, []);

  return (
    <Fragment key={row.id}>
      <tr
        style={{ zIndex: -1 }}
        className={trClasses(linkToId, index)}
        onClick={
          () => console.log("you clicked link:", linkToId)
          // linkToId
          //   ? handleLinkToId(row.id, "name" in row ? row["name"] : "")
          //   : undefined
        }
        // key={row.id}
      >
        {expandableRowsComponent && (
          <td onClick={handleExpandTrigger} style={{ zIndex: 99 }}>
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

      {expandableRowsComponent && (
        <tr
          className={expandableRowTrClasses(index)}
          // key={"expandableRowsComponent-" + row.id}
        >
          <td colSpan={colSpan}>
            <div
              className={expandableRowContentWrapperClasses(isExpanded)}
              style={{ maxHeight: isExpanded ? expandableRowContentHeight : 0 }}
            >
              <div
                className={expandableRowContentClasses()}
                ref={refExpandableRowContent}
              >
                {expandableRowsComponent(row)}
              </div>
            </div>
          </td>
        </tr>
      )}
    </Fragment>
  );
};
