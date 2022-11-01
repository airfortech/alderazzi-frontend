import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { GiExitDoor } from "react-icons/gi";

import { api } from "../../../api/api";
import { useAuth } from "../../../hooks/useAuth";
import classes from "./User.module.css";

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
      <IconButton
        aria-label="logout"
        edge="end"
        sx={{ color: red[700] }}
        className={classes.button}
        onClick={handleLogout}
      >
        <GiExitDoor />
      </IconButton>
    </div>
  );
};
