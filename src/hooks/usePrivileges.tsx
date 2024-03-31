import { QueryKey } from "../types/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { getPrivileges } from "../api/privileges";

export const usePrivileges = () => {
  const query = useQuery([QueryKey.privileges], getPrivileges, {
    select: data => data.data,
    refetchOnMount: false,
  });

  return { ...query };
};
