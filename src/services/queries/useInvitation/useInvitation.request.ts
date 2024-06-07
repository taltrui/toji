import supabase from "../../../config/supabase";
import { Invitation } from "./useInvitation.interface";

const fetchInvitation = async (invitation: string): Promise<Invitation> => {
  const { data, error } = await supabase
    .from("invitations")
    .select()
    .eq("id", invitation);

  if (error) {
    throw new Error(error.message);
  }

  return data?.[0];
};

export default fetchInvitation;
