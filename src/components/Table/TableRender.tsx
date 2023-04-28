import { Row, ITableRender } from "../../types/Table";
import { useEffect, useRef, useState } from "react";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { tableWrapperClasses } from "./TableCss";
import classes from "./Table.module.css";

export const TableRender = <T extends Row>({
  bodyData,
  columns,
  colSpan,
  title,
  titleTag,
  sortOption,
  handleSort,
  isFilterable,
  filter,
  setFilter,
  filteringSelectors,
  onRowClick,
  expandableRowsComponent,
  initialExpandableRowsState,
  horizontalScroll,
  stickyColumn,
  stickyHeaderPosition,
  style,
}: ITableRender<T>) => {
  const [isAllExpanded, setIsAllExpanded] = useState(
    initialExpandableRowsState === "visible" ? true : false
  );
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const scrollTopRef = useRef<HTMLDivElement>(null);

  const handleAllExpandTrigger = () => {
    // INFO: prevents trigger onClick functions of parent if exists
    // e.stopPropagation();
    setIsAllExpanded(prev => !prev);
  };

  useEffect(() => {
    const tableWrapper = tableWrapperRef.current;
    const scrollTop = scrollTopRef.current;

    const scrollTopListener = () => {
      if (!tableWrapper || !scrollTop) return;
      tableWrapper.scrollLeft = scrollTop.scrollLeft;
    };

    return () => {
      if (!tableWrapper || !scrollTop) return;
      scrollTop.removeEventListener("scroll", scrollTopListener);
    };
  }, [filter]);

  return (
    <div className={classes.tableWrapper} style={style}>
      <div
        className={classes.tableHeaderWrapper}
        style={{
          position: "sticky",
          top:
            stickyHeaderPosition !== undefined
              ? stickyHeaderPosition + "px"
              : undefined,
        }}
      >
        <TableHeader
          title={title}
          titleTag={titleTag}
          isFilterable={isFilterable}
          filter={filter}
          setFilter={setFilter}
        />
        <div className={classes.headerScroll}>
          <table>
            <TableHead
              title={title}
              isFilterable={isFilterable}
              columns={columns}
              sortOption={sortOption}
              handleSort={handleSort}
              stickyColumn={stickyColumn}
              expandableRowsComponent={expandableRowsComponent}
              isAllExpanded={isAllExpanded}
              handleAllExpandTrigger={handleAllExpandTrigger}
            />
          </table>
        </div>
      </div>
      <div
        className={tableWrapperClasses(horizontalScroll)}
        ref={tableWrapperRef}
      >
        <table className={classes.Table}>
          <TableHead
            title={title}
            isFilterable={isFilterable}
            columns={columns}
            sortOption={sortOption}
            handleSort={handleSort}
            stickyColumn={stickyColumn}
            expandableRowsComponent={expandableRowsComponent}
            isAllExpanded={isAllExpanded}
            handleAllExpandTrigger={handleAllExpandTrigger}
          />
          <TableBody
            columns={columns}
            bodyData={bodyData}
            onRowClick={onRowClick}
            filter={filter}
            filteringSelectors={filteringSelectors}
            colSpan={colSpan}
            stickyColumn={stickyColumn}
            expandableRowsComponent={expandableRowsComponent}
            isAllExpanded={isAllExpanded}
          />
        </table>
      </div>
    </div>
  );
};
