import supabase from "../../../config/supabase";
import { Invitation } from "../useInvitation/useInvitation.interface";

const fetchInvitations = async (): Promise<Invitation[]> => {
  let { data, error } = await supabase
    .from('invitations')
    .select(`
      *,
      invitees (*)
    `)

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export default fetchInvitations;
