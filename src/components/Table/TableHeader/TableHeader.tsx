import { ITableHeader, Row } from "../../../types/Table";
import { Filter } from "../Filter/Filter";
import { Title } from "./Title";
import classes from "../Table.module.css";

export const TableHeader = <T extends Row>({
  title,
  titleTag,
  isFilterable,
  filter,
  setFilter,
}: ITableHeader<T>) => {
  return (
    <header className={classes.TableHeader}>
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
      {/* {horizontalScroll === "top" && (
        <div className={classes.scrollTop} ref={scrollTopRef}>
          <div className={classes.scrollTopContent}></div>
        </div>
      )} */}
    </header>
  );
};
