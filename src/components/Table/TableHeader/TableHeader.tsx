import { Dispatch, SetStateAction } from "react";
import { Filter } from "../Filter/Filter";
import { Title } from "./Title";
import classes from "../Table.module.css";
import { TagName } from "../../../types/Table";

interface Props {
  title: string | undefined;
  titleTag: TagName;
  isFilterable: boolean;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  scrollTopRef: React.RefObject<HTMLTableCellElement>;
  horizontalScroll: "top" | "bottom";
}

export const TableHeader = ({
  title,
  titleTag,
  isFilterable,
  filter,
  setFilter,
  scrollTopRef,
  horizontalScroll,
}: Props) => {
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
      {horizontalScroll === "top" && (
        <div className={classes.scrollTop} ref={scrollTopRef}>
          <div className={classes.scrollTopContent}></div>
        </div>
      )}
    </header>
  );
};
