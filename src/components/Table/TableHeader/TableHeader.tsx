import { ITableHeader } from "../../../types/Table";
import { Filter } from "../Filter/Filter";
import { Title } from "./Title";
import classes from "../Table.module.css";

export const TableHeader = ({
  title,
  titleTag,
  isFilterable,
  filter,
  setFilter,
  scrollTopRef,
  tableHeaderRef,
  horizontalScroll,
  stickyHeaderPosition,
}: ITableHeader) => {
  return (
    <header
      className={classes.TableHeader}
      style={{
        position: "sticky",
        top:
          stickyHeaderPosition !== undefined
            ? stickyHeaderPosition + "px"
            : undefined,
      }}
      ref={tableHeaderRef}
    >
      {(title || isFilterable) && (
        <div className={classes.headerWrapper}>
          {title && (
            <Title tag={titleTag} className={classes.headerTitle}>
              {title}
            </Title>
          )}
          {isFilterable && <Filter filter={filter} setFilter={setFilter} />}
        </div>
      )}
      {horizontalScroll === "top" && (
        <div className={classes.scrollTop} ref={scrollTopRef}>
          <div className={classes.scrollTopContent}></div>
        </div>
      )}
    </header>
  );
};
