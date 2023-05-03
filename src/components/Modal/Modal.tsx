import { CSSProperties } from "react";
import Backdrop from "@mui/material/Backdrop";
import MuiModal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
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
  open: boolean;
  onClose: () => void;
}

export const Modal = ({
  children,
  title,
  style,
  fullWidth = false,
  fullHeight = false,
  open,
  onClose,
}: Props) => {
  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
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
              sx={{ color: red[700] }}
              className={classes.button}
              onClick={onClose}
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
