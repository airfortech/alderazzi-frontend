import { ITableRow, Row } from "../../../../types/Table";
import {
  Fragment,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  bodyTr,
  bodyTrExpandTrigger,
  bodyTrExpandableRow,
  bodyTrTd,
  tbodyTrExpandableRowContent,
  tbodyTrExpandableRowContentWrapper,
} from "../../TableCss";
import classes from "../../Table.module.css";

export const TableRow = <T extends Row>({
  columns,
  row,
  colSpan,
  index,
  stickyColumn,
  onRowClick,
  expandableRowsComponent,
  expandableRowsComponentPaddingsDisabled,
  isAllExpanded,
  initialExpandableRowsState,
}: ITableRow<T>) => {
  const [isExpanded, setIsExpanded] = useState(isAllExpanded);
  const [isTransitionOn, setIsTransitionOn] = useState(false);
  const [expandableRowContentHeight, setExpandableRowContent] = useState<
    number | null
  >(null);
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
    const timeout = setTimeout(() => setIsTransitionOn(true), 0);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setIsExpanded(isAllExpanded);
  }, [isAllExpanded]);

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
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </td>
        )}
        {columns
          .filter(({ isVisible = true }) => isVisible === true)
          .map(
            (
              {
                color,
                bold,
                selector,
                align = "left",
                isOnRowClickActive = true,
                cell,
              },
              i
            ) => (
              <td
                key={i}
                className={bodyTrTd(
                  index,
                  i,
                  align,
                  isOnRowClickActive,
                  stickyColumn,
                  onRowClick ? true : false
                )}
                style={{ fontWeight: bold ? "bold" : undefined, color: color }}
                onClick={e => {
                  if (isOnRowClickActive) return;
                  e.stopPropagation();
                }}
              >
                {!cell
                  ? (row[selector] as string)
                  : cell(row[selector] as string, row)}
              </td>
            )
          )}
      </tr>

      {expandableRowsComponent && (
        <tr className={bodyTrExpandableRow(index, stickyColumn)}>
          <td colSpan={colSpan}>
            <div
              className={tbodyTrExpandableRowContentWrapper(
                isTransitionOn,
                initialExpandableRowsState
              )}
              // INFO: style={{maxHeight: undefined}} not setting style, so can fixing stuttering
              style={{
                maxHeight:
                  expandableRowContentHeight != null
                    ? isExpanded
                      ? expandableRowContentHeight + "px"
                      : 0
                    : undefined,
              }}
            >
              <div
                className={tbodyTrExpandableRowContent(
                  expandableRowsComponentPaddingsDisabled
                )}
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
