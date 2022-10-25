import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import classes from "./Toast.module.css";

export const Toast = () => {
  return (
    <>
      <ToastContainer
        className={classes.toast}
        position={toast.POSITION.TOP_LEFT}
        autoClose={9000}
        theme="dark"
        limit={3}
      ></ToastContainer>
    </>
  );
};
