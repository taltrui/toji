import { useMutation } from "@tanstack/react-query";
import createInvitees from "./useCreateInvitees.request";
import { Invitee } from "../../queries/useInvitees/useInvitees.interface";
import { PostgrestError } from "@supabase/supabase-js";

const useCreateInvitees = () => {
  return useMutation<null, PostgrestError, Invitee[]>({
    mutationFn: createInvitees,
  });
};

export default useCreateInvitees;
