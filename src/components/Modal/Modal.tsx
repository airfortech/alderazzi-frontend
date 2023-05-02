import { CSSProperties, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import MuiModal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./Modal.module.css";
import clsx from "clsx";

const headerClasses = (title: string | undefined) =>
  clsx(classes.header, !title && classes.flexEnd);

const modalClasses = (fullWidth: boolean, fullHeight: boolean) =>
  clsx(
    classes.modal,
    fullWidth && classes.fullWidth,
    fullHeight && classes.fullHeight
  );

interface Props {
  children: React.ReactElement;
  title?: string;
  style?: CSSProperties;
  fullWidth?: boolean;
  fullHeight?: boolean;
  isOpen: boolean;
}

export const Modal = ({
  children,
  title,
  style,
  fullWidth = false,
  fullHeight = false,
  isOpen,
}: Props) => {
  const [open, setOpen] = useState(isOpen);
  const handleClose = () => setOpen(false);

  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Fade in={open}>
        <div className={modalClasses(fullWidth, fullHeight)} style={style}>
          <div className={headerClasses(title)}>
            {title && <p className={classes.title}>{title}</p>}
            <IconButton
              aria-label="logout"
              edge="end"
              sx={{ color: red[700] }}
              className={classes.button}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.content}>{children}</div>
        </div>
      </Fade>
    </MuiModal>
  );
};
