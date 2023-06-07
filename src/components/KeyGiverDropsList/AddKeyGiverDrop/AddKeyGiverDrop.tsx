import { KeyGiverDropAddRequest } from "../../../types/KeyGiverDrop";
import { useKeyGiverDrops } from "../../../hooks/useKeyGiverDrops";
import { Form } from "../../Form/Form";
import classes from "./AddKeyGiverDrop.module.css";
import { items, validationSchema } from "./dataAddKeyGiverDrop";
import { useKeyGivers } from "../../../hooks/useKeyGivers";
import { useKeys } from "../../../hooks/useKeys";
import { usePrivileges } from "../../../hooks/usePrivileges";
import { useMemo } from "react";
import dayjs from "dayjs";

export const AddKeyGiverDrop = () => {
  const { addKeyGiverDropMutation, isAddingKeyGiverDrop } = useKeyGiverDrops();
  const { data: keyGivers } = useKeyGivers();
  const { data: keys } = useKeys();
  const { data } = usePrivileges();

  const submit = (formData: KeyGiverDropAddRequest) => {
    addKeyGiverDropMutation({
      ...formData,
      dropDate: dayjs(formData.dropDate).unix(),
    });
  };

  const keyGiversData = useMemo(() => keyGivers, [keyGivers]);
  const keysData = useMemo(() => keys, [keys]);

  if (!keyGiversData) return null;
  if (!keysData) return null;
  if (!data) return null;

  return (
    <div className={classes.AddKeyGiverDrop}>
      <Form<KeyGiverDropAddRequest>
        items={items(keyGiversData, keysData, data.config.keyGiverDrops)}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isAddingKeyGiverDrop}
      />
    </div>
  );
};
