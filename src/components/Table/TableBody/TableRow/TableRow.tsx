import {
  Align,
  Columns,
  ExpandableRowsComponent,
  OnRowClickFunc,
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
  onRowClick?: OnRowClickFunc;
  expandableRowsComponent?: ExpandableRowsComponent<T> | undefined;
}

const tdClasses = (align: Align) => {
  return clsx(classes["align-" + align]);
};

const trClasses = (index: number, hasOnClickFunction: boolean) => {
  return clsx(
    hasOnClickFunction && classes.cursorPointer,
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
  onRowClick,
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

  const handleOnRowClick = useCallback(
    (id: string): MouseEventHandler<HTMLTableRowElement> =>
      () => {
        if (!onRowClick) return;
        onRowClick(id);
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
        className={trClasses(index, onRowClick ? true : false)}
        onClick={onRowClick ? handleOnRowClick(row.id) : undefined}
      >
        {expandableRowsComponent && (
          <td onClick={handleExpandTrigger} className={classes.cursorPointer}>
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
