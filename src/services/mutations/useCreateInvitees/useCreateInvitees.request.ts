import supabase from "../../../config/supabase";
import { Invitee } from "../../queries/useInvitees/useInvitees.interface";

const createInvitees = async (params: Invitee[]): Promise<null> => {
  const { data, error } = await supabase
    .from("invitees")
    .insert(params, { defaultToNull: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default createInvitees;
