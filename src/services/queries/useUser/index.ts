import { useQuery } from "@tanstack/react-query";
import fetchUser from "./useUser.request";

const useUser = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
    ...options,
  });
};

export default useUser;
