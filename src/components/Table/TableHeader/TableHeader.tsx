import { ITableHeader, Row } from "../../../types/Table";
import { Filter } from "../Filter/Filter";
import { Title } from "./Title";
import classes from "../Table.module.css";

export const TableHeader = <T extends Row>({
  title,
  titleTag,
  filteringSelectors,
  filter,
  setFilter,
}: ITableHeader<T>) => {
  return (
    <header className={classes.TableHeader}>
      {(title || filteringSelectors.length > 0) && (
        <div className={classes.headerWrapper}>
          {title && (
            <Title tag={titleTag} className={classes.headerTitle}>
              {title}
            </Title>
          )}
          {filteringSelectors.length > 0 && (
            <Filter filter={filter} setFilter={setFilter} />
          )}
        </div>
      )}
    </header>
  );
};
