import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error();
  return authContext;
};
