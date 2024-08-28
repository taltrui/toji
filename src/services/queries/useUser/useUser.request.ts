import { User } from "@supabase/supabase-js";
import supabase from "../../../config/supabase";

const fetchUser = async (): Promise<User | null> => {
  const { data, error } = await supabase.auth.getUser()

  if (error) {
    throw new Error(error.message);
  }

  return data.user;
};

export default fetchUser;
