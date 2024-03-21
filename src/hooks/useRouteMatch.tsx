import { useLocation } from "react-router-dom";

export const useRouteMatch = (patterns: string[], level: 1 | 2 | 3 = 1) => {
  const { pathname } = useLocation();

  if (pathname === "/") return "/";
  const path =
    level === 1
      ? "/" + pathname.split("/")[1]
      : level === 2
      ? "/" + pathname.split("/")[1] + "/" + pathname.split("/")[2]
      : "/" +
        pathname.split("/")[1] +
        "/" +
        pathname.split("/")[2] +
        "/" +
        pathname.split("/")[3];
  if (patterns.includes(path)) return path;
  return false;
};
