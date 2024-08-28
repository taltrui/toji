import supabase from "../../../config/supabase";

const logout = async (): Promise<null> => {
  let { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error(error.message);
  }

  return null;
};

export default logout;
