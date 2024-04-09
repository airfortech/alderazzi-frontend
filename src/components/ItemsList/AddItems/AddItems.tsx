import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { AddItemsForm } from "./AddItemsForm";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import { Code } from "../../Code/Code";
import { example } from "./example";
import classes from "./AddItems.module.css";

export const AddItems = () => {
  const [openAddItems, setOpenAddItems] = useState(false);

  return (
    <div className={classes.AddItems}>
      <MobileWrapper>
        <Heading>Dodaj wiele przedmiotów</Heading>
        <div className={classes.info}>
          <p>
            Dodaj wiele broni, zbroi i tarcz na raz, wklejajac wynik komendy{" "}
            <Code type="code">/sprzet</Code> z mudletu.
          </p>
          <p>
            Statystyki powtarzających się przedmiotów zostaną przeliczone do
            wartości bliższym lepszym egzemplarzom.
          </p>
          <Button
            type="button"
            variant="contained"
            size="sm"
            color="warning"
            onClick={() => setOpenAddItems(true)}
          >
            Przykład
          </Button>
          <Modal
            title="Przykład:"
            open={openAddItems}
            onClose={() => setOpenAddItems(false)}
          >
            <Code type="pre">{example}</Code>
          </Modal>
        </div>
        <AddItemsForm />
        <div className={classes.actions}></div>
      </MobileWrapper>
    </div>
  );
};
