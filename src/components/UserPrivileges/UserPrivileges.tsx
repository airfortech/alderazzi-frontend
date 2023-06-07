import { UserRole } from "../../types/UserRole";
import { usePrivileges } from "../../hooks/usePrivileges";
import { Heading } from "../Heading/Heading";
import { List } from "../List/List";
import { Loader } from "../Loader/Loader";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";

import classes from "./UserPrivileges.module.css";

interface Props {
  role: UserRole;
}

export const UserPrivileges = ({ role }: Props) => {
  const { data, isError, isLoading } = usePrivileges();

  const lists = data?.privileges.map(({ category, actions }, i) => (
    <List
      title={category}
      stickyHeaderPosition={50}
      titleTag="h2"
      items={actions
        .sort((a, b) => Number(b.isAllowed) - Number(a.isAllowed))
        .map(({ action, isAllowed }) => {
          return {
            value: action,
            color: isAllowed ? "success" : "danger",
            icon: isAllowed ? "checkmark" : "crossmark",
            iconColor: isAllowed ? "success" : "danger",
          };
        })}
      key={i}
    />
  ));
  return (
    <div className={classes.UserPrivileges}>
      <MobileWrapper>
        <Heading>Buongiorno! Jako {role} możesz:</Heading>
      </MobileWrapper>
      {isLoading ? (
        <Loader isLoading />
      ) : lists?.length === 0 || isError ? (
        <p>{"Brak informacji"}</p>
      ) : (
        <div className={classes.lists}>{lists}</div>
      )}
    </div>
  );
};
