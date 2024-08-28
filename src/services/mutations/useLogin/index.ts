import { useMutation } from "@tanstack/react-query";
import login from "./useLogin.request";

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export default useLogin;
