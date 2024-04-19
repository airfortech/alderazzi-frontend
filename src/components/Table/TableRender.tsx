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
  filter,
  setFilter,
  filteringSelectors,
  onRowClick,
  expandableRowsComponent,
  expandableRowsComponentPaddingsDisabled,
  initialExpandableRowsState = "hidden",
  horizontalScroll,
  stickyColumn,
  stickyHeaderPosition,
  counter,
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

    const theadCalculation = () => {
      if (theadHeader && theadBody) {
        const theadBodyCellsWidth = [...theadBody.querySelectorAll("p")].map(
          // INFO: getBoundingClientRect().width returns non-integer values, offsetWidth returns rounded to integer
          cell => cell.getBoundingClientRect().width
        );
        theadHeader
          .querySelectorAll("p")
          .forEach((p, i) => (p.style.width = theadBodyCellsWidth[i] + "px"));
      }
    };

    theadCalculation();
    window.addEventListener("resize", theadCalculation);

    if (headerScroll && tableBodyWrapper) {
      if (horizontalScroll === "top")
        headerScroll.addEventListener("scroll", headerScrollListener);
      else if (horizontalScroll === "bottom")
        tableBodyWrapper.addEventListener("scroll", headerScrollListener);
    }

    return () => {
      window.removeEventListener("resize", theadCalculation);
      if (!tableBodyWrapper || !headerScroll) return;
      if (horizontalScroll === "top") {
        headerScroll.removeEventListener("scroll", headerScrollListener);
      }
      if (horizontalScroll === "bottom") {
        tableBodyWrapper.removeEventListener("scroll", headerScrollListener);
      }
    };
  }, [bodyData, filter]);

  const data =
    filteringSelectors.length === 0
      ? bodyData
      : bodyData.filter(row => {
          for (let selector of filteringSelectors) {
            if (
              row[selector]
                ?.toString()
                .toLowerCase()
                .includes(filter.toLowerCase())
            )
              return true;
          }
          return false;
        });

  const dataCount = counter === true && data.length;

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
          filteringSelectors={filteringSelectors}
          filter={filter}
          setFilter={setFilter}
          counter={counter}
          dataCount={dataCount}
        />
        <div
          className={headerScrollClasses(horizontalScroll)}
          ref={headerScrollRef}
        >
          <table className={classes.Table}>
            <TableHead
              parent="tableHeader"
              columns={columns}
              sortOption={sortOption}
              handleSort={handleSort}
              filteringSelectors={filteringSelectors}
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
            columns={columns}
            sortOption={sortOption}
            handleSort={handleSort}
            filteringSelectors={filteringSelectors}
            stickyColumn={stickyColumn}
            expandableRowsComponent={expandableRowsComponent}
            isAllExpanded={isAllExpanded}
            handleAllExpandTrigger={handleAllExpandTrigger}
            theadRef={theadBodyRef}
          />
          <TableBody
            columns={columns}
            bodyData={data}
            onRowClick={onRowClick}
            colSpan={colSpan}
            stickyColumn={stickyColumn}
            expandableRowsComponent={expandableRowsComponent}
            expandableRowsComponentPaddingsDisabled={
              expandableRowsComponentPaddingsDisabled
            }
            isAllExpanded={isAllExpanded}
            initialExpandableRowsState={initialExpandableRowsState}
          />
        </table>
      </div>
    </div>
  );
};
