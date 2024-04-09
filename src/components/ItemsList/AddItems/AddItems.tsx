import { useState } from "react";
import { AddItemsForm } from "./AddItemsForm";
import { MobileWrapper } from "../../MobileWrapper/MobileWrapper";
import { Heading } from "../../Heading/Heading";
import { Code } from "../../Code/Code";
import { example } from "./example";
import { TextField } from "@mui/material";
import { filterItems } from "./filterItems";
import { convertTextToItems } from "./convertTextToItems";
import { ItemResponse } from "../../../types/Item";
import { Tables } from "./Tables";
import classes from "./AddItems.module.css";

export const AddItems = () => {
  const [unconvertedItems, setUnconvertedItems] = useState("");

  const convertedItems = filterItems(convertTextToItems(unconvertedItems));

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
            wartości bliższych lepszym egzemplarzom.
          </p>
        </div>
        <TextField
          value={unconvertedItems}
          onChange={e => setUnconvertedItems(e.target.value)}
          placeholder={example}
          multiline
          minRows={9}
          maxRows={9}
          spellCheck={false}
          className={classes.textfield}
        />
      </MobileWrapper>
      <Tables items={convertedItems as ItemResponse[]} />
      <MobileWrapper>
        <AddItemsForm convertedItems={convertedItems} />
      </MobileWrapper>
    </div>
  );
};
