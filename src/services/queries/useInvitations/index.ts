import { useQuery } from "@tanstack/react-query";
import fetchInvitations from "./useInvitations.request";

const useInvitations = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["invitations"],
    queryFn: () => fetchInvitations(),
    ...options,
  });
};

export default useInvitations;
