import { useMutation } from "@tanstack/react-query";
import logout from "./useLogout.request";

const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};

export default useLogout;
