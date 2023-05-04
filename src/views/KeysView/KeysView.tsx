import { useState } from "react";
import { Icon } from "../../components/Icon/Icon";
import { Modal } from "../../components/Modal/Modal";
import classes from "./KeysView.module.css";
import { Button } from "../../components/Button/Button";
import { MobileWrapper } from "../../components/MobileWrapper/MobileWrapper";

export const KeysView = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.KeysView}>
      <MobileWrapper>
        <h2>Klucze</h2>
        <Button
          icon="settings"
          size="lg"
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Modal
        </Button>
        <br />
        <Button>Test</Button>
        <br />
        <Button size="sm" icon="chest">
          Test
        </Button>
        <Button size="normal" icon="chest">
          Test
        </Button>
        <Button size="lg" color="success" icon="chest">
          Test
        </Button>
        <Button size="lg" color="danger" icon="chest">
          Test
        </Button>
        <Button size="lg" color="info">
          Test
        </Button>
        <Button size="lg" color="warning">
          Test
        </Button>
        <Button size="lg" color="primary">
          Test
        </Button>
        <Button size="lg" color="secondary">
          Test
        </Button>

        <br />
        <Button variant="outlined" size="sm" icon="chest">
          Test
        </Button>
        <Button variant="outlined" size="normal" icon="chest">
          Test
        </Button>
        <Button variant="outlined" size="lg" color="success" icon="chest">
          Test
        </Button>
        <Button variant="outlined" size="lg" color="danger" icon="chest">
          Test
        </Button>
        <Button variant="outlined" size="lg" color="info">
          Test
        </Button>
        <Button variant="outlined" size="lg" color="warning">
          Test
        </Button>
        <Button variant="outlined" size="lg" color="primary">
          Test
        </Button>
        <Button variant="outlined" size="lg" color="secondary">
          Test
        </Button>
        <br />
        <Button variant="contained" size="sm" icon="chest">
          Test
        </Button>
        <Button variant="contained" size="normal" icon="chest">
          Test
        </Button>
        <Button variant="contained" size="lg" color="success" icon="chest">
          Test
        </Button>
        <Button variant="contained" size="lg" color="danger" icon="chest">
          Test
        </Button>
        <Button variant="contained" size="lg" color="info">
          Test
        </Button>
        <Button variant="contained" size="lg" color="warning">
          Test
        </Button>
        <Button variant="contained" size="lg" color="primary">
          Test
        </Button>
        <Button variant="contained" size="lg" color="secondary">
          Test
        </Button>
        <Modal
          title=" Lorem ipsum dolor sit amet consectetur adipisicing."
          open={open}
          onClose={() => setOpen(false)}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            doloremque quod placeat blanditiis nesciunt omnis libero, optio
            fugit reprehenderit ipsa, quasi voluptatibus nam saepe quisquam
            aliquid enim delectus, magnam amet suscipit nobis accusamus eveniet!
            Eius dolor voluptate facilis ipsam quaerat aspernatur deleniti ex,
            quos dicta incidunt quisquam ducimus voluptates amet facere tempore
            rerum numquam labore minus impedit pariatur est.
          </p>
        </Modal>
      </MobileWrapper>
    </div>
  );
};
