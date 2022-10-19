import { ReactNode, createContext, useState } from "react";
import { UserRole } from "../types/UserRole";

interface Props {
  children: ReactNode;
}

interface LoginData {
  role: UserRole;
}

interface Auth {
  auth: LoginData | undefined;
  setAuth: (newAuth: LoginData | undefined) => void;
}

export const AuthContext = createContext<Auth | undefined>(undefined);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<LoginData | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
