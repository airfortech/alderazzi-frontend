import { useLocation } from "react-router-dom";

export const useRouteMatch = (patterns: string[]) => {
  const { pathname } = useLocation();

  if (pathname === "/") return "/";
  const path = "/" + pathname.split("/")[1];
  if (patterns.includes(path)) return path;
  return false;
};
