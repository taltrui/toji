import supabase from "../../../config/supabase";
import { Invitee } from "../../queries/useInvitees/useInvitees.interface";

const updateInvitees = async (params: Invitee[]): Promise<null> => {
  const { data, error } = await supabase
    .from("invitees")
    .upsert(params);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default updateInvitees;
