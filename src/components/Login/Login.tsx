import { useAuth } from "../../hooks/useAuth";
import { Form } from "../Form/Form";
import { MobileWrapper } from "../MobileWrapper/MobileWrapper";
import { fields, validationSchema, FormData } from "./dataLogin";
import classes from "./Login.module.css";

export const Login = () => {
  const { loginUserMutation, isLoading } = useAuth();

  const submit = (formData: FormData) => {
    loginUserMutation(formData);
  };

  return (
    <MobileWrapper>
      <div className={classes.Login}>
        <p>Buongiorno! Zaloguj się by uzyskać uprawnienia.</p>
        <Form<FormData>
          items={fields}
          validationSchema={validationSchema}
          submit={submit}
          isLoading={isLoading}
        />
      </div>
    </MobileWrapper>
  );
};
