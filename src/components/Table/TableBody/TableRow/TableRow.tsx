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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "../../Table.module.css";
import clsx from "clsx";
import {
  bodyTr,
  bodyTrExpandTrigger,
  bodyTrExpandableRow,
  bodyTrTd,
} from "../../TableCss";

interface Props<T> {
  columns: Columns<T>;
  row: T;
  colSpan: number;
  index: number;
  stickyColumn: "switcher" | "first column" | "none";
  onRowClick?: OnRowClickFunc<T>;
  expandableRowsComponent?: ExpandableRowsComponent<T> | undefined;
}

const trClasses = (index: number) => {
  return clsx(index % 2 === 1 && classes.evenBodyTr);
};

const tdSwitcherClasses = () => {
  return clsx(classes.tdSwitcher, classes.cursorPointer);
};

const tdClasses = (
  align: Align,
  isOnRowClickActive: boolean,
  hasOnClickFunction: boolean
) => {
  return clsx(
    classes["align-" + align],
    isOnRowClickActive && hasOnClickFunction && classes.cursorPointer
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
  row,
  colSpan,
  index,
  stickyColumn,
  onRowClick,
  expandableRowsComponent,
}: Props<T>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandableRowContentHeight, setExpandableRowContent] = useState(0);
  const refExpandableRowContent = useRef<HTMLDivElement>(null);

  const handleOnRowClick = useCallback(
    (props: T): MouseEventHandler<HTMLTableRowElement> =>
      () => {
        if (!onRowClick) return;
        onRowClick(props);
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
      // INFO: transition for height: auto fix
      setExpandableRowContent(refExpandableRowContent.current.scrollHeight);
    }
  }, []);

  return (
    <Fragment key={row.id}>
      <tr
        style={{ zIndex: -1 }}
        className={bodyTr(index)}
        onClick={onRowClick ? handleOnRowClick(row) : undefined}
      >
        {expandableRowsComponent && (
          <td
            onClick={handleExpandTrigger}
            className={bodyTrExpandTrigger(index, stickyColumn)}
          >
            {isExpanded ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </td>
        )}
        {columns
          .filter(({ isVisible = true }) => isVisible === true)
          .map(
            (
              { selector, align = "left", isOnRowClickActive = true, cell },
              i
            ) => (
              <td
                className={bodyTrTd(
                  index,
                  i,
                  align,
                  isOnRowClickActive,
                  stickyColumn,
                  onRowClick ? true : false
                )}
                key={i}
                onClick={e => {
                  if (isOnRowClickActive) return;
                  e.stopPropagation();
                }}
              >
                {!cell
                  ? (row[selector] as string) + i
                  : cell(row[selector] as string, row)}
              </td>
            )
          )}
      </tr>

      {expandableRowsComponent && (
        <tr className={bodyTrExpandableRow(index, stickyColumn)}>
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
