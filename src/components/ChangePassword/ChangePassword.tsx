import { ChangePasswordForm } from "../../types/User";
import { useUsers } from "../../hooks/useUsers";
import { Form } from "../Form/Form";
import { items, validationSchema } from "./dataChangePassword";

import classes from "./ChangePassword.module.css";

interface Props {}

export const ChangePassword = ({}: Props) => {
  const { changePassword, isChangingPassword } = useUsers();
  const submit = (formData: ChangePasswordForm) => {
    const { role, password } = formData;
    changePassword({ role, password });
  };

  return (
    <div className={classes.ChangePassword}>
      <Form<ChangePasswordForm>
        label="Zamiana hasła"
        items={items}
        validationSchema={validationSchema}
        submit={submit}
        isLoading={isChangingPassword}
      />
    </div>
  );
};
