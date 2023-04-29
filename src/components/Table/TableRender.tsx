import { Row, ITableRender } from "../../types/Table";
import { useEffect, useRef, useState } from "react";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { headerScrollClasses, tableBodyWrapperClasses } from "./TableCss";
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
  const tableBodyWrapperRef = useRef<HTMLDivElement>(null);
  const headerScrollRef = useRef<HTMLDivElement>(null);
  const theadHeaderRef = useRef<HTMLTableSectionElement>(null);
  const theadBodyRef = useRef<HTMLTableSectionElement>(null);

  const handleAllExpandTrigger = () => {
    // INFO: prevents trigger onClick functions of parent if exists
    // e.stopPropagation();
    setIsAllExpanded(prev => !prev);
  };

  useEffect(() => {
    const tableBodyWrapper = tableBodyWrapperRef.current;
    const headerScroll = headerScrollRef.current;
    const theadHeader = theadHeaderRef.current;
    const theadBody = theadBodyRef.current;

    const headerScrollListener = () => {
      if (!tableBodyWrapper || !headerScroll) return;
      if (horizontalScroll === "top")
        tableBodyWrapper.scrollLeft = headerScroll.scrollLeft;
      else if (horizontalScroll === "bottom")
        headerScroll.scrollLeft = tableBodyWrapper.scrollLeft;
    };

    if (theadHeader && theadBody) {
      const theadBodyCellsWidth = [...theadBody.querySelectorAll("p")].map(
        cell => cell.offsetWidth
      );
      theadHeader
        .querySelectorAll("p")
        .forEach((p, i) => (p.style.width = theadBodyCellsWidth[i] + "px"));
    }
    if (headerScroll && tableBodyWrapper) {
      if (horizontalScroll === "top")
        headerScroll.addEventListener("scroll", headerScrollListener);
      else if (horizontalScroll === "bottom")
        tableBodyWrapper.addEventListener("scroll", headerScrollListener);
    }

    return () => {
      if (!tableBodyWrapper || !headerScroll) return;
      if (horizontalScroll === "top") {
        headerScroll.removeEventListener("scroll", headerScrollListener);
      }
      if (horizontalScroll === "bottom") {
        tableBodyWrapper.removeEventListener("scroll", headerScrollListener);
        console.log("bottom");
      }
    };
  }, []);

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
        <div
          className={headerScrollClasses(horizontalScroll)}
          ref={headerScrollRef}
        >
          <table className={classes.Table}>
            <TableHead
              parent="tableHeader"
              isFilterable={isFilterable}
              columns={columns}
              sortOption={sortOption}
              handleSort={handleSort}
              stickyColumn={stickyColumn}
              expandableRowsComponent={expandableRowsComponent}
              isAllExpanded={isAllExpanded}
              handleAllExpandTrigger={handleAllExpandTrigger}
              theadRef={theadHeaderRef}
            />
          </table>
        </div>
      </div>
      <div
        className={tableBodyWrapperClasses(horizontalScroll)}
        ref={tableBodyWrapperRef}
      >
        <table className={classes.Table}>
          <TableHead
            parent="tableBody"
            isFilterable={isFilterable}
            columns={columns}
            sortOption={sortOption}
            handleSort={handleSort}
            stickyColumn={stickyColumn}
            expandableRowsComponent={expandableRowsComponent}
            isAllExpanded={isAllExpanded}
            handleAllExpandTrigger={handleAllExpandTrigger}
            theadRef={theadBodyRef}
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
