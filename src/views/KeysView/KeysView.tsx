import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { MobileWrapper } from "../../components/MobileWrapper/MobileWrapper";

import classes from "./KeysView.module.css";
import { Prompt } from "../../components/Prompt/Prompt";

export const KeysView = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

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
        <Button
          icon="settings"
          size="lg"
          variant="outlined"
          onClick={() => {
            setOpen2(true);
          }}
        >
          Modal
        </Button>
        <Button
          icon="settings"
          size="lg"
          variant="outlined"
          onClick={() => {
            setOpen3(true);
          }}
        >
          Prompt
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
      </MobileWrapper>
      <Modal
        title=" Lorem ipsum dolor sit amet consectetur adipisicing. dasdasdas dasd as"
        open={open}
        closeIcon={false}
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
      <Modal
        title=" Lorem ipsum dolor sit amet consectetur adipisicing."
        open={open2}
        onClose={() => setOpen2(false)}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          doloremque quod placeat blanditiis nesciunt omnis libero, optio fugit
          reprehenderit ipsa, quasi voluptatibus nam saepe quisquam aliquid enim
          delectus, magnam amet suscipit nobis accusamus eveniet! Eius dolor
          voluptate facilis ipsam quaerat aspernatur deleniti ex, quos dicta
          incidunt quisquam ducimus voluptates amet facere tempore rerum numquam
          labore minus impedit pariatur est. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veritatis doloremque quod placeat
          blanditiis nesciunt omnis libero, optio fugit reprehenderit ipsa,
          quasi voluptatibus nam saepe quisquam aliquid enim delectus, magnam
          amet suscipit nobis accusamus eveniet! Eius dolor voluptate facilis
          ipsam quaerat aspernatur deleniti ex, quos dicta incidunt quisquam
          ducimus voluptates amet facere tempore rerum numquam labore minus
          impedit pariatur est. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis doloremque quod placeat blanditiis
          nesciunt omnis libero, optio fugit reprehenderit ipsa, quasi
          voluptatibus nam saepe quisquam aliquid enim delectus, magnam amet
          suscipit nobis accusamus eveniet! Eius dolor voluptate facilis ipsam
          quaerat aspernatur deleniti ex, quos dicta incidunt quisquam ducimus
          voluptates amet facere tempore rerum numquam labore minus impedit
          pariatur est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis doloremque quod placeat blanditiis nesciunt omnis libero,
          optio fugit reprehenderit ipsa, quasi voluptatibus nam saepe quisquam
          aliquid enim delectus, magnam amet suscipit nobis accusamus eveniet!
          Eius dolor voluptate facilis ipsam quaerat aspernatur deleniti ex,
          quos dicta incidunt quisquam ducimus voluptates amet facere tempore
          rerum numquam labore minus impedit pariatur est. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Veritatis doloremque quod placeat
          blanditiis nesciunt omnis libero, optio fugit reprehenderit ipsa,
          quasi voluptatibus nam saepe quisquam aliquid enim delectus, magnam
          amet suscipit nobis accusamus eveniet! Eius dolor voluptate facilis
          ipsam quaerat aspernatur deleniti ex, quos dicta incidunt quisquam
          ducimus voluptates amet facere tempore rerum numquam labore minus
          impedit pariatur est. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis doloremque quod placeat blanditiis
          nesciunt omnis libero, optio fugit reprehenderit ipsa, quasi
          voluptatibus nam saepe quisquam aliquid enim delectus, magnam amet
          suscipit nobis accusamus eveniet! Eius dolor voluptate facilis ipsam
          quaerat aspernatur deleniti ex, quos dicta incidunt quisquam ducimus
          voluptates amet facere tempore rerum numquam labore minus impedit
          pariatur est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis doloremque quod placeat blanditiis nesciunt omnis libero,
          optio fugit reprehenderit ipsa, quasi voluptatibus nam saepe quisquam
          aliquid enim delectus, magnam amet suscipit nobis accusamus eveniet!
          Eius dolor voluptate facilis ipsam quaerat aspernatur deleniti ex,
          quos dicta incidunt quisquam ducimus voluptates amet facere tempore
          rerum numquam labore minus impedit pariatur est.
        </p>
      </Modal>
      <Prompt
        title="Na pewno?"
        open={open3}
        onClose={() => setOpen3(false)}
        onAccept={() => console.log("ok")}
      />
    </div>
  );
};
