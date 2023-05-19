import { UserRole } from "../../types/UserRole";
import { List } from "../List/List";
import { ListItems } from "../../types/List";
import classes from "./UserPrivilages.module.css";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";

interface Props {
  role: UserRole;
}

const data: ListItems = [
  {
    icon: "clock",
    value: "lorem",
    color: "danger",
    iconColor: "danger",
    onRowClick: () => console.log("ok"),
  },
  { icon: "assassin", value: "lorem2" },
  { icon: "calendar", value: "lorem3" },
  { icon: "basket", value: "lorem4" },
  { icon: "basket", value: <p>test</p> },
];

export const UserPrivilages = ({ role }: Props) => {
  return (
    <div className={classes.UserPrivilages}>
      <MobileWrapper>
        <p>Buongiorno! Jako {role} możesz:</p>
      </MobileWrapper>
      <List
        items={data}
        title="Lista wrogów"
        titleAlign="center"
        stickyHeaderPosition={50}
        titleTag="h2"
      />
    </div>
  );
};
