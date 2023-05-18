import { api } from "../../../api/api";
import { useAuth } from "../../../hooks/useAuth";
import classes from "./User.module.css";
import { Icon } from "../../Icon/Icon";

interface Props {
  role: string;
}

export const User = ({ role }: Props) => {
  const { logoutUserMutation } = useAuth();

  const handleLogout = () => {
    logoutUserMutation();
    api.defaults.headers.common["Authorization"] = undefined;
  };
  return (
    <div className={classes.User}>
      <p>{role}</p>
      <Icon
        ariaLabel="logout"
        icon="exit"
        type="button"
        size="xl"
        color="danger"
        edge="end"
        onClick={handleLogout}
      />
    </div>
  );
};
