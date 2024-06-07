import supabase from "../../../config/supabase";
import { Invitee } from "./useInvitees.interface";

const fetchInvitees = async (invitation: string): Promise<Invitee[] | null> => {
  const { data, error } = await supabase
    .from("invitees")
    .select()
    .eq("invitation", invitation);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default fetchInvitees;
