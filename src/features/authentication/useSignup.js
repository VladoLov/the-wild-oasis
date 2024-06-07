import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    // eslint-disable-next-line no-unused-vars
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email FaAddressBook."
      );
    },
  });

  return { signup, isLoading };
}
