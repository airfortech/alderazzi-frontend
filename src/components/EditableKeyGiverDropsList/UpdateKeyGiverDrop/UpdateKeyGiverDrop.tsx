import dayjs from "dayjs";
import { useKeyGiverDrops } from "../../../hooks/useKeyGiverDrops";
import { useKeyGivers } from "../../../hooks/useKeyGivers";
import { useKeys } from "../../../hooks/useKeys";
import { KeyGiverDropUpdateRequest } from "../../../types/KeyGiverDrop";
import { useMemo } from "react";
import { items, validationSchema } from "./dataUpdateKeyGiverDrop";
import classes from "./UpdateKeyGiverDrop.module.css";
import { Form } from "../../Form/Form";

interface Props {
  id: string;
}

export const UpdateKeyGiverDrop = ({ id }: Props) => {
  const {
    editableKeyGiverDrops,
    updateKeyGiverDropMutation,
    isUpdatingKeyGiverDrop,
  } = useKeyGiverDrops();
  const { data: keyGivers } = useKeyGivers();
  const { data: keys } = useKeys();
  const editableKeyGiverDrop = editableKeyGiverDrops?.find(
    keyGiverDrop => keyGiverDrop.id === id
  );

  const submit = (formData: KeyGiverDropUpdateRequest) => {
    const { keyGiver, drop, dropDate } = formData;
    updateKeyGiverDropMutation({
      id,
      keyGiverDrop: {
        keyGiver,
        drop: drop || null,
        dropDate: dayjs(dropDate).unix(),
      },
    });
  };

  const keyGiversData = useMemo(() => keyGivers, [keyGivers]);
  const keysData = useMemo(() => keys, [keys]);

  if (!keyGiversData) return null;
  if (!keysData) return null;
  if (!editableKeyGiverDrop) return null;

  return (
    <div className={classes.UpdateKeyGiverDrop}>
      <Form<KeyGiverDropUpdateRequest>
        items={items(keyGiversData, keysData, editableKeyGiverDrop)}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isUpdatingKeyGiverDrop}
      />
    </div>
  );
};
