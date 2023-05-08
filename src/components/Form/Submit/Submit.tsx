import { ISubmit } from "../../../types/Form";
import clsx from "clsx";
import { Button } from "../../Button/Button";
import { Loader } from "../../Loader/Loader";

import classes from "./Submit.module.css";

interface Props extends Omit<ISubmit, "type"> {
  isValid: boolean;
  isLoading?: boolean;
  align?: "left" | "right";
}

const submitClasses = (align: "left" | "right") => {
  return clsx(classes.Submit, align === "right" && classes.right);
};

export const Submit = ({
  isValid,
  isLoading = false,
  align = "left",
  title = "Submit",
  icon,
  iconAlign,
}: Props) => {
  return (
    <div className={submitClasses(align)}>
      <Loader size="small" isLoading={isLoading} />
      <Button
        type="submit"
        variant="contained"
        size="lg"
        icon={icon}
        iconAlign={iconAlign}
        disabled={isValid}
        style={{ order: align === "left" ? -1 : "auto" }}
      >
        {title}
      </Button>
    </div>
  );
};
