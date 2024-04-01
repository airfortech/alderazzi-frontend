import { QueryKey } from "../types/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { getMagicItems } from "../api/items";

export const useMagicItems = () => {
  const query = useQuery([QueryKey.magicItems], () => getMagicItems(), {
    select: data => data.data.items,
    refetchOnMount: false,
  });

  return {
    ...query,
  };
};
