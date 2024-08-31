import { useMutation } from "@tanstack/react-query";
import updateInvitation from "./useUpdateInvitation.request";
import { PostgrestError } from "@supabase/supabase-js";
import { InvitationUpdate } from "../../queries/useInvitation/useInvitation.interface";

const useUpdateInvitation = () => {
  return useMutation<null, PostgrestError, { id: string; toUpdate: InvitationUpdate }>({
    mutationFn: updateInvitation,
  });
};

export default useUpdateInvitation;
