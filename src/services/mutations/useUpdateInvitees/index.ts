import { useMutation } from "@tanstack/react-query";
import updateInvitees from "./useUpdateInvitees.request";
import { Invitee } from "../../queries/useInvitees/useInvitees.interface";
import { PostgrestError } from "@supabase/supabase-js";

const useUpdateInvitees = () => {
  return useMutation<null, PostgrestError, Invitee[]>({
    mutationFn: updateInvitees,
  });
};

export default useUpdateInvitees;
