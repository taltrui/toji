import supabase from "../../../config/supabase";
import { InvitationUpdate } from "../../queries/useInvitation/useInvitation.interface";

const updateInvitation = async (params: { id: string; toUpdate: InvitationUpdate }): Promise<null> => {
  const { data, error } = await supabase
    .from("invitations")
    .update(params.toUpdate)
    .eq("id", params.id)

    console.log(data)
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default updateInvitation;
