import { CSSProperties } from "react";
import { Modal } from "../Modal/Modal";

import classes from "./Prompt.module.css";
import { Button } from "../Button/Button";

interface Props {
  title: string;
  style?: CSSProperties;
  open: boolean;
  acceptText?: string;
  rejectText?: string;
  onAccept: () => void;
  onClose: () => void;
}

export const Prompt = ({
  title,
  style,
  open,
  acceptText,
  rejectText,
  onAccept,
  onClose,
}: Props) => {
  return (
    <Modal
      title={title}
      open={open}
      onClose={onClose}
      closeIcon={false}
      style={{}}
    >
      <div className={classes.prompt}>
        <Button size="lg" variant="outlined" color="success" onClick={onAccept}>
          {acceptText || "Tak"}
        </Button>
        <Button size="lg" color="danger" variant="outlined" onClick={onClose}>
          {rejectText || "Nie"}
        </Button>
      </div>
    </Modal>
  );
};
