import { useLocation } from "react-router-dom";

export const useRouteMatch = (patterns: string[], level: 1 | 2 | 3 = 1) => {
  const { pathname } = useLocation();

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
  if (patterns.some(pattern => pattern.startsWith(path)))
    return patterns.find(pattern => pattern.startsWith(path));
  return false;
};
