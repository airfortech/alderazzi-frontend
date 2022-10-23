import LogoutIcon from "@mui/icons-material/Logout";
import classes from "./User.module.css";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { logout } from "../../../api/auth";
import { useAuth } from "../../../hooks/useAuth";
import { api } from "../../../api/api";

interface Props {
  role: string;
}

export const User = ({ role }: Props) => {
  const { setAuth } = useAuth();
  const handleLogout = () => {
    logout();
    setAuth(undefined);
    api.defaults.headers.common["Authorization"] = undefined;
    console.log("Logout");
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
        <LogoutIcon />
      </IconButton>
    </div>
  );
};
