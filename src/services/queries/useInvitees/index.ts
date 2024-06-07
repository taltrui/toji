import { useQuery } from "@tanstack/react-query";
import fetchInvitees from "./useInvitees.request";

const useInvitees = (invitation: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["invitees", invitation],
    queryFn: () => fetchInvitees(invitation),
    ...options,
  });
};

export default useInvitees;
