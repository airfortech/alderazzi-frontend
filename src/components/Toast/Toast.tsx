import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import classes from "./Toast.module.css";

export const Toast = () => {
  return (
    <>
      <ToastContainer
        className={classes.toast}
        position={toast.POSITION.TOP_LEFT}
        autoClose={5000}
        theme="dark"
        pauseOnFocusLoss={false}
        newestOnTop
      ></ToastContainer>
    </>
  );
};
