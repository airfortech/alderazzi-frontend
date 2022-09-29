import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import AvatarIcon from "@mui/icons-material/PermIdentity";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import classes from "./EnemyItem.module.css";

interface Props {
  id: string;
  name: string;
  handleDeleteEnemy: (event: React.MouseEvent<HTMLElement>, id: string) => void;
}

export const EnemyItem = ({ id, name, handleDeleteEnemy }: Props) => {
  return (
    <li className={classes.EnemyItem}>
      <ListItemIcon>
        <AvatarIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
      <IconButton
        edge="end"
        aria-label="delete"
        sx={{ color: red[700] }}
        onClick={event => handleDeleteEnemy(event, id)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};