import { EnemyResponse } from "../../types/Enemy";
import { ITableRowDetails } from "../../types/TableRowDetails";
import { Fragment } from "react";
import clsx from "clsx";
import classes from "./TableRowDetails.module.css";

const containerClasses = (hasSingleChild: boolean) =>
  clsx(classes.container, hasSingleChild && classes.singleChild);

export const TableRowDetails = ({
  details,
  longDetails,
  actions,
}: ITableRowDetails) => {
  const filteredActions = actions?.filter(action => action !== false) || [];

  return (
    <div className={classes.EnemiesExpandableRow}>
      {(details || filteredActions.length > 0) && (
        <div
          className={containerClasses(!(details && filteredActions.length > 0))}
        >
          {details && (
            <ul className={classes.info}>
              {details.map(({ title, value }, i) => (
                <li key={i}>
                  <p className={classes.infoTitle}>{title}</p>
                  <p className={classes.infoValue}>{value as string}</p>
                </li>
              ))}
            </ul>
          )}
          {filteredActions.length > 0 && (
            <div className={classes.actions}>
              {filteredActions.map((action, i) => (
                <Fragment key={i}>{action}</Fragment>
              ))}
            </div>
          )}
        </div>
      )}
      {longDetails && (
        <ul className={classes.infoLong}>
          {longDetails.map(({ title, value }, i) => (
            <li key={i}>
              <p className={classes.infoTitle}>{title}</p>
              <p className={classes.infoValue}>{value as string}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
