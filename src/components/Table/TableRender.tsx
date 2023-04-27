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
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const tableHeaderRef = useRef<HTMLElement>(null);
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
    const tableHeader = tableHeaderRef.current;

    const scrollTopListener = () => {
      if (!tableWrapper || !scrollTop) return;
      tableWrapper.scrollLeft = scrollTop.scrollLeft;
    };

    const stickyHeaderListener = () => {
      const headerHeight = 103;
      const tablePosTop = tableContainer?.getBoundingClientRect().top;
      const theadPosY = thead?.offsetTop;
      const tableHeaderPos = tableHeader?.getBoundingClientRect().top;
      // console.log("tablePosTop:", tableContainer?.getBoundingClientRect().top);
      // console.log(
      //   "tablePosTop:",
      //   tablePosTop,
      //   "tableHeaderPos:",
      //   tableHeaderPos
      // );
      if (
        tableHeaderPos !== undefined &&
        stickyHeaderPosition !== undefined &&
        theadPosY !== undefined &&
        thead &&
        tablePosTop
        // theadPosY < stickyHeaderPosition + headerHeight
      ) {
        // const theadTop =
        //   stickyHeaderPosition -
        //   (tablePosTop + stickyHeaderPosition) +
        //   stickyHeaderPosition;
        // // console.log(theadTop);
        // console.log("ok");

        // TODO: do it on position relative, sticky is bugged
        thead.style.position = "relative";
        if (tableHeaderPos <= stickyHeaderPosition)
          thead.style.top = stickyHeaderPosition - tablePosTop + "px";
        else thead.style.top = "0px";

        // if (tableHeaderPos <= stickyHeaderPosition)
        //   thead.style.transform = `translateY(${
        //     stickyHeaderPosition - tablePosTop
        //   }px)`;
        // else thead.style.transform = "translateY(0px)";
      }
    };

    if (tableWrapper && scrollTop && tableContainer && thead) {
      const tableRowsWidth = tableWrapper.querySelector("table")?.offsetWidth;
      const scrollTopContent = scrollTop.querySelector("div");
      scrollTop.style.bottom = -thead.offsetHeight + "px";
      if (scrollTopContent)
        scrollTopContent.style.width = tableRowsWidth + "px";
      scrollTop.addEventListener("scroll", scrollTopListener);
    }
    window.addEventListener("scroll", stickyHeaderListener);

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
        stickyHeaderPosition={stickyHeaderPosition}
        tableHeaderRef={tableHeaderRef}
      />
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
