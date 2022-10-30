import { UserRole } from "../../../types/UserRole";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import AvatarIcon from "@mui/icons-material/PermIdentity";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

import { useEnemies } from "../../../hooks/useEnemies";
import { useAuth } from "../../../hooks/useAuth";
import { isRoleAllowed } from "../../../utils/isRoleAllowed";
import classes from "./EnemyItem.module.css";

interface Props {
  id: string;
  name: string;
}

export const EnemyItem = ({ id, name }: Props) => {
  const { auth } = useAuth();
  const { deleteEnemyMutation } = useEnemies();
  const handleDeleteEnemy = async (
    event: React.MouseEvent<HTMLElement>,
    enemyId: string
  ) => {
    deleteEnemyMutation.mutate(enemyId);
  };

  return (
    <li className={classes.EnemyItem}>
      <ListItemIcon>
        <AvatarIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
      {isRoleAllowed(
        [UserRole.caporegime, UserRole.consigliore],
        auth?.role
      ) && (
        <IconButton
          edge="end"
          aria-label="delete"
          sx={{ color: red[700] }}
          onClick={event => handleDeleteEnemy(event, id)}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </li>
  );
};
