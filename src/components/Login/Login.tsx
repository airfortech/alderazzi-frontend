import { useAuth } from "../../hooks/useAuth";
import { Form } from "../Form/Form";
import { Heading } from "../Heading/Heading";
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
        <Heading>Buongiorno! Zaloguj się by uzyskać uprawnienia.</Heading>
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
