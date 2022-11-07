import { matchPath, useLocation } from "react-router-dom";

export const useRouteMatch = (patterns: string[]) => {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    // if (possibleMatch !== null) {
    if (possibleMatch) {
      console.log(pattern, pathname);
      console.log("possibleMatch", possibleMatch);
      return possibleMatch;
    }
  }

  // return matchPath("/", "/");
  return null;
};
