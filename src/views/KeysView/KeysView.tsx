import { useState } from "react";
import { Icon } from "../../components/Icon/Icon";
import { Modal } from "../../components/Modal/Modal";
import classes from "./KeysView.module.css";

export const KeysView = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.KeysView}>
      <h2>Klucze</h2>
      <Icon
        type="button"
        icon="settings"
        size="xl"
        color="info"
        onClick={() => {
          console.log("test");
          setOpen(true);
        }}
      />
      <Modal
        title=" Lorem ipsum dolor sit amet consectetur adipisicing."
        open={open}
        onClose={() => setOpen(false)}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          doloremque quod placeat blanditiis nesciunt omnis libero, optio fugit
          reprehenderit ipsa, quasi voluptatibus nam saepe quisquam aliquid enim
          delectus, magnam amet suscipit nobis accusamus eveniet! Eius dolor
          voluptate facilis ipsam quaerat aspernatur deleniti ex, quos dicta
          incidunt quisquam ducimus voluptates amet facere tempore rerum numquam
          labore minus impedit pariatur est.
        </p>
      </Modal>
    </div>
  );
};
