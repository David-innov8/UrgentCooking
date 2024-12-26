import { fetchPropertyById } from "./api";
import { useQuery } from "@tanstack/react-query";

export const useFetchPropertyQuery = (id: number) => {
  const { data, ...props } = useQuery({
    queryKey: ["property", id],
    queryFn: () => fetchPropertyById(id),
  });

  return { data, ...props };
};
