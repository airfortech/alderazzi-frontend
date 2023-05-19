import { iconColors } from "../../types/Icons";
import { IList } from "../../types/List";
import { Align } from "../../types/Table";
import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import { Title } from "../Table/TableHeader/Title";

import classes from "./List.module.css";

const titleClasses = (titleAlign: Align) =>
  clsx(
    classes.title,
    titleAlign === "right" && classes.right,
    titleAlign === "center" && classes.center
  );

const liClasses = (onRowClick: boolean, noPaddings: boolean, noData: boolean) =>
  clsx(
    classes.li,
    !noPaddings && classes.liPaddings,
    onRowClick && classes.cursorPointer,
    noData && classes.noData
  );

export const List = ({
  items,
  stickyHeaderPosition,
  title,
  titleAlign = "left",
  titleTag = "p",
  noPaddings = false,
  style,
}: IList) => {
  return (
    <section className={classes.List} style={style}>
      {title && (
        <Title
          tag={titleTag}
          className={titleClasses(titleAlign)}
          style={{
            position: "sticky",
            top:
              stickyHeaderPosition !== undefined
                ? stickyHeaderPosition + "px"
                : undefined,
          }}
        >
          {title}
        </Title>
      )}
      <ul className={classes.ul}>
        {items && items.length > 0 ? (
          items.map(
            (
              {
                value,
                color = "inherit",
                icon,
                iconColor = "inherit",
                onRowClick,
              },
              i
            ) => (
              <li
                className={liClasses(!!onRowClick, noPaddings, false)}
                key={i}
                onClick={onRowClick}
              >
                {icon && <Icon icon={icon} size="normal" color={iconColor} />}
                {typeof value === "string" ? (
                  <span style={{ color: iconColors[color] }}>{value}</span>
                ) : (
                  value
                )}
              </li>
            )
          )
        ) : (
          <li className={liClasses(false, false, true)}>No data provided</li>
        )}
      </ul>
    </section>
  );
};
