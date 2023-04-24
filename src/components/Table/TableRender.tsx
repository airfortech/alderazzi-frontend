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
  style,
}: ITableRender<T>) => {
  const [isAllExpanded, setIsAllExpanded] = useState(
    initialExpandableRowsState === "visible" ? true : false
  );
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const scrollTopRef = useRef<HTMLTableCellElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const theadRef = useRef<HTMLTableSectionElement>(null);

  const handleAllExpandTrigger = () => {
    // INFO: prevents trigger onClick functions of parent if exists
    // e.stopPropagation();
    setIsAllExpanded(prev => !prev);
  };

  useEffect(() => {
    const tableWrapper = tableWrapperRef.current;
    const scrollTop = scrollTopRef.current;
    const tableContainer = tableContainerRef.current;
    const thead = theadRef.current;

    const scrollTopListener = () => {
      if (!tableWrapper || !scrollTop) return;
      tableWrapper.scrollLeft = scrollTop.scrollLeft;
    };

    if (tableWrapper && scrollTop && tableContainer && thead) {
      const tableRowsWidth = tableWrapper.querySelector("table")?.offsetWidth;
      const scrollTopContent = scrollTop.querySelector("div");
      scrollTop.style.bottom = -thead.offsetHeight + "px";

      if (scrollTopContent)
        scrollTopContent.style.width = tableRowsWidth + "px";

      scrollTop.addEventListener("scroll", scrollTopListener);
    }

    return () => {
      if (!tableWrapper || !scrollTop) return;
      scrollTop.removeEventListener("scroll", scrollTopListener);
    };
  }, [filter]);

  return (
    <div
      className={classes.TableContainer}
      ref={tableContainerRef}
      style={style}
    >
      <TableHeader
        title={title}
        titleTag={titleTag}
        isFilterable={isFilterable}
        filter={filter}
        setFilter={setFilter}
        scrollTopRef={scrollTopRef}
        horizontalScroll={horizontalScroll}
      />
      <div
        className={tableWrapperClasses(horizontalScroll)}
        ref={tableWrapperRef}
      >
        <table className={classes.Table}>
          <TableHead
            columns={columns}
            sortOption={sortOption}
            handleSort={handleSort}
            stickyColumn={stickyColumn}
            expandableRowsComponent={expandableRowsComponent}
            theadRef={theadRef}
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
