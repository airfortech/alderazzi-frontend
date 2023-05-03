import { Icon } from "../../components/Icon/Icon";
import { Modal } from "../../components/Modal/Modal";
import classes from "./KeysView.module.css";

export const KeysView = () => {
  return (
    <div className={classes.KeysView}>
      <h2>Klucze</h2>
      <Icon icon="exit" />
      <Icon icon="settings" size="sm" type="button" />
      <Icon icon="settings" type="button" size="normal" color="success" />
      <Icon icon="settings" type="button" color="success" size="lg" />
      <Icon icon="settings" type="button" color="success" size="xl" />
      <Icon
        icon="settings"
        type="button"
        color="success"
        size="xl"
        style={{ fontSize: "54px" }}
      />
      <Modal
        title=" Lorem ipsum dolor sit amet consectetur adipisicing."
        isOpen={true}
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
