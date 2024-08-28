import supabase from "../../../config/supabase";

const login = async (payload: { email: string, password: string }): Promise<null> => {
  let { error } = await supabase.auth.signInWithPassword({
    email: payload.email,
    password: payload.password
  })

  if (error) {
    throw new Error(error.message);
  }

  return null;
};

export default login;
