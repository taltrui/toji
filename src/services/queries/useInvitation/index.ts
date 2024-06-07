import { useQuery } from "@tanstack/react-query";
import fetchInvitation from "./useInvitation.request";

const useInvitation = (invitation: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["invitation", invitation],
    queryFn: () => fetchInvitation(invitation),
    ...options,
  });
};

export default useInvitation;
